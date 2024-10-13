import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('WSBlock', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  wsock_con_bg: [ '#f8f8f8', '#0000002b' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <span></span>
  <div class="${clss.PORT_CLASS}"></div>
</div>
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
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: calc(100% - 43px);
  overflow-y: auto;
}

.${clss.ROOT_CLASS} > span
{
  display: block;
  width: 40px;
  height: 100%;
  background-color: ${vars.wsock_con_bg.asVar()};
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > div
{
  width: inherit;
  overflow-y: auto;
  overflow-x: hidden;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}