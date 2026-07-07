import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("HorizontalPagePanelBlock");

export const ROOT_CLASS: string = representClassNames("HorizontalPagePanelBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("HorizontalPagePanelBlock-PORT_CLASS");

const vars = mk.newCSSVariableMap({
  wsock_con_bg: [ '#f8f8f8', '#0000002b' ],
});

export const ROOT_HTML = `
<span class="${ROOT_CLASS} ${PORT_CLASS}"></span>
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
  flex-direction: column;
  align-items: flex-end;
  width: 40px;
  height: 100%;
  background-color: ${vars.wsock_con_bg.asVar()};
  flex-shrink: 0;
  box-sizing: border-box;
}

.${ROOT_CLASS} > *
{
  margin-top: 10px;
}
`);
