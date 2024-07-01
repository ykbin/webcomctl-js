import { BaseControl } from 'webnetq-js';
import { NAME, ROOT_HTML, ROOT_CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UIHdrHomeButtonControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
  } }
};
