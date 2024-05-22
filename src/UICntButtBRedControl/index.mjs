import { BaseControl, Random } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

const UPLOAD_EVENT = 'upload';

export default class UICntButtBRedControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
  } }

  _rootElm;
  _heightElm;

  constructor(element) {
    super(element);

    this._rootElm = element;
    const lableElm = this._rootElm.querySelector('label');
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

    this._heightElm = this._rootElm.querySelector('.' + CLASS.HEIGHT);
    if (this._heightElm) {
      this._heightElm.style.height = "0";
      this._heightElm.innerText = "";
    }

    this.registerEvent(UPLOAD_EVENT);
  }

  loadProcess(value) {
    if (value === null) {
      this._rootElm.classList.remove(CLASS.LOAD);
      this._rootElm.classList.add(CLASS.ROOT);
    }
    else if (Number.isNaN(value)) {
      this._rootElm.classList.remove(CLASS.ROOT);
      this._rootElm.classList.add(CLASS.LOAD);
    }
    else if (this._heightElm) {
      this._heightElm.style.height = value + "%";
    }
  }
};
