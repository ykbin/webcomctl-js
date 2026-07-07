import { BaseControl, NQDOM, Random } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, LIST_CLASS, URL_CLASS, URL_OFF_CLASS, METHOD_CLASS, COUNTER_CLASS, ITEM_HTML } from "./template.node";

export namespace RequestStatistics {

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
  private _umToIdMap = new Map<string,string>;
  private _listElm?: HTMLElement;
  private _itemTemplate?: HTMLElement;

  protected _init() {
    this._listElm = NQDOM.getElementByClassName(super.element, LIST_CLASS);
    this._itemTemplate = NQDOM.createElement(ITEM_HTML);
  }

  public setValue(url: string, method: string, counter: number) {
    if (!this._listElm || !url || !method)
      return;

    const um = url + "$" + method;
    let id = this._umToIdMap.get(um);

    let counterElm = id && this.element.ownerDocument.getElementById(id);
    if (!counterElm) {
      if (!this._itemTemplate)
        return;

      const itemElm = this._itemTemplate.cloneNode(true) as HTMLElement;
      id = Random.nextElementId();

      counterElm = NQDOM.getElementByClassName(itemElm, COUNTER_CLASS) as HTMLElement;
      if (!counterElm)
        return;
      counterElm.id = id;

      const urlElm = NQDOM.getElementByClassName(itemElm, URL_CLASS) as HTMLAnchorElement;
      if (urlElm) {
        urlElm.textContent = url;
        urlElm.href = url;
        if (method != "GET")
          urlElm.classList.add(URL_OFF_CLASS);
      }

      const methodElm = NQDOM.getElementByClassName(itemElm, METHOD_CLASS) as HTMLElement;
      methodElm && (methodElm.textContent = method);

      this._listElm.appendChild(itemElm);
      this._umToIdMap.set(um, id);
    }

    counterElm.textContent = counter.toString();
  }
};

} // namespace RequestStatistics
