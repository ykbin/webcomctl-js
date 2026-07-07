import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("UtilspotRhtblk");

const vars = mk.newCSSVariableMap({
});

export const ROOT_CLASS: string = representClassNames("UtilspotRhtblk-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("UtilspotRhtblk-PORT_CLASS");

export const ROOT_HTML = `
  <span class="${ROOT_CLASS} ${PORT_CLASS}"></spah>
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
  flex-direction: row-reverse;
  height: inherit;
  padding: 10px 10px 0px 0px;
  box-sizing: border-box;
}
`);
