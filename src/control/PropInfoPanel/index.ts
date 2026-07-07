import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, TITLE, ITEM_HTML, LIST_CLASS, LIST_NAME, LIST_VALUE } from "./template.node";

export namespace PropInfoPanel {

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
  private _listElm?: HTMLElement;
  private _valueElmMap: { [name: string]: any } = {};

  protected _init() {
    this._titleElm = NQDOM.getElementByClassName(super.element, TITLE);
    this._listElm = NQDOM.getElementByClassName(super.element, LIST_CLASS);
  }

  public get title(): string {
    return this._titleElm ? (this._titleElm.textContent || "") : "";
  }

  public set title(value: string) {
    this._titleElm && (this._titleElm.textContent = value);
  }

  public setItem(name: string, value: string) {
    let valueElm = this._valueElmMap[name];
    if (valueElm)
      valueElm.textContent = value;
    else if (this._listElm) {
      const itemElm = NQDOM.createElement(ITEM_HTML) as HTMLElement;
      const nameElm = NQDOM.getElementByClassName(itemElm, LIST_NAME);
      valueElm = NQDOM.getElementByClassName(itemElm, LIST_VALUE);
      if (valueElm) {
        this._valueElmMap[name] = valueElm;
        valueElm.textContent = NQDOM.escapeHTML(value);
        nameElm && (nameElm.textContent = NQDOM.escapeHTML(name));
        this._listElm.appendChild(itemElm);
      }
    }
  }

  public clearItems() {
    this._valueElmMap = {};
    this._listElm && (this._listElm.innerHTML = "");
  }
};

} // namespace PropInfoPanel
