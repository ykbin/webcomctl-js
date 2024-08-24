import { representClassNames } from './CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from './SVG.mjs';

export class VarName {
  _name;

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  toString() {
    return "--" + representClassNames(this._name);
  }
};

export class CSSVariable {
  _name;
  _value;

  constructor(name, value) {
    if (typeof name === 'string')
      name = new VarName(name);
    this._name = name;
    this._value = value;
  }

  asVar() {
    return `var(${this._name})`;
  }

  toString(n) {
    let value = this._value;
    if (Array.isArray(this._value) && typeof n === 'number')
      value = this._value[n];
    return `${this._name}:${value}`;
  }
};

export class CSSBlock {

};

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
    return new VarName(`${this._name}-${varname}`);
  }

  newCSSVariable(name, value) {
    return new CSSVariable(`${this._name}-${name}`, value);
  }

  newAnimationName(animename) {
    return representClassNames(`${this._name}-${animename}`);
  }
};
