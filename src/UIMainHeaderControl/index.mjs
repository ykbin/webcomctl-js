import { BaseControl } from 'webnetq-js';

const CLASS = {
  ROOT: "uic-mhdr-root",
  PORT: "uic-mhdr-port",
};

const _rootHTML = `
<header class="${CLASS.ROOT} ${CLASS.PORT}" draggable="false"></header>
`;

export default class UIHdrHomeButtonControl extends BaseControl {
  static get template() { return {
    name: 'MainHeader',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  constructor(element) {
    super(element);
  }
};
