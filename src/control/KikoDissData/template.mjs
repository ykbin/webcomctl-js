import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('KikoDiss', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  col: [ '#656565', '#4d4d4d' ],
  bagcol: [ 'linear-gradient(#e6e4e4 10%, #ffffff)', 'linear-gradient(#e6e4e4 10%, #ffffff)' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <span>20.10.1979</span>
  <div><div></div></div>
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
  width: inherit;
  margin: 10px 10px;
  margin: 2px 5% 0 5%;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: ${vars.col.asVar()};
  font-family: cursive;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > div
{
  display: flex;
  align-items: center;
  width: inherit;
  height: 2px;
  padding: 0 1px;
  background: ${vars.bagcol.asVar()};
}

`);

export function buildComponent()
{
  return mk.buildComponent();
}
