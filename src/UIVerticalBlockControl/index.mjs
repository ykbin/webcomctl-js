import { BaseControl } from 'webnetq-js';

const CLASS = {
  ROOT: "uic-vrtblk-root",
  PORT: "uic-vrtblk-port",
};

const _rootHTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export default class UIVerticalBlockControl extends BaseControl {
  static get template() { return {
    name: 'VerticalBlock',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  constructor(element) {
    super(element);
  }
};
