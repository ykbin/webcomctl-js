import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("InfoContent");

const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';

const vars = mk.newCSSVariableMap({
  menuBg: [ 'white', 'rgb(23, 23, 26)' ],
  menuCol: [ 'black', '#b8b4b4' ],
});

export const ROOT_CLASS: string = representClassNames("InfoContent-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("InfoContent-PORT_CLASS");

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

.${PORT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${PORT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCROLLBAR_THUMB_COLOR};
  border-radius: 10px;
}

.${PORT_CLASS}::-webkit-scrollbar-track,
.${PORT_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCROLLBAR_TRACK_COLOR};
}

.${PORT_CLASS}
{
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
  font-family: ${TOOLBAR_FONT_SANS};
  box-sizing: border-box;
  background-color: ${vars.menuBg.asVar()};
  color: ${vars.menuCol.asVar()};
  overflow: auto;
}
`);
