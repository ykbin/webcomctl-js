import { BaseControl, Util } from 'webnetq-js';
import { CONTENT_CLASS } from 'module-loader!./template.mjs';

export default class UIImageContentControl extends BaseControl {
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
