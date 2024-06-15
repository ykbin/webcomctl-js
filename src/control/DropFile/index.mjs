import { BaseControl } from "webnetq-js";
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UIDropFileControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
  } }

  _visible;

  _init() {
    this._visible = this.element.classList.contains(CLASS.SHOW);
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    if (value != this._visible) {
      this.element.classList.toggle(CLASS.SHOW, value);
      this._visible = value;
    }
  }
};
