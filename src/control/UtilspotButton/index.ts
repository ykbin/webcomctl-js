import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, BUTTON_ACTIVE } from "./template.node";

export namespace UtilspotButton {

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
  private _tableOfContents?: HTMLElement;

  protected _init() {
    this._tableOfContents = NQDOM.getElementByClassName(super.element, ROOT_CLASS);

    if (this._tableOfContents) {
      Array.prototype.forEach.call(this._tableOfContents.children, iter => {
        if (iter.href && iter.href == location.href) {
          iter.classList.add(BUTTON_ACTIVE);
        }
      });
    }
  }
};

} // namespace UtilspotButton
