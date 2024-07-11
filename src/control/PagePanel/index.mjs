import { BaseControl, NQDOM } from 'webnetq-js';
import { NAME, ROOT_HTML, MENU_ITEM_HTML, PSNT_ITEM_HTML, ROOT_CLASS, CODETYPE_CLASS, DOWNLOAD_CLASS, MENULIST_CLASS, PSNTLIST_CLASS, CTSHOW_CLASS, PSNTACTV_CLASS, MENUTEXT_CLASS, PSNTTEXT_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UIPagePanelControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
  } }

  _codetypeVisibleChanged;
  _codetypeIsShow;
  _codetypeElm;
  _downloadElm;
  _menulistElm;
  _psntlistElm;

  _init() {
    this._blob = null;
    this._filename = "";
    this._snap = { url: null, blob: null };

    this._codetypeIsShow = false;
    this._codetypeElm = NQDOM.getElementByClassName(this.element, CODETYPE_CLASS);
    if (this._codetypeElm) {
      this._codetypeElm.addEventListener('click', e => this._onCodetypeClick(e));
    }

    this._downloadElm = NQDOM.getElementByClassName(this.element, DOWNLOAD_CLASS);
    this._menulistElm = NQDOM.getElementByClassName(this.element, MENULIST_CLASS);
    this._psntlistElm = NQDOM.getElementByClassName(this.element, PSNTLIST_CLASS);

    this._codetypeVisibleChanged = false;
    window.addEventListener('click', e => this._onWindowClick(e));

    this._updateDownloadData();
  }

  get blob() {
    return this._blob;
  }

  set blob(value) {
    this._blob = value;
    this._updateDownloadData();
  }

  get filename() {
    return this._filename;
  }

  set filename(value) {
    this._filename = value;
    this._updateDownloadData();
  }

  showCodeTypes() {
    if (this._codetypeElm)
      this._codetypeElm.classList.add(CTSHOW_CLASS);
    this._codetypeIsShow = true;
  }

  hideCodeTypes() {
    if (this._codetypeElm)
      this._codetypeElm.classList.remove(CTSHOW_CLASS);
    this._codetypeIsShow = false;
  }

  _onCodetypeClick(e) {
    this._codetypeIsShow ? this.hideCodeTypes() : this.showCodeTypes();
    this._codetypeVisibleChanged = true;
  }

  _onWindowClick(e) {
    if (!this._codetypeVisibleChanged && this._codetypeIsShow)
      this.hideCodeTypes();
    this._codetypeVisibleChanged = false;
  }

  _updateDownloadData() {
    if (this._blob !== this._snap.blob) {
      this._snap.url && URL.revokeObjectURL(this._snap.url);
      this._snap.url = this._blob && URL.createObjectURL(this._blob);
      this._snap.blob = this._blob;
    }
    if (this._downloadElm) {
      this._downloadElm.href = this._snap.url;
      this._downloadElm.download = this._filename;
      this._downloadElm.title = `Click to download - ${this._filename}`;
    }
  }

  addMenuItem(params) {
    if (this._menulistElm) {
      const rootElm = NQDOM.createElement(MENU_ITEM_HTML);
      const textElm = NQDOM.getElementByClassName(rootElm, MENUTEXT_CLASS);
      if (params.text) {
        textElm && (textElm.textContent = params.text);
      }
      if (params.onclick) {
        textElm && textElm.addEventListener('click', event => params.onclick({ baseEvent: event, text: params.text }));
      }
      this._menulistElm.appendChild(rootElm);
    }
  }

  addPresentationItem(params) {
    if (this._psntlistElm) {
      const rootElm = NQDOM.createElement(PSNT_ITEM_HTML);
      const textElm = NQDOM.getElementByClassName(rootElm, PSNTTEXT_CLASS);
      params.text && textElm && (textElm.textContent = params.text);

      const doActiveItem = () => {
        for (let i = 0; i < this._psntlistElm.children.length; i++)
          this._psntlistElm.children[i].classList.remove(PSNTACTV_CLASS);
        rootElm.classList.add(PSNTACTV_CLASS);
      };

      params.active && doActiveItem();
      rootElm.addEventListener('click', event => {
        doActiveItem();
        const newEvent = Object.create(event);
        newEvent.text = params.text;
        params.onclick && params.onclick(newEvent);
      });
  
      this._psntlistElm.appendChild(rootElm);
    }
  }
};
