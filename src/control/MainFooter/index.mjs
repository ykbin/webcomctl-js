import { BaseControl } from "webnetq-js";
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

function isLocationEqual(href) {
  if (typeof document === 'object') {
    const currHref = document.location.href;
    if (currHref === href) {
      return true;
    }
    if (!href.endsWith('/')) {
      return currHref === (href + '/');
    }
  }
  return false;
}

export default class UIMainFooterControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
  } }

  _init() {
    const linkElm = this.element.querySelector(`a.${CLASS.LINK_ON}`);
    if (linkElm && isLocationEqual(linkElm.href)) {
      linkElm.classList.remove(CLASS.LINK_ON);
      linkElm.classList.add(CLASS.LINK_OFF);
    }
  }
};
