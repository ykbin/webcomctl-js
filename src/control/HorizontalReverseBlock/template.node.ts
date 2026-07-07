import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("HorizontalReverseBlock");

export const ROOT_CLASS: string = representClassNames("HorizontalReverseBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("HorizontalReverseBlock-PORT_CLASS");

const vars = mk.newCSSVariableMap({
});

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

.${ROOT_CLASS}
{
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
`);
