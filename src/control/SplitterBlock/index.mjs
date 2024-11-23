import { BaseControl, NQDOM } from 'webnetq-js';
import { NONE_CLASS, TOP_CLASS, RIGHT_CLASS, BOTTOM_CLASS, LEFT_CLASS } from 'uictmplt-loader!./template.mjs';

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
  _splitterType = SplitterType.NONE;

  _init() {
    this._splitterElm = NQDOM.getElementByClassName(this.element, NONE_CLASS);
  }
};
