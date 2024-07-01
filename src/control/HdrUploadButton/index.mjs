import { BaseControl, Random } from 'webnetq-js';
import { NAME, ROOT_HTML, ROOT_CLASS, HIDDEN_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

const UPLOAD_EVENT = 'upload';

export default class UIHdrUploadButtonControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
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
      this.element.classList.toggle(HIDDEN_CLASS);
      this._uploadVisible = value;
    }
  }
};
