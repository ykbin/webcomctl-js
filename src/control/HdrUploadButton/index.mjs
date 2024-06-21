import { BaseControl, Random } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

const UPLOAD_EVENT = 'upload';

export default class UIHdrUploadButtonControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
  } }

  _inputElm;
  _uploadVisible = false;

  _init() {
    const inputId = Random.nextElementId();
  
    this._inputElm = document.createElement('input');
    this._inputElm.id = inputId;
    this._inputElm.type = "file";
    this._inputElm.addEventListener("input", (event) => {
      const files = event.target.files;
      this.dispatchEvent(UPLOAD_EVENT, {files});
      event.target.value = null;
    });

    this.element.appendChild(this._inputElm);
    this.element.setAttribute('for', inputId);

    this.registerEvent(UPLOAD_EVENT);
  }

  setUploadVisible(value) {
    if (this._uploadVisible != value) {
      this.element.classList.toggle(CLASS.HIDDEN);
      this._uploadVisible = value;
    }
  }
};
