import { BaseControl, NQDOM } from 'webnetq-js';
import { SIGNAL_STATE_TEXT, SIGNAL_STATE_ON, SIGNAL_STATE_OFF } from 'uictmplt-loader!./template.mjs';

export default class UIConnectionStatusControl extends BaseControl {
  _valueElm;
  _textElm;

  _init() {
    this._valueElm = NQDOM.getElementByClassName(this.element, SIGNAL_STATE_OFF);
    this._textElm = NQDOM.getElementByClassName(this.element, SIGNAL_STATE_TEXT);
  }

  get value() {
    return this._valueElm && this._valueElm.classList.contains(SIGNAL_STATE_ON);
  }

  set value(value) {
    if (this._valueElm) {
      this._valueElm.classList.remove(!value ? SIGNAL_STATE_ON : SIGNAL_STATE_OFF);
      this._valueElm.classList.add(value ? SIGNAL_STATE_ON : SIGNAL_STATE_OFF);
    }
  }

  get text() {
    return this._textElm ? this._textElm.textContent : '';
  }

  set text(value) {
    this._textElm && (this._textElm.textContent = value);
  }
};
