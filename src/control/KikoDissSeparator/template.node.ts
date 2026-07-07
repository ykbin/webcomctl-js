import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("KikoDissSeparator");

const vars = mk.newCSSVariableMap({
  col: [ '#656565', '#4d4d4d' ],
  bagcol: [ 'linear-gradient(#c8c8c8 10%, #ffffff)', 'linear-gradient(#434343 10%, rgb(23, 23, 26))' ],
});

export const ROOT_CLASS: string = representClassNames("KikoDissSeparator-ROOT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <span>20.10.1979</span>
  <div></div>
</div>
`;

export const CSS = splitCSS(`
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${ROOT_CLASS}
{
  width: inherit;
  margin: 10px 10px;
  padding: 3px 5% 0 5%;
  font-size: 14px;
  font-weight: 600;
  color: ${vars.col.asVar()};
  font-family: cursive;
  box-sizing: border-box;
}

.${ROOT_CLASS} > span
{
  display: block;
  margin: 0 0 3px 3px;
}

.${ROOT_CLASS} > div
{
  display: flex;
  align-items: center;
  width: inherit;
  height: 2px;
  background: ${vars.bagcol.asVar()};
}

`);
