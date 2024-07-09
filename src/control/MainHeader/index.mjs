import { BaseControl } from 'webnetq-js';
import { NAME, ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, PORT_CLASS, ROOT_HTML };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UIHdrHomeButtonControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass: ROOT_HTML,
    portClass: ROOT_CLASS,
  } }
};
