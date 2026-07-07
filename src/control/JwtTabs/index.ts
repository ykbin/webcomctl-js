import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, TAB_CLASS, ACTIVE_CLASS, ROOT_HTML, CSS } from "./template.node";

const CHANGE_EVENT = 'change';

export namespace JwtTabs {

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
  private _tabs: HTMLElement[] = [];
  private _active = '';

  protected _init() {
    this.registerEvent(CHANGE_EVENT);

    this._tabs = Array.prototype.slice.call(this.element.querySelectorAll('.' + TAB_CLASS));
    this._tabs.forEach(tab => {
      if (tab.classList.contains(ACTIVE_CLASS))
        this._active = tab.dataset.tab || '';
      tab.addEventListener('click', () => this._select(tab));
    });
  }

  private _select(tab: HTMLElement) {
    const name = tab.dataset.tab || '';
    if (name === this._active)
      return;
    this._tabs.forEach(iter => iter.classList.toggle(ACTIVE_CLASS, iter === tab));
    this._active = name;
    this.dispatchEvent(CHANGE_EVENT, { name });
  }

  public get active() {
    return this._active;
  }

  public setActive(name: string) {
    const tab = this._tabs.find(iter => iter.dataset.tab === name);
    if (tab)
      this._select(tab);
  }
};

} // namespace JwtTabs
