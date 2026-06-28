import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl, convertSvgToHtmlTag } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import faviconSvg from "./favicon.svg";
import uitestHeadSvg from "./uitestHead.svg";

const mk = new ControlMaker("HdrWikLogo");

export const ROOT_CLASS: string = representClassNames("HdrWikLogo-ROOT_CLASS");

const vars = mk.newCSSVariableMap({
  favicon: convertSvgToCssUrl(faviconSvg),
  header: convertSvgToCssUrl(uitestHeadSvg),
});

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <h1>${convertSvgToHtmlTag(faviconSvg)}</h1>
  <h2></h2>
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
  width: auto;
  height: 100%;
  box-sizing: border-box;
}

.${ROOT_CLASS} > h1
{
  display: flex;
  align-items: center;
  width: 35px;
  height: 100%;
  margin: 0 10px 0 0;
  /* background-image: ${vars.favicon.asVar()};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */
}

.${ROOT_CLASS} > h2
{
  width: 90px;
  height: 100%;
  margin: 0 15px 0 0;
  background-image: ${vars.header.asVar()};
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
}
`);
