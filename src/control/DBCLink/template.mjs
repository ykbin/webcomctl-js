import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
const mk = new ControlMaker('DBCLink', import.meta.url);

const vars = mk.newCSSVariableMap({
  tree_list_col: ['black','white'],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",,
]);

mk.newHTML('ROOT_HTML', `
  <a href="https://github.com/ykbin/dbc" class="${clss.ROOT_CLASS} notranslate" translate="no" target="_blank" draggable="false">Sources code (GitHub)</a>
`);

mk.newCSS('CSS', `
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${clss.ROOT_CLASS}
{
  display: block;
  color: #5063b1;
  width: auto;
  height: 25px;
  margin: 0 0 0 5px;
  padding: 3px;
  border: 1px dashed;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: Open Sans, Arial, sans-serif;
  background-color: var(--OpS);
  text-decoration: none;
  flex-shrink: 0;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    font-size: 25px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}