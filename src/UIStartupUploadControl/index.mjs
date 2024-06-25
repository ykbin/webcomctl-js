import { NQDOM, BaseControl, Random } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

const UPLOAD_EVENT = 'upload';

export default class UIStartupUploadControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
  } }

  _fdropElm;
  _inputElm;

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
          this.dispatchEvent(UPLOAD_EVENT, { kind: 'drop', files });
        }
      });
    }

    const lableElm = element.querySelector('label');
    if (lableElm) {
      const inputId = Random.nextElementId();
    
      const inputElm = document.createElement('input');
      inputElm.id = inputId;
      inputElm.type = "file";

      inputElm.addEventListener("input", (event) => {
        const files = event.target.files;
        this.dispatchEvent(UPLOAD_EVENT, { kind: 'input', files });
        event.target.value = null;
      });
  
      lableElm.appendChild(inputElm);
      lableElm.setAttribute('for', inputId);
    }

    this.registerEvent(UPLOAD_EVENT);
  }
};