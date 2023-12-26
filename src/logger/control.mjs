import { NQDOM } from "webnetq-js";

const kLoggerCSS = "logger";
const kLoggerCloseCSS = "logger-close";
const kLoggerTitleCSS = "logger-title";
const kLoggerTextCSS = "logger-text";
const kLevelInfoCSS = "logger-level-info";
const kLevelSuccessCSS = "logger-level-success";
const kLevelWarningCSS = "logger-level-warning";
const kLevelErrorCSS = "logger-level-error";

const createRoot = (document, id) => {
  const element = document.createElement("div");
  id && (element.id = id);
  element.classList.add(kLoggerCSS);
  return element;
};

const createMessage = (level, title, text, clickCallback) => {
  const element = NQDOM.createElement(`
    <div class="${level}">
      <span></span>
      <span><h3 class="${kLoggerTitleCSS}"></h3><span class="${kLoggerTextCSS}"></span></span>
      <span><span class="${kLoggerCloseCSS}"></span></span>
    </div>
  `);

  element.querySelector("." + kLoggerTitleCSS).textContent = title;
  element.querySelector("." + kLoggerTextCSS).textContent = text;
  element.querySelector("." + kLoggerCloseCSS).addEventListener("click", clickCallback);

  return element;
};

const log = function(title, level, logFunc, ...args) {
  logFunc.apply(null, [ title, "-", ...args ]);
  const element = createMessage(level, title, args.join(' '), () => { element.remove() });
  this._appendMessage(element);
};

class UILoggerControl {
  constructor(param) {
    this._id = param.id;
    this._element = null;

    if (param.element) {
      this.element = param.element;
    }

    this._messageCache = [];
    this._appendMessage = (element) => this._messageCache.push(element);
    
    this.info = log.bind(this, "Info", kLevelInfoCSS, console.info);
    this.success = log.bind(this, "Success", kLevelSuccessCSS, console.log);
    this.warning = log.bind(this, "Warning", kLevelWarningCSS, console.warn);
    this.error = log.bind(this, "Error", kLevelErrorCSS, console.error);
  }

  get id() {
    return this._id;
  }

  get element() {
    return this._element;
  }

  set element(element) {
    if (this._element) throw "UILoggerControl element not empty";
    this._element = element;
    this._id = element.id;
    
    this._appendMessage = (element) => {
      const mesParent = this._element;
      while (mesParent.children.length > 3) {
        mesParent.removeChild(mesParent.children[1]);
      }
      mesParent.appendChild(element);
    };

    while (this._messageCache.length) {
      this._appendMessage(this._messageCache.shift());
    }

    this._messageCache = null;
  }
};

let _isLoaded = false;
const _controls = [];

const getControlById = (id) => {
  if (id) {
    for (const ctl of _controls) {
      if (ctl.id === id) 
        return ctl;
    }
  }
  return null;
}

NQDOM.documentReady(() => {
  const elements = document.getElementsByClassName(kLoggerCSS);
  for (const element of Array.from(elements)) {
    const ctl = getControlById(element.id);
    if (ctl)
      ctl.element = element;
    else
      _controls.push(new UILoggerControl({element}));
  }
  for (const ctl of _controls) {
    if (!ctl.element)
      throw `UILoggerControl with '${ctl._id}' id not exists`;
  }
  _isLoaded = true;
});

export default {
  provider: {
    create(document, id) {
      const element = createRoot(document, id);
      return new UILoggerControl({element});
    }
  },
  get(id) {
    let control = getControlById(id);
    if (!control && !_isLoaded) {
      control = new UILoggerControl({id});
      _controls.push(control);
    }
    return control;
  }
};
