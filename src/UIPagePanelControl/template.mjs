import { Mobile } from '../lib/Settings.mjs';

export const NAME = 'PagePanel';

const VAR = {
  BS1: 'rgba(0,0,0,0.13)',
  BS2: 'rgba(0,0,0,0.11)',
  IMG: 'url(download.svg)',
  CTSHOWBS: 'rgb(0 0 0 / 31%)',
  PLIST_BTN_BOR: 'transparent',
  PLIST_NOSEL: 'transparent',
  PLIST_SEL: '#fd8c73',
};

export const CLASS = {
  ROOT: "uic-pagpnl-root",
  DOWNLOAD: "uic-pagpnl-download",
  CODETYPE: "uic-pagpnl-codetype",
  CTSHOW: "uic-pagpnl-ctshow",
  MENULIST: "uic-pagpnl-menulist",
  MENUTEXT: "uic-pagpnl-menutext",
  PSNTLIST: "uic-pagpnl-prsnlist",
  PSNTTEXT: "uic-pagpnl-prsntext",
  PSNTACTV: "uic-pagpnl-prsnactv",
};

export const HTML = `
<span class="${CLASS.ROOT}" draggable="false">
  <div>
    <div class="${CLASS.CODETYPE}">
      <div>
        <div>File</div>
      </div>
      <span>
        <ul class="${CLASS.MENULIST}"></ul>
      </span>
    </div>
    <s></s>
    <div class="${CLASS.PSNTLIST}"></div>
  </div>
  <a class="${CLASS.DOWNLOAD}"></a>
</span>
`;

export const MENU_ITEM_HTML = `
<li><span class="${CLASS.MENUTEXT}"></span></li>
`;

export const PSNT_ITEM_HTML = `
<div><span class="${CLASS.PSNTTEXT}"></span></div>
`;

