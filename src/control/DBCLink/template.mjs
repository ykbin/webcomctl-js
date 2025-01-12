import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
const mk = new ControlMaker('DBCLink', import.meta.url);

const vars = mk.newCSSVariableMap({
  OpS: ['#f2f2f2','#252525'],
  dbc_col: ['#5063b1'],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",,
]);

mk.newHTML('ROOT_HTML', `
  <a href="https://github.com/ykbin/dbc" class="${clss.ROOT_CLASS} notranslate" translate="no" target="_blank" draggable="false">
    Sources code <span>(GitHub)</span>
  </a>
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
  color: ${vars.dbc_col.asVar()};
  width: auto;
  height: 25px;
  margin: 0 0 0 5px;
  padding: 3px;
  border: 1px dashed;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: Open Sans, Arial, sans-serif;
  text-decoration: none;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS}:hover
{
  background-color: ${vars.OpS.asVar()};
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    font-size: 25px;
  }
  .${clss.ROOT_CLASS} span
  {
    display: none;
  }
}

@media (device-width < 230px)
{
  .${clss.ROOT_CLASS}
  {
    display: none;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}