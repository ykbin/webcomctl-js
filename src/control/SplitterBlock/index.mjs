import { BaseControl, NQDOM } from 'webnetq-js';
export * as TEMPLATE from './template.mjs';
import { NAME, ROOT_HTML, ROOT_CLASS, PORT_CLASS, NONE_CLASS, TOP_CLASS, RIGHT_CLASS, BOTTOM_CLASS, LEFT_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

const SplitterType = {
  NONE: 0,
  TOP: 1,
  RIGHT: 2,
  BOTTOM: 3,
  LEFT: 4,
};

SplitterType.toString = (sideType) => {
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
};

SplitterType.toClassName = (sideType) => {
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
};

export default class UISplitterBlockControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
    portClass: PORT_CLASS,
  } }

  _splitterType = SplitterType.NONE;

  _init() {
    this._splitterElm = NQDOM.getElementByClassName(this.element, NONE_CLASS);
  }
};
