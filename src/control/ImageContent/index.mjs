import { BaseControl, Util } from 'webnetq-js';
export * as TEMPLATE from './template.mjs';
import { NAME, ROOT_HTML, ROOT_CLASS, CONTENT_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML, CSS };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UIImageContentControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
  } }

  _urlRef = null;
  _imageElm;

  _init() {
    this._imageElm = this.element.querySelector("." + CONTENT_CLASS);
  }

  setContent(params) {
    if (!this._imageElm)
      return;

    if (this._urlRef) {
      Util.revokeObjectURL(this._urlRef);
      this._urlRef = null;
    }

    let url = null;
    if (typeof params === 'string')
      url = params;
    else {
      this._urlRef = Util.createObjectURL(params);
      url = this._urlRef;
    }

    this._imageElm.src = url;
  }
};
