import { BaseControl, NQDOM } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from './template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UILoadingBlockControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  _isLoad = false;
  _loadElm;

  constructor(element) {
    super(element);
    this._loadElm = NQDOM.getElementByClassName(element, CLASS.UNLOAD);
  }

  show() {
    if (this._loadElm && !this._isLoad) {
      this._loadElm.classList.remove(CLASS.UNLOAD);
      this._isLoad = true;
    }
  }

  hide() {
    if (this._loadElm && this._isLoad) {
      this._loadElm.classList.add(CLASS.UNLOAD);
      this._isLoad = false;
    }
  }
};
