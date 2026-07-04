import { NQDOM, BaseControl, Random } from "webnetq-js";
import { ROOT_CLASS, ROOT_HTML, CSS, DHIDE_CLASS, DSHOW_CLASS, FDROP_CLASS } from "./template.node";

const UPLOAD_EVENT = 'upload';

export namespace StartupUpload {

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
  private _fdropElm?: HTMLElement;
  private _inputElm?: HTMLInputElement;

  protected _init() {
    this._fdropElm = NQDOM.getElementByClassName(super.element, FDROP_CLASS);
    if (this._fdropElm) {
      const fdropElm = this._fdropElm;
      const showDropArea = () => {
        fdropElm.classList.remove(DHIDE_CLASS);
        fdropElm.classList.add(DSHOW_CLASS);
      };
      const hideDropArea = () => {
        fdropElm.classList.remove(DSHOW_CLASS);
        fdropElm.classList.add(DHIDE_CLASS);
      };
      let count = 0;
      fdropElm.addEventListener("dragenter", (event) => {
        if (count++ == 0)
          showDropArea();
      });
      fdropElm.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      fdropElm.addEventListener("dragleave", (event) => {
        if (--count == 0)
          hideDropArea();
      });
      fdropElm.addEventListener("drop", (event: DragEvent) => {
        event.preventDefault();
        hideDropArea();
        count = 0;

        const dataTransfer = event.dataTransfer as DataTransfer;
        if (dataTransfer.items) {
          let files = [];
          for (let i = 0; i < dataTransfer.items.length; i++) {
            if (dataTransfer.items[i].kind === 'file') {
              const file = dataTransfer.items[i].getAsFile();
              files.push(file);
            }
          }
          this.dispatchEvent(UPLOAD_EVENT, { kind: 'drop', files });
        }
      });
    }

    const lableElm = this.element.querySelector('label');
    if (lableElm) {
      const inputId = Random.nextElementId();

      const inputElm = document.createElement('input');
      inputElm.id = inputId;
      inputElm.type = "file";

      inputElm.addEventListener("input", (event: Event) => {
        const target = event.target as HTMLInputElement;
        const files = target.files;
        this.dispatchEvent(UPLOAD_EVENT, { kind: 'input', files });
        target.value = "";
      });

      lableElm.appendChild(inputElm);
      lableElm.setAttribute('for', inputId);
    }

    this.registerEvent(UPLOAD_EVENT);
  }
};

} // namespace StartupUpload
