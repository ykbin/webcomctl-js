import { BaseControl } from 'webnetq-js';

const CLASS = {
  ROOT: "uic-hdrhex-root",
};

const _rootHTML = `
<div class="${CLASS.ROOT}">
  <h3></h3>
  <h2></h2>
</div>
`;

export default class UIHdrHexLogoControl extends BaseControl {
  static get template() { return {
    name: 'HdrHexLogo',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
  } }

  constructor(element) {
    super(element);
  }
};
