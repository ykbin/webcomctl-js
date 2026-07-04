import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, ITEM_HTML, CSS, DESCRIPTION_TITLE, DESCRIPTION_HISTORY, LIST_CLASS, LIST_NAME, LIST_VALUE } from "./template.node";

export namespace ImageInfoPanel {

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
  private _descriptionElm?: HTMLElement;
  private _listElm?: HTMLElement;

  protected _init() {
    this._titleElm = NQDOM.getElementByClassName(super.element, DESCRIPTION_TITLE);
    this._descriptionElm = NQDOM.getElementByClassName(super.element, DESCRIPTION_HISTORY);
    this._listElm = NQDOM.getElementByClassName(super.element, LIST_CLASS);
  }

  public get title(): string {
    if (this._titleElm && this._titleElm.textContent)
      return this._titleElm.textContent;
    return "";
  }

  public set title(value: string) {
    this._titleElm && (this._titleElm.textContent = value);
  }

  public get description() {
    if (this._descriptionElm && this._descriptionElm.textContent)
      return this._descriptionElm.textContent;
    return "";
  }

  public set description(value: string) {
    this._descriptionElm && (this._descriptionElm.textContent = value);
  }

  public addListItem(name: string, value: string) {
    const itemElm = NQDOM.createElement(ITEM_HTML) as HTMLElement;
    const nameElm = NQDOM.getElementByClassName(itemElm, LIST_NAME);
    nameElm && (nameElm.textContent = name);
    const valueElm = NQDOM.getElementByClassName(itemElm, LIST_VALUE);
    valueElm && (valueElm.textContent = value);
    this._listElm && this._listElm.appendChild(itemElm);
  }
};

} // namespace ImageInfoPanel
