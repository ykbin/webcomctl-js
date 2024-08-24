import { representClassNames } from './CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from './SVG.mjs';

export class ClassName {
  _name;

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  toString() {
    return representClassNames(this._name);
  }
};

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
  _classNames = {};

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
    if (this._classNames.hasOwnProperty(classname))
      throw `Class '${classname}' exist in ${this._name}`;
    const obj = new ClassName(`${this._name}-${classname}`);
    this._classNames[classname] = obj;
    return obj;
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

  newHTML(name, html) {
    return html;
  }

  newCSS(name, css) {
    return css;
  }

  get classNames() {
    return this._classNames;
  }
};
