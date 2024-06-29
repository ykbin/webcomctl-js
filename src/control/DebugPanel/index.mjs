import { BaseControl, NQDOM } from 'webnetq-js';
import { NAME, ROOT_HTML, ITEM_HTML, ROOT_CLASS, TEXT_CLASS, LIST_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UIDebugPanelControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass: ROOT_CLASS,
  } }

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
