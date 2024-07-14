import { BaseControl } from 'webnetq-js';
import { NAME, ROOT_HTML, ROOT_CLASS, PORT_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, PORT_CLASS, ROOT_HTML };
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
