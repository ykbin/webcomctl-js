import { NQDOM, BaseControl } from "webnetq-js";
import { NAME, HTML, CLASS, CSS } from 'module-loader!./template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

const _itemHTML =`
<div>
  <div></div>
  <span><h3 class="${CLASS.TITLE}"></h3><span class="${CLASS.TEXT}"></span></span>
  <s><span class="${CLASS.CLOSE}"></span></s>
</div>
`;

const createMessage = (level, title, text) => {
  const element = NQDOM.createElement(_itemHTML);
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
