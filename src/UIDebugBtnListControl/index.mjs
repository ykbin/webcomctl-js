import { BaseControl } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from './template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UIDebugBtnListControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  constructor(element) {
    super(element);
  }

  setButton(name, params) {
    const btnElm = document.createElement('div');
    btnElm.textContent = name;
    if (params.onclick) {
      btnElm.addEventListener("click", (event) => params.onclick(event));
    }
    this.element.appendChild(btnElm);
  }
};
