import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, CLICK } from "./template.node";

const CLICK_EVENT = "click";

export namespace VertButtonInfo {

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
    const clicknElm = NQDOM.getElementByClassName(super.element, CLICK);
    if (clicknElm) {
      clicknElm.addEventListener('click', (event) => {
        this.dispatchEvent(CLICK_EVENT, event);
      });
      this.registerEvent(CLICK_EVENT);
    }
  }
};

} // namespace VertButtonInfo
