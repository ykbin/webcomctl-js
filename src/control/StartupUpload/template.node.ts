import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { UIC_START_BACKGROUND_COLOR } from "@/lib/WickedTheme";
import { UIC_START_BACKGROUND_COLOR_DARK } from "@/lib/WickedTheme";
import { TOOLBAR_FONT_SYSTEM } from "@/lib/WickedTheme";
import { TOOLBAR_FONT_MATH } from "@/lib/WickedTheme";

import upFileSvg from "./up-file.svg";
import upFileHoverSvg from "./up-file-hover.svg";
import searchSvg from "./search.svg";

const mk = new ControlMaker("StartupUpload");

const UPLOAD1_IMG = convertSvgToCssUrl(upFileSvg);
const UPLOAD2_IMG = convertSvgToCssUrl(upFileHoverSvg);
const SEARCH_IMG = convertSvgToCssUrl(searchSvg);

const TABE_TEXT = '#afafaf';
const uic_strupl_des ='#afafaf';
const uic_strupl_fdrop_borImg = '#ebebeb00';
const uic_strupl_fdrop_borImg2 = '#dfdfdf';
const uic_strupl_bor = 'transparent';
const uic_strupl_fdbtn_col = '#a6a6a6';
const uic_strupl_fdbtn_bor = '#c1c1c1';

const vars = mk.newCSSVariableMap({
  uic_strupl_fdbtn_hov: ['#4545450f','#45454540',],
  uic_strupl_dhide_bg: ['#fafafa', 'transparent'],
  uic_strupl_rootbg: [ UIC_START_BACKGROUND_COLOR, UIC_START_BACKGROUND_COLOR_DARK ],
  uic_strupl_img: [ UPLOAD1_IMG, UPLOAD2_IMG ],
});

export const ROOT_CLASS: string = representClassNames("StartupUpload-ROOT_CLASS");
export const FDROP_CLASS: string = representClassNames("StartupUpload-FDROP_CLASS");
export const DSHOW_CLASS: string = representClassNames("StartupUpload-DSHOW_CLASS");
export const DHIDE_CLASS: string = representClassNames("StartupUpload-DHIDE_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}" align="center">
  <h2>Drop your file</h2>
  <h2>Upload your file</h2>
  <div class="${FDROP_CLASS} ${DHIDE_CLASS}">
    <div>
      <div></div>
      <span>
        <label class="notranslate" translate="no">
          <span></span>Upload
        </label>
      </span>
    </div>
  </div>
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

.${FDROP_CLASS} > div > span > label > input,
.${ROOT_CLASS} > h2 + h2
{
  display: none;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${FDROP_CLASS}
{
  align-self: center;
  width: 100%;
  max-width: 1065px;
  border-radius: 10px;
  overflow: hidden;
  user-select: none;
}

.${ROOT_CLASS}
{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 570px;
  padding: 20px 20px;
  background-color: ${vars.uic_strupl_rootbg.asVar()};
  user-select: none;
  box-sizing: border-box;
}

.${ROOT_CLASS} > h2
{
  margin: 0px 0px 20px 0px;
  font-size: 2.81em;
  text-align: center;
  font-weight: 800;
  color: ${uic_strupl_des};
  font-family: ${TOOLBAR_FONT_MATH};
}

.${DHIDE_CLASS}
{
  background-color: ${vars.uic_strupl_dhide_bg.asVar()};
}

.${DSHOW_CLASS} > div > div
{
  width: 100%;
  transform: scale(1.1);
  transition-duration: 0.7s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.2s;
}

.${FDROP_CLASS} > div
{
  height: 100%;
  border-image-source: repeating-linear-gradient(45deg, ${uic_strupl_fdrop_borImg} 0% 2%, ${uic_strupl_fdrop_borImg2} 2% 4%, ${uic_strupl_fdrop_borImg} 4% 6%, ${uic_strupl_fdrop_borImg2} 6% 8%);
  border-width: 3px;
  border-image-slice: 4;
  border-style: solid;
  padding: 30px;
}

.${FDROP_CLASS} > div > div
{
  height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${vars.uic_strupl_img.asVar()};
  border: 15px solid ${uic_strupl_bor};
}

.${DSHOW_CLASS} > div > div + div
{
  opacity: 0.3;
}

.${FDROP_CLASS} > div > span
{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: none;
  width: auto;
  height: auto;
  pointer-events: auto;
}

.${FDROP_CLASS} > div > span > label
{
  display: flex;
  align-items: center;
  width: 270px;
  color: ${uic_strupl_fdbtn_col};
  font-size: 45px;
  text-align: center;
  border: 3px solid ${uic_strupl_fdbtn_bor};
  border-radius: 5px;
  padding: 5px 10px 5px 30px;
  cursor: pointer;
  font-family: ${TOOLBAR_FONT_SYSTEM};
  flex-shrink: 0;
}

.${FDROP_CLASS} > div > span > label:hover
{
  background-color: ${vars.uic_strupl_fdbtn_hov.asVar()};
}

.${FDROP_CLASS} > div > span > label > span
{
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-image: ${SEARCH_IMG};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

@media (device-width <= 550px)
{
  .${ROOT_CLASS}
  {
    display: flex;
    justify-content: center;
    min-height: 680px;
  }
  .${FDROP_CLASS}
  {
    height: 100%;
    max-height: 1100px;
  }
  .${FDROP_CLASS} > div
  {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .${FDROP_CLASS} > div > div
  {
    height: calc(100% - 75px);
  }
  .${FDROP_CLASS} > div > span
  {
    height: auto;
  }
}

@media (device-width <= 300px)
{
  .${FDROP_CLASS}
  {
    width: auto;
    height: auto;
  }
  .${FDROP_CLASS} > div
  {
    width: auto;
  }
  .${FDROP_CLASS} > div > div
  {
    display: none;
  }
  .${FDROP_CLASS} > div > div + div
  {
    display: block;
  }
  .uic-strupl-fdbtn > label
  {
    width: 470px;
    font-size: 80px;
  }
  .uic-strupl-fdbtn > label > span
  {
    width: 80px;
    height: 80px;
  }
  .${ROOT_CLASS} > h2
  {
    display: none;
  }
  .${ROOT_CLASS} > h2 + h2
  {
    display: block;
    font-size: 4.81em;
    font-weight: 800;
    color: ${TABE_TEXT};
    margin: 0px 0px 20px 0px;
  }
}
`);
