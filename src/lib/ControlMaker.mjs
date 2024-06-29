import { representClassNames } from './CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from './SVG.mjs';

export default class ControlMaker {
  _name;
  _currentUrl;

  constructor(name, currentUrl) {
    this._name = name;
    this._currentUrl = currentUrl;
  }

  get name() {
    return this._name;
  }

  async loadSvgAsCssUrl(filepath) {
    return await loadSvgAsCssUrlAsync(this._currentUrl, filepath);
  }

  newClassName(classname) {
    return representClassNames(`${this._name}-${classname}`);
  }

  newVarName(varname) {
    return representClassNames(`--${this._name}-${varname}`);
  }
};
