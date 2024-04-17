import { BaseControl } from 'webnetq-js';

const CLASS = {
  ROOT: "uic-rhtblk-root",
  PORT: "uic-rhtblk-port",
};

const _rootHTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export default class UIRightBlockControl extends BaseControl {
  static get template() { return {
    name: 'RightBlock',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  constructor(element) {
    super(element);
  }
};
