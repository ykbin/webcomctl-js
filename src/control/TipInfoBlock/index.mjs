import { BaseControl } from 'webnetq-js';
import { ROOT_CLASS, PULL_OUT_RIGHT } from 'module-loader!./template.mjs';

export default class UITipInfoBlockControl extends BaseControl {
  _isShow = false;

  _init() {
  }

  hide() {
    if (this._isShow) {
      //this.element.classList.add(NTH1_CLASS);
      this.element.classList.remove(PULL_OUT_RIGHT);
      this._isShow = false;
    }
  }

  show() {
    if (!this._isShow) {
      this.element.classList.add(PULL_OUT_RIGHT);
      //this.element.classList.remove(NTH1_CLASS);
      this._isShow = true;
    }
  }

};