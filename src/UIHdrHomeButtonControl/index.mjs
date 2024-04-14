import { BaseControl } from 'webnetq-js';

const CLASS = {
  ROOT: "uic-hdrhm-root",
};

const _rootHTML = `
<a class="${CLASS.ROOT}" href="\${ENV:HOST_URL}" draggable="false">
  <div></div>
  <span class="notranslate" translate="no">Home</span>
</a>
`;

export default class UIHdrHomeButtonControl extends BaseControl {
  static get template() { return {
    name: 'HdrHomeButton',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
  } }

  constructor(element) {
    super(element);
  }
};
