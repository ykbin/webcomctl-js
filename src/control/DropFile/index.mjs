import { BaseControl } from "webnetq-js";
import { NAME, ROOT_HTML, ROOT_CLASS, SHOW_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UIDropFileControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
  } }

  _visible;

  _init() {
    this._visible = this.element.classList.contains(SHOW_CLASS);
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    if (value != this._visible) {
      this.element.classList.toggle(SHOW_CLASS, value);
      this._visible = value;
    }
  }
};
