import { BaseControl } from 'webnetq-js';
export * as TEMPLATE from './template.mjs';
import { NAME, ROOT_HTML, ROOT_CLASS, PORT_CLASS, NTH1_CLASS, NTH2_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UISwitchBlockControl  extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
    portClass: PORT_CLASS,
  } }

  _isSecond = false;

  showFirst() {
    if (this._isSecond) {
      this.element.classList.add(NTH1_CLASS);
      this.element.classList.remove(NTH2_CLASS);
      this._isSecond = false;
    }
  }

  showSecond() {
    if (!this._isSecond) {
      this.element.classList.add(NTH2_CLASS);
      this.element.classList.remove(NTH1_CLASS);
      this._isSecond = true;
    }
  }
};
