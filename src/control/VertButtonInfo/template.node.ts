import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import info1Svg from "./info1.svg";
import info2Svg from "./info2.svg";

const mk = new ControlMaker("VertButtonInfo");

const vars = mk.newCSSVariableMap({
  nav_but_bg: [ 'white', 'rgb(23, 23, 26)' ],
  nav_but_bort: [ '#f3f0f0', '#c2c2c240' ],
  nav_but_borb: [ '#f3f0f0', '#c2c2c240' ],
  nav_but_borl: [ '#e2e2e2', '#c2c2c240' ],
  nav_but_bs: [ '-5px 0 5px -5px #cfcfcf', '-5px 0 5px -5px #cfcfcf' ],
  nav_but_hov: [ 'radial-gradient(#e1e1e1, white 70%)', 'radial-gradient(#3d3d3d, rgb(23, 23, 26) 70%)' ],
  infoImg: [
    convertSvgToCssUrl(info1Svg),
    convertSvgToCssUrl(info2Svg),
  ],
});

export const ROOT_CLASS: string = representClassNames("VertButtonInfo-ROOT_CLASS");
export const ACTIVE: string = representClassNames("VertButtonInfo-ACTIVE");
export const BLOCKING: string = representClassNames("VertButtonInfo-BLOCKING");
export const CLICK: string = representClassNames("VertButtonInfo-CLICK");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${BLOCKING} ${CLICK}">
  <div></div>
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
  background-color: ${vars.nav_but_bg.asVar()};
  padding: 20px 5px 20px 5px;
  box-shadow: ${vars.nav_but_bs.asVar()};
  border-top: 1px solid ${vars.nav_but_bort.asVar()};
  border-bottom: 1px solid ${vars.nav_but_borb.asVar()};
  border-left: 1px solid ${vars.nav_but_borl.asVar()};
  border-start-start-radius: 5px;
  border-end-start-radius: 5px;
  z-index: 2
}

.${ROOT_CLASS}.${ACTIVE}
{
  position: relative;
  left: 1px;
  padding: 20px 6px 20px 5px;
  box-sizing: border-box;
}

.${ROOT_CLASS} > div
{
  height: 25px;
  width: 25px;
  border-radius: 10px;
  margin-bottom: 5px;
  background-image: ${vars.infoImg.asVar()};
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
}

.${ROOT_CLASS}:hover
{
  background: ${vars.nav_but_hov.asVar()};
}

@media (device-width < 550px)
{
  .${ROOT_CLASS}
  {
    padding: 30px 12px 30px 10px;
    margin-top: 230px;
  }
  .${ROOT_CLASS} > div
  {
    height: 60px;
    width: 60px;
  }
}
`);
