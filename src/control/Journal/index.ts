import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, TITLE, LIST } from "./template.node";

export namespace Journal {

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
  private _titleElm?: HTMLElement;
  private _dataElm?: HTMLElement;

  protected _init() {
    this._titleElm = NQDOM.getElementByClassName(super.element, TITLE) as HTMLElement;
    this._dataElm = NQDOM.getElementByClassName(super.element, LIST) as HTMLElement;
  }

  public setTitle(title: string) {
    this._titleElm && (this._titleElm.textContent = title);
  }

  public setData(lines: string[]) {
    if (!this._dataElm)
      return;

    this._dataElm.innerHTML = "";
    for (const text of lines) {
      const element = document.createElement("div");
      element.textContent = text;
      this._dataElm.appendChild(element);
    }
  }
};

} // namespace Journal
