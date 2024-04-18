import { BaseControl, Random } from 'webnetq-js';

const CLASS = {
  ROOT: "uic-csupl-root",
  LOAD: "uic-csupl-load",
};

const _rootHTML = `
<div class="${CLASS.ROOT}">
  <span></span>
  <label class="notranslate" translate="no">Upload</label>
</div>
`;

export default class UICntSmUploadButtonControl  extends BaseControl {
  static get template() { return {
    name: 'CntSmUploadButton',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
  } }

  _rootElm;
  _loadEnable = false;
  _listeners = {
    upload: [],
  };

  constructor(element) {
    super(element);
    this._rootElm = element;

    const lableElm = element.querySelector('label');
    if (lableElm) {
      const inputId = Random.nextElementId();
    
      const inputElm = document.createElement('input');
      inputElm.id = inputId;
      inputElm.type="file";
      inputElm.addEventListener("input", (event) => {
        const files = event.target.files;
        this.dispatchEvent('upload', {files});
        event.target.value = null;
      });
  
      lableElm.appendChild(inputElm);
      lableElm.setAttribute('for', inputId);
    }
  }

  get loadEnable() { return this._loadEnable; }
  set loadEnable(value) {
    if (value != this._loadEnable) {
      const method = value ? 'add' : 'remove';
      this._rootElm.classList[method](CLASS.LOAD);
      this._loadEnable = value;
    }
  }

  dispatchEvent(type, event) {
    this._listeners[type].forEach(listener => listener(event));
  }

  addEventListener(type, listener) {
    this._listeners[type].push(listener);
  }
};
