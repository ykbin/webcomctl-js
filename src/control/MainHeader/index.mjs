import { BaseControl } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UIHdrHomeButtonControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }
};
