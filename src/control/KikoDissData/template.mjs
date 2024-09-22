import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('KikoDiss', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  col: [ '#656565', '#4d4d4d' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}"><span>20.10.1979</span><div></div></div>
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
  width: inherit;
  margin: 10px 0;
  padding: 3px 0;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: ${vars.col.asVar()};
  font-family: cursive;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > div
{
  width: inherit;
  height: 1px;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
