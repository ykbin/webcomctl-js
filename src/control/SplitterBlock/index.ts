import { BaseControl, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, NONE_CLASS, TOP_CLASS, RIGHT_CLASS, BOTTOM_CLASS, LEFT_CLASS } from "./template.node";

enum SplitterType {
  NONE = 0,
  TOP = 1,
  RIGHT = 2,
  BOTTOM = 3,
  LEFT = 4,
};

namespace SplitterType {

function toString(sideType: SplitterType) {
  switch (sideType) {
  case SplitterType.NONE:
    return 'none';
  case SplitterType.TOP:
    return 'top';
  case SplitterType.RIGHT:
    return 'right';
  case SplitterType.BOTTOM:
    return 'bottom';
  case SplitterType.LEFT:
    return 'left';
  }
}

function toClassName(sideType: SplitterType) {
  switch (sideType) {
  case SplitterType.NONE:
    return NONE_CLASS;
  case SplitterType.TOP:
    return TOP_CLASS;
  case SplitterType.RIGHT:
    return RIGHT_CLASS;
  case SplitterType.BOTTOM:
    return BOTTOM_CLASS;
  case SplitterType.LEFT:
    return LEFT_CLASS;
  }
}

} // namespace SplitterType

export namespace SplitterBlock {

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
  private _splitterType = SplitterType.NONE;
  private _splitterElm?: HTMLElement;

  protected _init() {
    this._splitterElm = NQDOM.getElementByClassName(super.element, NONE_CLASS);
  }
};

} // namespace SplitterBlock
