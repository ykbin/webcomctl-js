import { BaseControl } from 'webnetq-js';
export * as TEMPLATE from './template.mjs';
import { NAME, ROOT_HTML, ROOT_CLASS, PORT_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UILeftBlockControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
    portClass: PORT_CLASS,
  } }
};
