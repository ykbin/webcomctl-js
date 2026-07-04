import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, LINK_ON_CLASS, LINK_OFF_CLASS } from "./template.node";

function isLocationEqual(href: string) {
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

export namespace MainFooter {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  protected _init() {
    const linkElm = super.element.querySelector(`a.${LINK_ON_CLASS}`) as HTMLAnchorElement;
    if (linkElm && isLocationEqual(linkElm.href)) {
      linkElm.classList.remove(LINK_ON_CLASS);
      linkElm.classList.add(LINK_OFF_CLASS);
    }
  }
};

} // namespace MainFooter
