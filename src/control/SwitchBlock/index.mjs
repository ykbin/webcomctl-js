import { BaseControl } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UISwitchBlockControl  extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  _isSecond = false;

  showFirst() {
    if (this._isSecond) {
      this.element.classList.add(CLASS.NTH1);
      this.element.classList.remove(CLASS.NTH2);
      this._isSecond = false;
    }
  }

  showSecond() {
    if (!this._isSecond) {
      this.element.classList.add(CLASS.NTH2);
      this.element.classList.remove(CLASS.NTH1);
      this._isSecond = true;
    }
  }
};
