import { BaseControl, NQDOM } from 'webnetq-js';
import { NAME, ROOT_HTML, ROOT_CLASS, PORT_CLASS, UNLOAD_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, PORT_CLASS, ROOT_HTML };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UILoadingBlockControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
    portClass: PORT_CLASS,
  } }

  _isLoad = false;
  _loadElm;

  _init() {
    this._loadElm = NQDOM.getElementByClassName(this.element, UNLOAD_CLASS);
  }

  show() {
    if (this._loadElm && !this._isLoad) {
      this._loadElm.classList.remove(UNLOAD_CLASS);
      this._isLoad = true;
    }
  }

  hide() {
    if (this._loadElm && this._isLoad) {
      this._loadElm.classList.add(UNLOAD_CLASS);
      this._isLoad = false;
    }
  }
};
