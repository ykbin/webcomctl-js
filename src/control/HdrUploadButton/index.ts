import { BaseControl, Random, NQDOM } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, HIDDEN_CLASS } from "./template.node";

const UPLOAD_EVENT = 'upload';

export namespace HdrUploadButton {

export const classList = {
  ROOT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  private _inputElm?: HTMLInputElement;
  private _uploadVisible = false;

  protected _init() {
    const inputId = Random.nextElementId();
  
    this._inputElm = document.createElement('input');
    this._inputElm.id = inputId;
    this._inputElm.type = "file";
    this._inputElm.addEventListener("input", (event) => {
      const inputElm = event.target as HTMLInputElement;
      this.dispatchEvent(UPLOAD_EVENT, {files: inputElm.files});
      inputElm.value = "";
    });

    this.element.appendChild(this._inputElm);
    this.element.setAttribute('for', inputId);

    this.registerEvent(UPLOAD_EVENT);
  }

  public setUploadVisible(value: boolean) {
    if (this._uploadVisible != value) {
      this.element.classList.toggle(HIDDEN_CLASS);
      this._uploadVisible = value;
    }
  }
};

} // namespace HdrUploadButton
