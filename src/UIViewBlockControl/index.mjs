import { BaseControl } from 'webnetq-js';

const CLASS = {
  ROOT: "uic-viewblk-root",
  PORT: "uic-viewblk-port",
};

const _rootHTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export default class UIViewBlockControl extends BaseControl {
  static get template() { return {
    name: 'ViewBlock',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  constructor(element) {
    super(element);
  }
};
