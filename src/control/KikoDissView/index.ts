import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, SHOW_CLASS, IMAGE_CLASS } from "./template.node";

export namespace KikoDissView {

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
  private _visible = false;
  private _imageElm?: HTMLImageElement;

  protected _init() {
    this._visible = super.element.classList.contains(SHOW_CLASS);
    this._imageElm = NQDOM.getElementByClassName(super.element, IMAGE_CLASS) as HTMLImageElement;
    super.element.addEventListener("click", event => {
      if (this._visible && (event.target as HTMLElement).tagName !== "IMG")
        this.visible = false;
    });
  }

  public get visible() {
    return this._visible;
  }

  public set visible(value) {
    if (this._visible != value) {
      const method = value ? 'add' : 'remove';
      this.element.classList[method](SHOW_CLASS);
      this._visible = value;
    }
  }

  public setContent(value: string) {
    if (this._imageElm) {
      this._imageElm.src = value;
    }
  }
};

} // namespace KikoDissView
