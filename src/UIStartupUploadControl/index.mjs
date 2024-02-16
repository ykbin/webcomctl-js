import { NQDOM, BaseControl } from 'webnetq-js';

const CLASS = {
  ROOT: 'uic-strupl-root',
  INPUT: 'uic-strupl-input',
  FDROP: 'uic-strupl-fdrop',
  DSHOW: 'uic-strupl-dshow',
  DHIDE: 'uic-strupl-dhide',
};

const _rootHTML = `
<div class="${CLASS.ROOT}" align="center">
  <h2>Drop your file</h2>
  <h2>Upload your file</h2>
  <div class="${CLASS.FDROP} ${CLASS.DHIDE}">
    <div>
      <div class="uic-strupl-fdimg"></div>
      <div class="uic-strupl-fdbtn">
        <label for="uic-strupl-input" class="notranslate" translate="no"><span></span>Upload</label>
        <input id="uic-strupl-input" class="${CLASS.INPUT}" type="file">
      </div>
    </div>
  </div>
</div>
`;

export default class UIStartupUploadControl extends BaseControl {
  static get template() { return {
    name: 'StartupUpload',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
  } }

  _fdropElm;
  _inputElm;
  _listeners = {
    upload: [],
  };

  constructor(element) {
    super(element);

    this._fdropElm = NQDOM.getElementByClassName(element, CLASS.FDROP);
    if (this._fdropElm) {
      const showDropArea = () => {
        this._fdropElm.classList.remove(CLASS.DHIDE);
        this._fdropElm.classList.add(CLASS.DSHOW);
      };
      const hideDropArea = () => {
        this._fdropElm.classList.remove(CLASS.DSHOW);
        this._fdropElm.classList.add(CLASS.DHIDE);
      };
      let count = 0;
      this._fdropElm.addEventListener("dragenter", (event) => {
        if (count++ == 0)
          showDropArea();
      });
      this._fdropElm.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      this._fdropElm.addEventListener("dragleave", (event) => {
        if (--count == 0)
          hideDropArea();
      });
      this._fdropElm.addEventListener("drop", (event) => {
        event.preventDefault();
        hideDropArea();
        count = 0;

        if (event.dataTransfer.items) {
          let files = [];
          for (let i = 0; i < event.dataTransfer.items.length; i++) {
            if (event.dataTransfer.items[i].kind === 'file') {
              const file = event.dataTransfer.items[i].getAsFile();
              files.push(file);
            }
          }
          this.dispatchEvent('upload', { kind: 'drop', files });
        }
      });
    }

    this._inputElm = NQDOM.getElementByClassName(element, CLASS.INPUT);
    this._inputElm && this._inputElm.addEventListener("input", (event) => {
      const files = event.target.files;
      this.dispatchEvent('upload', { kind: 'input', files });
      event.target.value = null;
    });
  }

  dispatchEvent(type, event) {
    this._listeners[type].forEach(listener => listener(event));
  }

  addEventListener(type, listener) {
    this._listeners[type].push(listener);
  }
};
