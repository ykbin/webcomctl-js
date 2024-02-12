import { NQDOM, BaseControl } from "webnetq-js";

const CLASS = {
  ROOT: 'uic-logger-root',
  CLOSE: 'uic-logger-close',
  TITLE: 'uic-logger-title',
  TEXT: 'uic-logger-text',
  INFO: 'uic-logger-lvlinfo',
  SUCCESS: 'uic-logger-lvlsuccess',
  WARNING: 'uic-logger-lvlwarn',
  ERROR: 'uic-logger-lvlerror',
};

const _rootHTML =`
<div class="${CLASS.ROOT}"></div>
`;

const _itemHTML =`
<div>
  <span></span>
  <span><h3 class="${CLASS.TITLE}"></h3><span class="${CLASS.TEXT}"></span></span>
  <span><span class="${CLASS.CLOSE}"></span></span>
</div>
`;

const createMessage = (level, title, text, clickCallback) => {
  const element = NQDOM.createElement(_itemHTML);
  element.classList.add(level);

  NQDOM.getElementByClassName(element, CLASS.TITLE).textContent = title;
  NQDOM.getElementByClassName(element, CLASS.TEXT).textContent = text;
  NQDOM.getElementByClassName(element, CLASS.CLOSE).addEventListener("click", clickCallback);

  return element;
};

export default class UILoggerControl extends BaseControl {
  static get template() { return {
    name: 'Logger',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
  } }

  constructor(element) {
    super(element);

    const log = (title, level, logFunc, ...args) => {
      logFunc.apply(null, [ title, "-", ...args ]);
      const messageElm = createMessage(level, title, args.join(' '), () => { element.remove() });
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
