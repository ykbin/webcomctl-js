import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS, UNLOAD_CLASS } from "./template.node";

export namespace LoadingBlock {

export const classList = {
  ROOT_CLASS,
  PORT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  private _isLoad = false;
  private _loadElm?: HTMLElement;

  protected _init() {
    this._loadElm = NQDOM.getElementByClassName(super.element, UNLOAD_CLASS);
  }

  public show() {
    if (this._loadElm && !this._isLoad) {
      this._loadElm.classList.remove(UNLOAD_CLASS);
      this._isLoad = true;
    }
  }

  public hide() {
    if (this._loadElm && this._isLoad) {
      this._loadElm.classList.add(UNLOAD_CLASS);
      this._isLoad = false;
    }
  }
};

} // namespace LoadingBlock
