import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('WikHeader', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  bor: [ '#eaedf1', '#3f3f3f' ],
  col: [ '#343c44' ],
});

mk.newHTML('ROOT_HTML', `
<header class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}" draggable="false"></header>
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
  height: 60px;
  padding: 0px 20px;
  border-bottom: 1px solid ${vars.bor.asVar()};
  color: ${vars.col.asVar()};
  box-sizing: border-box;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
