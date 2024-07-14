import { BaseControl } from "webnetq-js";
import { NAME, ROOT_HTML, ROOT_CLASS, LINK_ON_CLASS, LINK_OFF_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML, CSS };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
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
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
  } }

  _init() {
    const linkElm = this.element.querySelector(`a.${LINK_ON_CLASS}`);
    if (linkElm && isLocationEqual(linkElm.href)) {
      linkElm.classList.remove(LINK_ON_CLASS);
      linkElm.classList.add(LINK_OFF_CLASS);
    }
  }
};
