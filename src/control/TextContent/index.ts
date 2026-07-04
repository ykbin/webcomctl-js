import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, NUMBERS, CONTENT, OFFSET } from "./template.node";

const toHexString = (value: number, numPad: number) => value.toString(16).toUpperCase().padStart(numPad, '0');

interface Item {
  type: string;
  text: string;
};

export namespace TextContent {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  private _numbersElm!: HTMLElement | null;
  private _contentElm!: HTMLElement | null;
  private _scrollTop?: number;

  protected _init() {
    this._numbersElm = super.element.querySelector("." + NUMBERS);
    this._numbersElm && (this._numbersElm.addEventListener("scroll", (e) => this._onScroll(e)));
    this._contentElm = super.element.querySelector("." + CONTENT);
    this._contentElm && (this._contentElm.addEventListener("scroll", (e) => this._onScroll(e)));
  }

  private _onScroll(e: Event) {
    const value = (e.target as HTMLElement).scrollTop;
    if (this._scrollTop !== value) {
      for (const element of [ this._contentElm, this._numbersElm])
        element && (element !== e.target) && (element.scrollTop = value);
      this._scrollTop = value;
    }
  }

  public appendItem(number: number, content: string | Array<string | Item>) {
    if (this._numbersElm) {
      const li = document.createElement('li');
      li.textContent = number.toString();
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

  public setContent(content: string | ArrayBuffer) {
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
          let list: Array<string | Item> = [{
            type: OFFSET,
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

} // namespace TextContent
