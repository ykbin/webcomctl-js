import { BaseControl, NQDOM } from 'webnetq-js';
import { ADDRESSES_INPUT, ADDRESSES_LIST, ADDRESSES_DISABLED, ADDRESSES_SHOW, CONNECT_BTN_ON, CONNECT_BTN_OFF } from 'uictmplt-loader!./template.mjs';

const STATECHANGED_EVENT = 'stateChanged';

export default class UIURLFieldControl extends BaseControl {
  _disabled;
  _isShowList;
  _value = "";
  _inputElement;
  _listElement;
  _buttonElm;
  _state = false;
  _listeners = {
    stateChanged: [],
  };

  _init()
  {
    this._inputElement = NQDOM.getElementByClassName(this.element, ADDRESSES_INPUT);
    this._listElement = NQDOM.getElementByClassName(this.element, ADDRESSES_LIST);

    if (this._inputElement) {
      let isClick = false;
      this._inputElement.addEventListener('click', () => {
        this.show();
        isClick = true;
      });
      window.addEventListener('click', () => {
        if (isClick) {
          isClick = false;
        }
        else {
          this.hide();
        }
      });
      this._inputElement.addEventListener("change", (event) => {
        this._value = event.target.value;
      });
      if (this._value) {
        this._inputElement.value = _value;
      }
    }

    this._isShowList = this.element.classList.contains(ADDRESSES_SHOW);
    this._disabled = this.element.classList.contains(ADDRESSES_DISABLED);

    this._buttonElm = NQDOM.getElementByClassName(this.element, CONNECT_BTN_ON);
    if (this._buttonElm) {
      this._buttonElm.addEventListener('click', (event) => {
        const state = !this._state;
        this._buttonElm.classList.add(state ? CONNECT_BTN_ON : CONNECT_BTN_OFF);
        this._buttonElm.classList.remove(!state ? CONNECT_BTN_ON : CONNECT_BTN_OFF);
        this._buttonElm.value = state ? "Connected" : "Disconnect";
        this._state = state;
        this.dispatchEvent(STATECHANGED_EVENT, {state});
      });
      this.registerEvent(STATECHANGED_EVENT);
    }
  }

  get value() { return this._value; }
  set value(value)
  {
    if (this._inputElement)
      this._inputElement.value = value;
    this._value = value;
  }

  get disabled() { return this._disabled; }
  set disabled(value)
  {
    this._disabled = this.element.classList.toggle(ADDRESSES_DISABLED, value);
  }

  appendItem(address)
  {
    if (this._listElement) {
      const item = document.createElement("li");
      item.textContent = address;
  
      item.addEventListener('click', (event) => {
        this.value = address;
        this.hide();
      });
  
      this._listElement.appendChild(item);
    }
  }

  clearList()
  {
    if (this._listElement) {
      this._listElement.textContent = "";
    }
  }

  setShowList(value)
  {
    this._isShowList = this.element.classList.toggle(ADDRESSES_DISABLED, value);
  }

  showList()
  {
    this.setShow(true);
  }

  hideList()
  {
    this.setShow(false);
  }
};
