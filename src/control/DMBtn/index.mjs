import { BaseControl, NQDOM, Setting } from 'webnetq-js';
import { NAME, ROOT_HTML, ROOT_CLASS, TOGGLE_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML, CSS };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

const kDarkModeTip = "Toggle dark mode";
const kLightModeTip = "Toggle light mode";

const hasDocument = (typeof document === 'object' && document !== null);
if (hasDocument && document.documentElement) {
  const setting = Setting.getInstance();
  document.documentElement.dataset.theme = setting.getTheme();
}

export default class UIDMBtnControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
  } }

  _toggleElm;

  _init() {
    this._toggleElm = NQDOM.getElementByClassName(this.element, TOGGLE_CLASS);
    this._toggleElm && this._toggleElm.addEventListener("click", (event) => {
      const setting = Setting.getInstance();
      setting.toggleTheme();
      this._setTheme(setting.getTheme());
    });

    const setting = Setting.getInstance();
    this._setTheme(setting.getTheme());
    setting.addEventListener('themchange', event => this._setTheme(event.theme));
  }

  _setTheme(theme) {
    const isDarkMode = (theme == 'dark');
    if (hasDocument && document.documentElement) {
      document.documentElement.dataset.theme = theme;
    }
    this._toggleElm && this._toggleElm.setAttribute("title", isDarkMode ? kDarkModeTip : kLightModeTip);
  }
};
