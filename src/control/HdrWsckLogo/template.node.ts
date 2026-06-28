import ControlMaker from  "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { HEADER_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";

import favicon1Svg from "./favicon1.svg";
import favicon2Svg from "./favicon2.svg";
import header1Svg from "./header1.svg";
import header2Svg from "./header2.svg";

const mk = new ControlMaker("HdrWsckLogo");

export const ROOT_CLASS: string = representClassNames("HdrWsckLogo-ROOT_CLASS");

const vars = mk.newCSSVariableMap({
  favicon: [
    convertSvgToCssUrl(favicon1Svg),
    convertSvgToCssUrl(favicon2Svg),
  ],
  header: [
    convertSvgToCssUrl(header1Svg),
    convertSvgToCssUrl(header2Svg),
  ],
});

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <h3></h3>
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

.${ROOT_CLASS} h2,
.${ROOT_CLASS} h3
{
  margin: 0px;
  padding: 0px;
  font-size: 1em;
  font-weight: 400;
}

.${ROOT_CLASS}
{
  display: flex;
  height: 33px;
}

.${ROOT_CLASS} > h3
{
  height: 100%;
  width: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${vars.favicon.asVar()};
  margin-right: 7px;
  flex-shrink: 0;
}

.${ROOT_CLASS} > h2
{
  height: 100%;
  width: 145px;
  margin-right: 15px;
  background-size: 180px;
  background-position-y: center;
  background-position-x: left;
  background-repeat: no-repeat;
  background-image: ${vars.header.asVar()};
  flex-shrink: 0;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    height: 130px;
  }
  .${ROOT_CLASS} > h3
  {
    display: none;
  }
  .${ROOT_CLASS} > h2
  {
    width: 330px;
    background-size: 410px;
  }
}
`);
