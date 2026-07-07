import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import headerSvg from "./header.svg";

const mk = new ControlMaker("UtilspotHeader");
const UTILSPOT_IMG = convertSvgToCssUrl(headerSvg);

const vars = mk.newCSSVariableMap({
  list_header_col: [ 'white', 'white' ],
  list_header_bg: [ '#1d3b4e', '#1d3b4ea1' ],
});

export const ROOT_CLASS: string = representClassNames("UtilspotHeader-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("UtilspotHeader-PORT_CLASS");

export const ROOT_HTML = `
<header class="notranslate ${ROOT_CLASS} ${PORT_CLASS}" translate="no" draggable="false"></header>
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
  height: 275px;
  padding: 0px;
  box-shadow: none;
  border: none;
  text-align: left;
  color: ${vars.list_header_col.asVar()};
  background-color: ${vars.list_header_bg.asVar()};
  background-image: ${UTILSPOT_IMG};
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 10px;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  overflow: hidden;
  flex-shrink: 0;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

@media (device-width <= 550px)
{
  .${ROOT_CLASS}
  {
    height: 550px;
  }
}
`);
