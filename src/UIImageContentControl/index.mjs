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

  _imageElm;

  constructor(element) {
    super(element);
    
    this._imageElm = element.querySelector("." + CLASS.CONTENT);
  }

  setContent(url) {
    if (this._imageElm) {
      this._imageElm.src = url;
    }
  }
};
