import { BaseControl, Random } from 'webnetq-js';
import { NAME, HTML, CSS, ROOT_CLASS, LOAD_CLASS, HEIGHT_CLASS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML as HTML };
export const template = {
  NAME, HTML, CSS,
};

const UPLOAD_EVENT = 'upload';

export default class UICntButtBRedControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass: ROOT_CLASS,
  } }

  _heightElm;

  _init() {
    const lableElm = this.element.querySelector('label');
    if (lableElm) {
      const inputId = Random.nextElementId();
    
      const inputElm = document.createElement('input');
      inputElm.id = inputId;
      inputElm.type = "file";

      inputElm.addEventListener("input", (event) => {
        const files = event.target.files;
        this.dispatchEvent(UPLOAD_EVENT, {files});
        event.target.value = null;
      });

      lableElm.appendChild(inputElm);
      lableElm.setAttribute('for', inputId);
    }

    this._heightElm = this.element.querySelector('.' + HEIGHT_CLASS);
    if (this._heightElm) {
      this._heightElm.style.height = "0";
      this._heightElm.innerText = "";
    }

    this.registerEvent(UPLOAD_EVENT);
  }

  loadProcess(value) {
    if (value === null) {
      this.element.classList.remove(LOAD_CLASS);
      this.element.classList.add(ROOT_CLASS);
    }
    else if (Number.isNaN(value)) {
      this.element.classList.remove(ROOT_CLASS);
      this.element.classList.add(LOAD_CLASS);
    }
    else if (this._heightElm) {
      this._heightElm.style.height = value + "%";
    }
  }
};
