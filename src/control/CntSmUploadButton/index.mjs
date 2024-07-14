import { BaseControl, Random } from 'webnetq-js';
export * as TEMPLATE from './template.mjs';
import { NAME, ROOT_HTML, ROOT_CLASS, LOAD_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML, CSS };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

const UPLOAD_EVENT = 'upload';

export default class UICntSmUploadButtonControl  extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
  } }

  _loadEnable = false;

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

    this.registerEvent(UPLOAD_EVENT);
  }

  get loadEnable() { return this._loadEnable; }
  set loadEnable(value) {
    if (value != this._loadEnable) {
      const method = value ? 'add' : 'remove';
      this.element.classList[method](LOAD_CLASS);
      this._loadEnable = value;
    }
  }
};
