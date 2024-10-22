import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('WSPagePanel', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  wsock_con_bg: [ '#f8f8f8', '#0000002b' ],
});

mk.newHTML('ROOT_HTML', `
<span class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}"></span>
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
  width: 40px;
  height: 100%;
  background-color: ${vars.wsock_con_bg.asVar()};
  flex-shrink: 0;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}