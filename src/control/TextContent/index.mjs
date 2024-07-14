import { BaseControl } from 'webnetq-js';
import { NAME, ROOT_HTML, ROOT_CLASS, NUMBERS_CLASS, CONTENT_CLASS, OFFSET_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

const toHexString = (value, numPad) => value.toString(16).toUpperCase().padStart(numPad, '0');

export default class UITextContentControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
  } }

  _init() {
    this._numbersElm = null;
    this._contentElm = null;
    this._content = null;
    this._scrollTop = null;

    this._numbersElm = this.element.querySelector("." + NUMBERS_CLASS);
    this._numbersElm && (this._numbersElm.addEventListener("scroll", (e) => this._onScroll(e)));
    this._contentElm = this.element.querySelector("." + CONTENT_CLASS);
    this._contentElm && (this._contentElm.addEventListener("scroll", (e) => this._onScroll(e)));
  }

  _onScroll(e) {
    const value = e.target.scrollTop;
    if (this._scrollTop !== value) {
      for (const element of [ this._contentElm, this._numbersElm])
        element && (element !== e.target) && (element.scrollTop = value);
      this._scrollTop = value;
    }
  }

  appendItem(number, content) {
    if (this._numbersElm) {
      const li = document.createElement('li');
      li.textContent = number;
      this._numbersElm.appendChild(li);
    }
    if (this._contentElm) {
      const span = document.createElement('span');
      if (typeof content === "string")
        span.textContent = content;
      else if (Array.isArray(content)) {
        let text = "";
        for (const iter of content) {
          if (typeof iter === 'string')
            text += iter;
          else {
            if (text) {
              span.appendChild(document.createTextNode(text));
              text = "";
            }
            const item = document.createElement('span');
            item.classList.add(iter.type);
            item.textContent = iter.text;
            span.appendChild(item);
          }
        }
        text && span.appendChild(document.createTextNode(text));
      }
      this._contentElm.appendChild(span);
    }
  }

  setContent(content) {
    this._content = content;
    this._numbersElm && (this._numbersElm.innerHTML = "");
    this._contentElm && (this._contentElm.innerHTML = "");
    if (this._numbersElm || this._contentElm) {
      if (typeof content === 'string') {
        let count = 0;
        for (const text of content.split("\n")) {
          this.appendItem(++count, text);
        }
      }
      else if (content instanceof ArrayBuffer) {
        const bytes = new Uint8Array(content);
        let count = 0;
        for (let i = 0; i < bytes.length;) {
          const sz = Math.min(bytes.length - i, 16);
          let list = [{
            type: OFFSET_CLASS,
            text: toHexString(i, 8),
          }];
          for (let k = 0; k < sz; k++) {
            if (k == 0 || k == 8)
              list.push("  ");
            else
              list.push(" ");
            list.push(toHexString(bytes[i + k], 2));
          }
          this.appendItem(++count, list);
          i += sz;
        }
      }
    }
  }
};
