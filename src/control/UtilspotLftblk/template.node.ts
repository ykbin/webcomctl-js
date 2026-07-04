import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("UtilspotLftblk");

const vars = mk.newCSSVariableMap({
  header_bor: [ 'transparent', 'transparent' ],
});

export const ROOT_CLASS: string = representClassNames("UtilspotLftblk-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("UtilspotLftblk-PORT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
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

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS}
{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}
`);