export const CSS = `
:root
{
  --uic-pagpnl-col: #f3f3f3;
  --uic-pagpnl-bor-col: rgb(197 195 195);
  --uic-pagpnl-ctype-col: #696969;
  --uic-pagpnl-hov: #e0e3e7;
  --uic-pagpnl-plist-act: black;
  --uic-pagpnl-plist-hov: rgb(206 206 206);
}

[data-theme="dark"]
{
  --uic-pagpnl-col: #252525;
  --uic-pagpnl-bor-col:#5f5f5f4a;
  --uic-pagpnl-ctype-col: #a7a7a7;
  --uic-pagpnl-hov: #444444;
  --uic-pagpnl-plist-act: #c8c8c8;
  --uic-pagpnl-plist-hov: rgb(116 115 115);
}

.${CLASS.ROOT}
{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  padding-right: 5px;
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 16px;
  background-color: var(--uic-pagpnl-col);
  box-shadow: 0px 1.6px 3.6px ${VAR.BS1}, 0px 0px 2.9px ${VAR.BS2};
  flex-shrink: 0;
  user-select: none;
  font-family: Helvetica,Arial,sans-serif;
  z-index: 1;
}

.${CLASS.DOWNLOAD}
{
  text-decoration: none;
}

.${CLASS.ROOT} s
{
  display: block;
  text-decoration: none;
}

.${CLASS.ROOT} ul
{
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}

.${CLASS.ROOT} > div
{
  display: flex;
  align-items: center;
  width: calc(100% - 25px);
  height: 100%;
  padding-left: 5px;
  color: var(--uic-pagpnl-ctype-col);
}

.${CLASS.CODETYPE}
{
  height: 100%;
  min-width: 55px;
  margin-right: 3px;
  flex-shrink: 0;
}

.${CLASS.CODETYPE} > span > ul,
.${CLASS.CODETYPE}:has(.${CLASS.MENULIST}:empty),
.${CLASS.CODETYPE}:has(.${CLASS.MENULIST}:empty) + s,
.${CLASS.ROOT} > div > s:has(+ .${CLASS.PSNTLIST}:empty)
{
  display: none;
}

.${CLASS.CODETYPE} > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

.${CLASS.ROOT} > div > s
{
  border-left: 1px solid var(--uic-pagpnl-bor-col);
  height: 50%;
}

.${CLASS.CODETYPE} > div > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: inherit;
  padding-left: 5px;
}

.${CLASS.CTSHOW} > span
{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 0px;
  height: 0px;
}

.${CLASS.CTSHOW} > span > ul
{
  display: block;
  width: 180px;
  padding: 5px 0px;
  border-end-end-radius: 3px;
  border-end-start-radius: 3px;
  background-color: var(--uic-pagpnl-col);
  box-shadow: inset 2px 4px 4px -5px ${VAR.CTSHOWBS};
  z-index: 1;
}

.${CLASS.CTSHOW} > span > ul > li
{
  width: initial;
  padding: 5px;
  white-space: nowrap;
}

.${CLASS.CTSHOW} > span > ul > li > span
{
  display: block;
  height: inherit;
  padding: 5px 10px;
  border-radius: 2px;
}

.${CLASS.CTSHOW} > div,
.${CLASS.CODETYPE} > div:hover,
.${CLASS.CTSHOW} > span > ul > li:hover > span,
.${CLASS.PSNTLIST} > div:hover
{
  background-color: var(--uic-pagpnl-hov);
  transition: background-color 0.250s;
}

.${CLASS.DOWNLOAD}
{
  display: block;
  width: 35px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 23px;
  background-image: ${VAR.IMG};
  background-color: var(--uic-pagpnl-col);
  flex-shrink: 0;
}

.${CLASS.DOWNLOAD}:hover
{
  background-color: var(--uic-pagpnl-hov);
  border-color: var(--uic-pagpnl-col);
}

.${CLASS.PSNTLIST}
{
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3px;
}

.${CLASS.PSNTLIST} > div
{
  display: flex;
  align-items: center;
  height: 100%;
  padding-bottom: 1px;
  flex-shrink: 0;
}

.${CLASS.PSNTLIST} > div > span
{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 100%;
  margin: 0 3px;
  border: 1px solid ${VAR.PLIST_BTN_BOR};
  border-bottom: 3px solid ${VAR.PLIST_BTN_BOR};
  flex-shrink: 0;
}

.${CLASS.PSNTLIST} > .${CLASS.PSNTACTV} > span
{
  color: var(--uic-pagpnl-plist-act);
}

.${CLASS.PSNTLIST} > div > span::after
{
  content: " ";
  position: absolute;
  bottom: 0;
  display: block;
  width: 15px;
  border-bottom: 2px solid ${VAR.PLIST_NOSEL};
  border-radius: 5px;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
}

.${CLASS.PSNTLIST} > div:hover > span::after
{
  width: 15px;
  border-bottom: 2px solid var(--uic-pagpnl-plist-hov);
}

.${CLASS.PSNTLIST} > .${CLASS.PSNTACTV}:hover > span::after,
.${CLASS.PSNTLIST} > .${CLASS.PSNTACTV} > span::after
{
  width: 35px;
  border-bottom: 2px solid ${VAR.PLIST_SEL};
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;
}

@media (device-width < ${Mobile.deviceWidth})
{
  .${CLASS.ROOT}
  {
    align-items: center;
    height: 50px;
    font-size: 1.4em;
  }

  .${CLASS.CODETYPE}
  {
    margin-right: 15px;
  }

  .${CLASS.PSNTLIST}
  {
    margin-left: 15px;
  }

  .${CLASS.PSNTLIST} > div
  {
    margin: 0px 10px;
  }

  .${CLASS.CODETYPE} > div > div
  {
    width: 80px;
  }

  .${CLASS.CTSHOW} > span > ul
  {
    width: auto;
  }

  .${CLASS.PSNTLIST} > div > span
  {
    width: 75px;
  }

  .${CLASS.DOWNLOAD}
  {
    width: 50px;
    background-size: 40px;
  }
}
`;
