import { BaseControl } from "webnetq-js";

const CLASS = {
  ROOT: 'uic-mfooter-root',
  LIST: 'uic-mfooter-list',
  VERSION: 'uic-mfooter-version',
};

const _rootHTML =`
<footer class="${CLASS.ROOT}">
  <div class="${CLASS.LIST}">
    <div>
      <span class="notranslate" translate="no">UTILSPOT</span>
      <div>We create websites with inspiration</div>
    </div>
    <div>
      <span>Our catalog</span>
      <a href="\${ENV:HOST_URL}" class="notranslate" draggable="false" translate="no">\${ENV:HOST}</a>
    </div>
    <div>
      <span>Contact us</span>
      <div class="notranslate" translate="no"><address>\${ENV:EMAIL}</address></div>
    </div>
  </div>
  <i class="${CLASS.VERSION} notranslate" translate="no">Version<span>\${ENV:VERSION}</span></i>
</footer>
`;

export default class UIMainFooterControl extends BaseControl {
  static get template() { return {
    name: 'MainFooter',
    rootHTML: _rootHTML,
    rootClass:  CLASS.ROOT,
  } }

  constructor(element) {
    super(element);
  }
};
