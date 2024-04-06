import { BaseControl } from 'webnetq-js';

const CLASS = {
  ROOT: "uic-swtch-root",
  PORT: "uic-swtch-port",
  NTH1: 'uic-swtch-nth1',
  NTH2: 'uic-swtch-nth2',
};

const _rootHTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT} ${CLASS.NTH1}"></div>
`;

export default class UISwitchBlockControl  extends BaseControl {
  static get template() { return {
    name: 'SwitchBlock',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  _isSecond = false;

  constructor(element) {
    super(element);
  }

  showFirst() {
    if (this._isSecond) {
      this.element.classList.add(CLASS.NTH1);
      this.element.classList.remove(CLASS.NTH2);
      this._isSecond = false;
    }
  }

  showSecond() {
    if (!this._isSecond) {
      this.element.classList.add(CLASS.NTH2);
      this.element.classList.remove(CLASS.NTH1);
      this._isSecond = true;
    }
  }
};
