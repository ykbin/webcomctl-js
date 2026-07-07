import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_FONT_FAMALY } from "@/lib/WickedTheme";

import favicon1Svg from "./favicon1.svg";
import favicon2Svg from "./favicon2.svg";

const mk = new ControlMaker("HdrJWTLogo");

export const ROOT_CLASS: string = representClassNames("HdrJWTLogo-ROOT_CLASS");

const vars = mk.newCSSVariableMap({
  favicon: [
    convertSvgToCssUrl(favicon1Svg),
    convertSvgToCssUrl(favicon2Svg),
  ],
});

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <h1></h1>
  <h2>JWT Editor</h2>
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

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS}
{
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
  box-sizing: border-box;
}

.${ROOT_CLASS} > h1
{
  width: 35px;
  height: 100%;
  margin: 0 10px 0 0;
  flex-shrink: 0;
  background-image: ${vars.favicon.asVar()};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.${ROOT_CLASS} > h2
{
  margin: 0;
  font-size: 1em;
  font-weight: 600;
  font-family: ${TOOLBAR_FONT_FAMALY};
  white-space: nowrap;
}
`);
