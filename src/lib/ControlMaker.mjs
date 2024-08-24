import { representClassNames } from './CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from './SVG.mjs';

export class CSSClassName {
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

export class CSSVarName {
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
      name = new CSSVarName(name);
    this._name = name;
    this._value = value;
  }

  get name() {
    return this._name;
  }

  get value() {
    return this._value;
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
  _cssClassNames = {};
  _cssVarNames = {};

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
    if (this._cssClassNames.hasOwnProperty(classname))
      throw `CSS class '${classname}' exist in ${this._name}`;
    const obj = new CSSClassName(`${this._name}-${classname}`);
    this._cssClassNames[classname] = obj;
    return obj.toString();
  }

  newVarName(varname) {
    if (this._cssVarNames.hasOwnProperty(varname))
      throw `CSS var '${varname}' exist in ${this._name}`;
    const obj = new CSSVarName(`${this._name}-${varname}`);
    this._cssVarNames[varname] = obj;
    return obj.toString();
  }

  newCSSVariable(name, value) {
    if (this._cssClassNames.hasOwnProperty(name))
      throw `CSS class '${name}' exist in ${this._name}`;
    const obj = new CSSVariable(`${this._name}-${name}`, value);
    this._cssClassNames[name] = obj;
    return obj;
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

  get cssClassNames() {
    return this._cssClassNames;
  }

  get cssVarNames() {
    return this._cssVarNames;
  }
};
