import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { COMMON_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { TOOLBAR_FONT_FAMALY } from "@/lib/WickedTheme";

import downloadSvg from "./download.svg";
import propertiesSvg from "./properties.svg";
import propSvg from "./Prop.svg";

const mk = new ControlMaker("PagePanel");

const DOWNLOAD_IMG = convertSvgToCssUrl(downloadSvg);
const PROPERTIES_IMG = convertSvgToCssUrl(propertiesSvg);
const PROP_IMG = convertSvgToCssUrl(propSvg);

const BS1_VAR = 'rgba(0,0,0,0.13)';
const BS2_VAR = 'rgba(0,0,0,0.11)';
const CTSHOWBS_VAR = 'rgb(0 0 0 / 31%)';
const PLIST_BTN_BOR_VAR = 'transparent';
const PLIST_NOSEL_VAR = 'transparent';
const PLIST_SEL_VAR = '#fd8c73';
const MLIST_MARGIN = '3px';
const PLIST_MARGIN = MLIST_MARGIN;
const MSTYLE23_BOR = '#a1a1a145';

const vars = mk.newCSSVariableMap({
  col: [ '#f3f3f3', '#252525' ],
  hov: [ '#e0e3e7', '#444444' ],
  borCol: [ 'rgb(197 195 195)', '#5f5f5f4a' ],
  ctypeCol: [ '#696969', '#a7a7a7' ],
  plistAct: [ 'black', '#c8c8c8' ],
  plistHov: [ 'rgb(206 206 206)', 'rgb(116 115 115)' ],
});

export const ROOT_CLASS: string = representClassNames("PagePanel-ROOT_CLASS");
export const DOWNLOAD_CLASS: string = representClassNames("PagePanel-DOWNLOAD_CLASS");
export const PROPERTIES_CLASS: string = representClassNames("PagePanel-PROPERTIES_CLASS");
export const PROPERTIES2_CLASS: string = representClassNames("PagePanel-PROPERTIES2_CLASS");
export const PROPERTIES_SHOW_CLASS: string = representClassNames("PagePanel-PROPERTIES_SHOW_CLASS");
export const CODETYPE_CLASS: string = representClassNames("PagePanel-CODETYPE_CLASS");
export const CTSHOW_CLASS: string = representClassNames("PagePanel-CTSHOW_CLASS");
export const PERENTMENU_CLASS: string = representClassNames("PagePanel-PERENTMENU_CLASS");
export const MENUNAME_CLASS: string = representClassNames("PagePanel-MENUNAME_CLASS");
export const MENUSTYLE1_CLASS: string = representClassNames("PagePanel-MENUSTYLE1_CLASS");
export const MENUSTYLE2_CLASS: string = representClassNames("PagePanel-MENUSTYLE2_CLASS");
export const MENUSTYLE3_CLASS: string = representClassNames("PagePanel-MENUSTYLE3_CLASS");
export const MENUSTYLE4_CLASS: string = representClassNames("PagePanel-MENUSTYLE4_CLASS");
export const MENULIST_CLASS: string = representClassNames("PagePanel-MENULIST_CLASS");
export const MENUTEXT_CLASS: string = representClassNames("PagePanel-MENUTEXT_CLASS");
export const PSNTLIST_CLASS: string = representClassNames("PagePanel-PSNTLIST_CLASS");
export const PSNTTEXT_CLASS: string = representClassNames("PagePanel-PSNTTEXT_CLASS");
export const PSNTACTV_CLASS: string = representClassNames("PagePanel-PSNTACTV_CLASS");
export const MENUARROW_CLASS: string = representClassNames("PagePanel-MENUARROW_CLASS");

export const ROOT_HTML = `
<span class="${ROOT_CLASS}" draggable="false">
  <div>
    <div class="${PERENTMENU_CLASS}"></div>
    <s></s>
    <div class="${PSNTLIST_CLASS}"></div>
  </div>
  <span>
    <a class="${DOWNLOAD_CLASS}"></a>
    <div class="${PROPERTIES_CLASS}"></div>
    <div class="${PROPERTIES2_CLASS}"></div>
  </span>
</span>
`;

export const MENU_LIST_HTML = `
<div class="${CODETYPE_CLASS}">
  <div>
    <div class="${MENUNAME_CLASS}"></div>
    <span class="${MENUARROW_CLASS}"></span>
  </div>
  <span>
    <ul class="${MENULIST_CLASS}"></ul>
  </span>
</div>
`;

export const MENU_ITEM_HTML = `
<li><span class="${MENUTEXT_CLASS}"></span></li>
`;

export const PSNT_ITEM_HTML = `
<div><span class="${PSNTTEXT_CLASS}"></span></div>
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

.${PERENTMENU_CLASS}
{
  display: flex;
  height: 100%;
}

.${PERENTMENU_CLASS} > div:first-child
{
  margin-left: ${MLIST_MARGIN};
}

.${PERENTMENU_CLASS} > div:last-child
{
  margin-right: ${MLIST_MARGIN};
}

.${ROOT_CLASS}
{
  display: flex;
  width: 100%;
  height: 35px;
  padding-right: 5px;
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 16px;
  background-color: ${vars.col.asVar()};
  box-shadow: 0px 1.6px 3.6px ${BS1_VAR}, 0px 0px 2.9px ${BS2_VAR};
  flex-shrink: 0;
  user-select: none;
  font-family: ${TOOLBAR_FONT_FAMALY};
  z-index: 1;
  box-sizing: border-box;
}

.${ROOT_CLASS} > *
{
  box-sizing: border-box;
}

.${DOWNLOAD_CLASS}
{
  text-decoration: none;
}

.${ROOT_CLASS} s
{
  display: block;
  text-decoration: none;
}

.${ROOT_CLASS} ul
{
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}

.${ROOT_CLASS} > div
{
  display: flex;
  align-items: center;
  width: inherit;
  height: 100%;
  color: ${vars.ctypeCol.asVar()};
}

.${ROOT_CLASS} > span
{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: inherit;
}

.${CODETYPE_CLASS}
{
  height: 100%;
  min-width: 55px;
  /*margin-right: 3px;*/
  flex-shrink: 0;
  box-sizing: border-box;
}

.${CODETYPE_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} > span > div,
.${PERENTMENU_CLASS}:empty + s,
.${CODETYPE_CLASS} .${MENULIST_CLASS},
.${CODETYPE_CLASS}:has(.${MENULIST_CLASS}:empty),
.${CODETYPE_CLASS}:has(.${MENULIST_CLASS}:empty) + s,
.${ROOT_CLASS} > div > s:has(+ .${PSNTLIST_CLASS}:empty)
{
  display: none;
}

.${ROOT_CLASS} > span > .${PROPERTIES_SHOW_CLASS},
.${PROPERTIES2_CLASS}.${PROPERTIES_SHOW_CLASS},
.${CODETYPE_CLASS}:has(.${MENUSTYLE2_CLASS}) .${MENUARROW_CLASS},
.${CODETYPE_CLASS}:has(.${MENUSTYLE3_CLASS}) .${MENUARROW_CLASS},
.${CODETYPE_CLASS}:has(.${MENULIST_CLASS}) .${MENUARROW_CLASS}::before,
.${CODETYPE_CLASS}:has(ul.${MENUSTYLE4_CLASS}:empty)
{
  display: block;
}

.${CODETYPE_CLASS}:has(.${MENUSTYLE2_CLASS}) > div,
.${CODETYPE_CLASS}:has(.${MENUSTYLE3_CLASS}) > div
{
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}

.${MENUARROW_CLASS}
{
  display: none;
  width: 20px;
  height: 100%;
}

.${CODETYPE_CLASS}:has(.${MENUSTYLE4_CLASS}:empty) > div > div
{
  width: auto;
  min-width: 40px;
  padding: 0 5px;
}

.${CODETYPE_CLASS}:has(.${MENUSTYLE2_CLASS}) > div > div,
.${CODETYPE_CLASS}:has(.${MENUSTYLE3_CLASS}) > div > div
{
  padding-left: 15px;
}

.${CODETYPE_CLASS}:has(.${MENUSTYLE2_CLASS}),
.${CODETYPE_CLASS}:has(.${MENUSTYLE3_CLASS})
{
  position: relative;
}

.${MENUARROW_CLASS}::before
{
  content: ' ';
  position: relative;
  top: 14px;
  left: 7px;
  transform: rotate(315deg);
  display: none;
  width: 5px;
  height: 5px;
  border-left: 1px solid ${vars.ctypeCol.asVar()};
  border-bottom: 1px solid ${vars.ctypeCol.asVar()};
}

.${CTSHOW_CLASS} .${MENUARROW_CLASS}::before
{
  transform: rotate(134deg);
}

.${CODETYPE_CLASS} > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

.${ROOT_CLASS} > div > s
{
  border-left: 1px solid ${vars.borCol.asVar()};
  height: 50%;
}

.${CODETYPE_CLASS} > div > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: inherit;
  padding-left: 5px;
}

.${CTSHOW_CLASS} > span
{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 0px;
  height: 0px;
}

.${CTSHOW_CLASS} .${MENUSTYLE1_CLASS}
{
  display: block;
  width: 180px;
}

.${CTSHOW_CLASS} .${MENUSTYLE1_CLASS} > li
{
  padding: 5px;
}

.${CTSHOW_CLASS} .${MENUSTYLE1_CLASS} > li > span
{
  padding: 5px 10px;
}

.${CTSHOW_CLASS} .${MENUSTYLE2_CLASS}
{
  display: block;
  width: auto;
}

.${CTSHOW_CLASS} .${MENUSTYLE3_CLASS}
{
  display: grid;
  grid-template-columns: 60px 60px;
  width: auto;
}

.${CTSHOW_CLASS} .${MENUSTYLE2_CLASS} > li,
.${CTSHOW_CLASS} .${MENUSTYLE3_CLASS} > li
{
  padding: 5px 5px 0 5px;
}

.${CTSHOW_CLASS} .${MENUSTYLE2_CLASS} > li > span,
.${CTSHOW_CLASS} .${MENUSTYLE3_CLASS} > li > span
{
  padding: 5px 0px 5px 8px;
}

.${CTSHOW_CLASS} .${MENUSTYLE2_CLASS} > li > span,
.${CTSHOW_CLASS} .${MENUSTYLE3_CLASS} > li > span
{
  width: 50px;
  font-size: 12px;
}

.${MENUSTYLE3_CLASS} > li:nth-child(2n)
{
  border-left: 1px solid ${MSTYLE23_BOR};
}

.${MENUSTYLE2_CLASS} > li > span,
.${MENUSTYLE3_CLASS} > li > span
{
  border-bottom: 1px solid ${MSTYLE23_BOR};
}

.${MENUSTYLE2_CLASS} > li:nth-last-child(1) > span,
.${MENUSTYLE3_CLASS} > li:nth-last-child(1) > span,
.${MENUSTYLE3_CLASS} > li:nth-last-child(2) > span
{
  border-bottom: none;
}

.${CTSHOW_CLASS} .${MENULIST_CLASS}
{
  padding: 5px 0px;
  border-end-end-radius: 3px;
  border-end-start-radius: 3px;
  background-color: ${vars.col.asVar()};
  box-shadow: inset 2px 4px 4px -5px ${CTSHOWBS_VAR};
  z-index: 1;
}

.${CTSHOW_CLASS} .${MENULIST_CLASS} > li
{
  width: initial;
  white-space: nowrap;
}

.${CTSHOW_CLASS} .${MENULIST_CLASS} > li > span
{
  display: block;
  height: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
}

.${CTSHOW_CLASS} > div,
.${CODETYPE_CLASS} > div:hover,
.${CTSHOW_CLASS} .${MENUSTYLE1_CLASS} > li:hover > span,
.${MENUSTYLE2_CLASS} > li:hover,
.${MENUSTYLE3_CLASS} > li:hover,
.${PSNTLIST_CLASS} > div:hover
{
  background-color: ${vars.hov.asVar()};
  transition: background-color 0.250s;
}

.${ROOT_CLASS} > span > *
{
  width: 35px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

.${PROPERTIES2_CLASS}
{
  background-size: 25px;
  background-image: ${PROP_IMG};
}

.${PROPERTIES_CLASS}
{
  background-size: 25px;
  background-image: ${PROPERTIES_IMG};
}

.${DOWNLOAD_CLASS}
{
  display: block;
  background-size: 23px;
  background-image: ${DOWNLOAD_IMG};
  background-color: ${vars.col.asVar()};
}

.${ROOT_CLASS} > span > *:hover
{
  background-color: ${vars.hov.asVar()};
  border-color: ${vars.col.asVar()};
}

.${PSNTLIST_CLASS}
{
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3px;
}

.${PSNTLIST_CLASS} > div
{
  display: flex;
  align-items: center;
  height: 100%;
  padding-bottom: 1px;
  flex-shrink: 0;
}

.${PSNTLIST_CLASS} > div > span
{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 100%;
  margin: 0 ${PLIST_MARGIN};
  border: 1px solid ${PLIST_BTN_BOR_VAR};
  border-bottom: 3px solid ${PLIST_BTN_BOR_VAR};
  flex-shrink: 0;
}

.${PSNTLIST_CLASS} > .${PSNTACTV_CLASS} > span
{
  color: ${vars.plistAct.asVar()};
}

.${PSNTLIST_CLASS} > div > span::after
{
  content: " ";
  position: absolute;
  bottom: 0;
  display: block;
  width: 15px;
  border-bottom: 2px solid ${PLIST_NOSEL_VAR};
  border-radius: 5px;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
}

.${PSNTLIST_CLASS} > div:hover > span::after
{
  width: 15px;
  border-bottom: 2px solid ${vars.plistHov.asVar()};
}

.${PSNTLIST_CLASS} > .${PSNTACTV_CLASS}:hover > span::after,
.${PSNTLIST_CLASS} > .${PSNTACTV_CLASS} > span::after
{
  width: 35px;
  border-bottom: 2px solid ${PLIST_SEL_VAR};
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    align-items: center;
    height: 50px;
    font-size: 28px;
  }

  .${CODETYPE_CLASS}
  {
    margin-right: 15px;
  }

  .${PSNTLIST_CLASS}
  {
    margin-left: 15px;
  }

  .${PSNTLIST_CLASS} > div
  {
    margin: 0px 10px;
  }

  .${CODETYPE_CLASS} > div > div
  {
    width: 80px;
  }

  .${CTSHOW_CLASS} > span > ul
  {
    width: 360px;
    padding: 10px 0px;
    border-end-end-radius: 5px;
    border-end-start-radius: 5px;
  }

  .${CTSHOW_CLASS} .${MENULIST_CLASS} > li
  {
    padding: 10px;
  }

  .${CTSHOW_CLASS} .${MENULIST_CLASS} > li > span
  {
    padding: 10px 10px;
  }

  .${PSNTLIST_CLASS} > div > span
  {
    width: 75px;
  }

  .${DOWNLOAD_CLASS}
  {
    width: 50px;
    background-size: 40px;
  }
}
`);
