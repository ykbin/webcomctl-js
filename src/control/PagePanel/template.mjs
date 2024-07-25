import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_FAMALY } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('PagePanel', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const DOWNLOAD_CLASS = mk.newClassName("Download");
export const CODETYPE_CLASS = mk.newClassName("CodeType");
export const CTSHOW_CLASS = mk.newClassName("CtShow");
export const PERENTMENU_CLASS = mk.newClassName("PerentMenu");
export const MENUNAME_CLASS = mk.newClassName("MenuName");
export const MENUSTYLE1_CLASS = mk.newClassName("MenuStyle1");
export const MENUSTYLE2_CLASS = mk.newClassName("MenuStyle2");
export const MENUSTYLE3_CLASS = mk.newClassName("MenuStyle3");
export const MENUSTYLE4_CLASS = mk.newClassName("MenuStyle4");
export const MENULIST_CLASS = mk.newClassName("MenuList");
export const MENUTEXT_CLASS = mk.newClassName("MenuText");
export const PSNTLIST_CLASS = mk.newClassName("PrsnList");
export const PSNTTEXT_CLASS = mk.newClassName("PrsnText");
export const PSNTACTV_CLASS = mk.newClassName("PrsnActv");

const DOWNLOAD_IMG = await mk.loadSvgAsCssUrl('./download.svg');

const BS1_VAR = 'rgba(0,0,0,0.13)';
const BS2_VAR = 'rgba(0,0,0,0.11)';
const CTSHOWBS_VAR = 'rgb(0 0 0 / 31%)';
const PLIST_BTN_BOR_VAR = 'transparent';
const PLIST_NOSEL_VAR = 'transparent';
const PLIST_SEL_VAR = '#fd8c73';

export const ROOT_HTML = `
<span class="${ROOT_CLASS}" draggable="false">
  <div>
    <div class="${PERENTMENU_CLASS}"></div>
    <s></s>
    <div class="${PSNTLIST_CLASS}"></div>
  </div>
  <span>
    <a class="${DOWNLOAD_CLASS}"></a>
  </span>
</span>
`;

export const MENU_LIST_HTML = `
<div class="${CODETYPE_CLASS}">
  <div>
    <div class="${MENUNAME_CLASS}"></div>
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

export const CSS = `
:root
{
  --uic-pagpnl-col: #f3f3f3;
  --uic-pagpnl-hov: #e0e3e7;
  --uic-pagpnl-bor-col: rgb(197 195 195);
  --uic-pagpnl-ctype-col: #696969;
  --uic-pagpnl-plist-act: black;
  --uic-pagpnl-plist-hov: rgb(206 206 206);
  --uic-pagpnl-mstyle23-bor: #a1a1a145;
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-pagpnl-col: #252525;
  --uic-pagpnl-hov: #444444;
  --uic-pagpnl-bor-col:#5f5f5f4a;
  --uic-pagpnl-ctype-col: #a7a7a7;
  --uic-pagpnl-plist-act: #c8c8c8;
  --uic-pagpnl-plist-hov: rgb(116 115 115);
}

.${PERENTMENU_CLASS}
{
  display: flex;
  height: 100%;
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
  background-color: var(--uic-pagpnl-col);
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
  padding-left: 5px;
  color: var(--uic-pagpnl-ctype-col);
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

.${PERENTMENU_CLASS}:empty + s,
.${CODETYPE_CLASS} .${MENULIST_CLASS},
.${CODETYPE_CLASS}:has(.${MENULIST_CLASS}:empty),
.${CODETYPE_CLASS}:has(.${MENULIST_CLASS}:empty) + s,
.${ROOT_CLASS} > div > s:has(+ .${PSNTLIST_CLASS}:empty)
{
  display: none;
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
  border-left: 1px solid var(--uic-pagpnl-bor-col);
  height: 50%;
}

.${CODETYPE_CLASS} > div > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
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
  border-left: 1px solid var(--uic-pagpnl-mstyle23-bor);
}

.${MENUSTYLE2_CLASS} > li > span,
.${MENUSTYLE3_CLASS} > li > span
{
  border-bottom: 1px solid var(--uic-pagpnl-mstyle23-bor);
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
  background-color: var(--uic-pagpnl-col);
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
  background-color: var(--uic-pagpnl-hov);
  transition: background-color 0.250s;
}

.${DOWNLOAD_CLASS}
{
  display: block;
  width: 35px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 23px;
  background-image: ${DOWNLOAD_IMG};
  background-color: var(--uic-pagpnl-col);
  flex-shrink: 0;
}

.${DOWNLOAD_CLASS}:hover
{
  background-color: var(--uic-pagpnl-hov);
  border-color: var(--uic-pagpnl-col);
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
  margin: 0 3px;
  border: 1px solid ${PLIST_BTN_BOR_VAR};
  border-bottom: 3px solid ${PLIST_BTN_BOR_VAR};
  flex-shrink: 0;
}

.${PSNTLIST_CLASS} > .${PSNTACTV_CLASS} > span
{
  color: var(--uic-pagpnl-plist-act);
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
  border-bottom: 2px solid var(--uic-pagpnl-plist-hov);
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
`;
