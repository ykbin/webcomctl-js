import { BaseControl, NQDOM } from 'webnetq-js';
import { ITEM_HTML, TEXT_CLASS, LIST_CLASS, UP_CLASS, DOWN_CLASS, hideClick, LEFT_CLASS, RIGHT_CLASS, sideClick } from 'uictmplt-loader!./template.mjs';

export default class UIDebugPanelControl extends BaseControl {
  _init() {
    const hideClickElm = NQDOM.getElementByClassName(this.element, hideClick);
    hideClickElm && hideClickElm.addEventListener("click", (event) => {
      const f = this.element.classList.contains(UP_CLASS);
      this.element.classList.remove(f ? UP_CLASS : DOWN_CLASS);
      this.element.classList.add(f ? DOWN_CLASS : UP_CLASS);
    });
    const sideClickElm = NQDOM.getElementByClassName(this.element, sideClick);
    sideClickElm && sideClickElm.addEventListener("click", (event) => {
      const f = this.element.classList.contains(RIGHT_CLASS);
      this.element.classList.remove(RIGHT_CLASS);
      this.element.classList.add(RIGHT_CLASS);
    });
  }

  setButton(name, params) {
    const itemElm = NQDOM.createElement(ITEM_HTML);
    const textElm = NQDOM.getElementByClassName(itemElm, TEXT_CLASS);
    const listElm = NQDOM.getElementByClassName(this.element, LIST_CLASS);
    if (itemElm && textElm && listElm) {
      const onclick = params.onclick;
      onclick && itemElm.addEventListener("click", (event) => onclick(event));
      textElm.textContent = name;
      listElm.appendChild(itemElm);
    }
  }
};
