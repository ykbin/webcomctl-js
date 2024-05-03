import { BaseControl } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from './template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

export default class UIDragDropToViewControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass: CLASS.ROOT,
    portClass: CLASS.PORT,
  } }

  constructor(element) {
    super(element);

    this.registerEvent("dragenter", "dragleave", "drop");

    let count = 0;
    element.addEventListener("dragenter", (event) => {
      if (count++ == 0)
        this.dispatchEvent("dragenter", {});
    });
    element.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    element.addEventListener("dragleave", (event) => {
      if (--count == 0)
        this.dispatchEvent("dragleave", {});
    });
    element.addEventListener("drop", (event) => {
      event.preventDefault();
      count = 0;

      let files =[];
      if (event.dataTransfer.items) {
        for (let i = 0; i < event.dataTransfer.items.length; i++) {
          if (event.dataTransfer.items[i].kind === 'file') {
            const file = event.dataTransfer.items[i].getAsFile();
            files.push(file);
          }
        }
      }

      this.dispatchEvent("drop", {files});
    });
  }
};
