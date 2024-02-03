import { BaseControl } from "webnetq-js";

const CLASS = {
  ROOT: 'uic-loading-root',
  SHOW: 'uic-loading-show',
};

const _rootHTML =`
<div class="${CLASS.ROOT}">
<div>
  <div></div>
</div>
</div>
`;

export default class UILoadingControl extends BaseControl {
  static get template() { return {
    name: 'Loading',
    metaUrl: import.meta.url,
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
  } }

  _visible;

  constructor(element) {
    super(element);
    this._visible = element.classList.contains(CLASS.SHOW);
  }

  get visible() {
    return this._visible;
  }

  set visible(value) {
    if (this._visible != value) {
      this.element.classList.toggle(CLASS.SHOW);
      this._visible = value;
    }
  }
};
