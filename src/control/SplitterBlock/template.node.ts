import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("SplitterBlock");

const vars = mk.newCSSVariableMap({
  bor: [ '#e6e6e6', '#3c3c3c' ],
});

export const ROOT_CLASS: string = representClassNames("SplitterBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("SplitterBlock-PORT_CLASS");
export const NONE_CLASS: string = representClassNames("SplitterBlock-NONE_CLASS");
export const RIGHT_CLASS: string = representClassNames("SplitterBlock-RIGHT_CLASS");
export const LEFT_CLASS: string = representClassNames("SplitterBlock-LEFT_CLASS");
export const TOP_CLASS: string = representClassNames("SplitterBlock-TOP_CLASS");
export const BOTTOM_CLASS: string = representClassNames("SplitterBlock-BOTTOM_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div class="${PORT_CLASS}"></div>
  <span class="${NONE_CLASS}"><div></div></span>
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
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid ${vars.bor.asVar()};
}

.${PORT_CLASS}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.${ROOT_CLASS} > span
{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
}

.${ROOT_CLASS} > span > div
{
  flex-shrink: 0;
  background-color: blue;
}

.${BOTTOM_CLASS} > div,
.${TOP_CLASS} > div
{
  width: 100%;
  height: 5px;
}

.${TOP_CLASS}
{
  top: 0;
  width: 100%;
  height: 0;
}

.${BOTTOM_CLASS}
{
  bottom: 0;
  width: 100%;
  height: 0;
}

.${RIGHT_CLASS}
{
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
}

.${LEFT_CLASS} > div,
.${RIGHT_CLASS} > div
{
  width: 5px;
  height: 100%;
}

.${LEFT_CLASS}
{
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
}
`);
