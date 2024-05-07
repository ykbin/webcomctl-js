import { BaseControl, NQDOM } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from './template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
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
    return CLASS.NONE;
  case SplitterType.TOP:
    return CLASS.TOP;
  case SplitterType.RIGHT:
    return CLASS.RIGHT;
  case SplitterType.BOTTOM:
    return CLASS.BOTTOM;
  case SplitterType.LEFT:
    return CLASS.LEFT;
  }
};

export default class UISplitterBlockControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  _splitterType = SplitterType.NONE;

  constructor(element) {
    super(element);
    this._splitterElm = NQDOM.getElementByClassName(element, CLASS.NONE);
  }
};
