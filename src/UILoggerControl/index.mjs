import { NQDOM, BaseControl } from "webnetq-js";
import { NAME, HTML, ITEM_HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

const createMessage = (level, title, text) => {
  const element = NQDOM.createElement(ITEM_HTML);
  element.classList.add(level);

  NQDOM.getElementByClassName(element, CLASS.TITLE).textContent = title;
  NQDOM.getElementByClassName(element, CLASS.TEXT).textContent = text;
  NQDOM.getElementByClassName(element, CLASS.CLOSE).addEventListener("click", () => element.remove());

  return element;
};

export default class UILoggerControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
  } }

  constructor(element) {
    super(element);

    const log = (title, level, logFunc, ...args) => {
      logFunc.apply(null, [ title, "-", ...args ]);
      const messageElm = createMessage(level, title, args.join(' '));
      while (element.children.length > 3) {
        element.removeChild(element.children[1]);
      }
      element.appendChild(messageElm);
    };

    this.info = log.bind(this, "Info", CLASS.INFO, console.info);
    this.success = log.bind(this, "Success", CLASS.SUCCESS, console.log);
    this.warning = log.bind(this, "Warning", CLASS.WARNING, console.warn);
    this.error = log.bind(this, "Error", CLASS.ERROR, console.error);
  }
};
