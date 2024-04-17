import { BaseControl } from 'webnetq-js';

const CLASS = {
  ROOT: "uic-lftblk-root",
  PORT: "uic-lftblk-port",
};

const _rootHTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export default class UILeftBlockControl extends BaseControl {
  static get template() { return {
    name: 'LeftBlock',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  constructor(element) {
    super(element);
  }
};
