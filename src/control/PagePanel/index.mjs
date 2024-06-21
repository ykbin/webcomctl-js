import { BaseControl, NQDOM } from 'webnetq-js';
import { NAME, HTML, MENU_ITEM_HTML, PSNT_ITEM_HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UIPagePanelControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
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
    this._codetypeElm = NQDOM.getElementByClassName(this.element, CLASS.CODETYPE);
    if (this._codetypeElm) {
      this._codetypeElm.addEventListener('click', e => this._onCodetypeClick(e));
    }

    this._downloadElm = NQDOM.getElementByClassName(this.element, CLASS.DOWNLOAD);
    this._menulistElm = NQDOM.getElementByClassName(this.element, CLASS.MENULIST);
    this._psntlistElm = NQDOM.getElementByClassName(this.element, CLASS.PSNTLIST);

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
      this._codetypeElm.classList.add(CLASS.CTSHOW);
    this._codetypeIsShow = true;
  }

  hideCodeTypes() {
    if (this._codetypeElm)
      this._codetypeElm.classList.remove(CLASS.CTSHOW);
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
      const textElm = NQDOM.getElementByClassName(rootElm, CLASS.MENUTEXT);
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
      const textElm = NQDOM.getElementByClassName(rootElm, CLASS.PSNTTEXT);
      params.text && textElm && (textElm.textContent = params.text);

      const doActiveItem = () => {
        for (let i = 0; i < this._psntlistElm.children.length; i++)
          this._psntlistElm.children[i].classList.remove(CLASS.PSNTACTV);
        rootElm.classList.add(CLASS.PSNTACTV);
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
