import { BaseControl } from "webnetq-js";
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UILoadingControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
  } }

  _visible;

  constructor(element) {
    super(element);
    this._visible = element.classList.contains(CLASS.SHOW);
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    if (this._visible != value) {
      this.element.classList.toggle(CLASS.SHOW);
      this._visible = value;
    }
  }
};
