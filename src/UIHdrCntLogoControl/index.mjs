import { BaseControl } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from './template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UIHdrCntLogoControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass: CLASS.ROOT,
  } }

  constructor(element) {
    super(element);
  }
};
