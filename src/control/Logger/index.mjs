import { NQDOM, BaseControl } from "webnetq-js";
import { NAME, ROOT_HTML, ITEM_HTML, ROOT_CLASS, TITLE_CLASS, TEXT_CLASS, CLOSE_CLASS, INFO_CLASS, WARNING_CLASS, SUCCESS_CLASS, ERROR_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML, CSS };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

const createMessage = (level, title, text) => {
  const element = NQDOM.createElement(ITEM_HTML);
  element.classList.add(level);

  NQDOM.getElementByClassName(element, TITLE_CLASS).textContent = title;
  NQDOM.getElementByClassName(element, TEXT_CLASS).textContent = text;
  NQDOM.getElementByClassName(element, CLOSE_CLASS).addEventListener("click", () => element.remove());

  return element;
};

export default class UILoggerControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: ROOT_HTML,
    rootClass: ROOT_CLASS,
  } }

  _init() {
    const log = (title, level, logFunc, ...args) => {
      logFunc.apply(null, [ title, "-", ...args ]);
      const messageElm = createMessage(level, title, args.join(' '));
      while (this.element.children.length > 3) {
        this.element.removeChild(this.element.children[1]);
      }
      this.element.appendChild(messageElm);
    };

    this.info = log.bind(this, "Info", INFO_CLASS, console.info);
    this.success = log.bind(this, "Success", SUCCESS_CLASS, console.log);
    this.warning = log.bind(this, "Warning", WARNING_CLASS, console.warn);
    this.error = log.bind(this, "Error", ERROR_CLASS, console.error);
  }
};
