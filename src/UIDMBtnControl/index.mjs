import { BaseControl, NQDOM, Setting } from 'webnetq-js';

const CLASS = {
  ROOT: "uic-dmbtn-root",
  TOGGLE: "uic-dmbtn-toggle",
};

const _rootHTML = `
<div class="${CLASS.ROOT}">
  <span class="${CLASS.TOGGLE}"></span>
</div>
`;

const kDarkModeTip = "Toggle dark mode";
const kLightModeTip = "Toggle light mode";

const hasDocument = (typeof document === 'object' && document !== null);
if (hasDocument && document.documentElement) {
  const setting = Setting.getInstance();
  document.documentElement.dataset.theme = setting.getTheme();
}

export default class UIDMBtnControl extends BaseControl {
  static get template() { return {
    name: 'DMBtn',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
  } }

  _toggleElm;

  constructor(element) {
    super(element);

    this._toggleElm = NQDOM.getElementByClassName(element, CLASS.TOGGLE);
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
