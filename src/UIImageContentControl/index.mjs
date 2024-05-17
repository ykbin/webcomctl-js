import { BaseControl } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from './template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UIImageContentControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  _urlRef = null;
  _imageElm;

  constructor(element) {
    super(element);
    
    this._imageElm = element.querySelector("." + CLASS.CONTENT);
  }

  setContent(params) {
    if (!this._imageElm)
      return;

    if (this._urlRef) {
      window.URL.revokeObjectURL(this._urlRef);
      this._urlRef = null;
    }

    let url = null;
    if (typeof params === 'string')
      url = params;
    else {
      this._urlRef = window.URL.createObjectURL(params);
      url = this._urlRef;
    }

    this._imageElm.src = url;
  }
};
