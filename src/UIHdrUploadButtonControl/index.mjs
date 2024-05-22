import { BaseControl, Random } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UIHdrUploadButtonControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
  } }

  _rootElm;
  _inputElm;
  _uploadVisible = false;

  _listeners = {
    upload: [],
  };

  constructor(element) {
    super(element);

    this._rootElm = element;
    const inputId = Random.nextElementId();
  
    this._inputElm = document.createElement('input');
    this._inputElm.id = inputId;
    this._inputElm.type="file";
    this._inputElm.addEventListener("input", (event) => {
      const files = event.target.files;
      this.dispatchEvent('upload', {files});
      event.target.value = null;
    });

    this._rootElm.appendChild(this._inputElm);
    this._rootElm.setAttribute('for', inputId);
  }

  setUploadVisible(value) {
    if (this._uploadVisible != value) {
      this._rootElm.classList.toggle(CLASS.HIDDEN);
      this._uploadVisible = value;
    }
  }

  dispatchEvent(type, event) {
    this._listeners[type].forEach(listener => listener(event));
  }

  addEventListener(type, listener) {
    this._listeners[type].push(listener);
  }
};
