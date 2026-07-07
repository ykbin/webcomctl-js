import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS, SHOW, ANIME } from "./template.node";

export namespace RightSideProperties {

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
  private _visible = false;
  private _animation = false;

  protected _init() {
  }

  public get visible() {
    return this._visible;
  }

  public set visible(value) {
    if (this._visible != value) {
      this.element.classList[value ? 'add' : 'remove'](SHOW);
      this.element.classList[this._animation ? 'add' : 'remove'](ANIME);
      this._visible = value;
    }
  }

  public get animation() { return this._animation; }
  public set animation(value) { this._animation = value; }
};

} // namespace RightSideProperties
