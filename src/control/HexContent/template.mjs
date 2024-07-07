import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('HexContent', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");
export const CONTENT_CLASS = mk.newClassName("Content");
export const OFSLIST_CLASS = mk.newClassName("Ofslist");
export const BINLIST_CLASS = mk.newClassName("Binlist");
export const TXTLIST_CLASS = mk.newClassName("Txtlist");

export const SCROLL_MAIN_CLASS = mk.newClassName("ScrollMain");
export const SCROLL_BAR_CLASS = mk.newClassName("ScrollBar");
export const SCROLL_THUMB_CLASS = mk.newClassName("ScrollThumb");

 // TODO: Remove extra classes
const OFFSET_CLASS = mk.newClassName("Offset");
const BINARY_CLASS = mk.newClassName("Binary");
const TEXT_CLASS = mk.newClassName("Text");

const OFFSET_STR = "Offset";
const TEXT_STR = "Text";

export const ROOT_HTML = `
 <div class="${ROOT_CLASS}">
    <div class="${CONTENT_CLASS}">
      <div class="${OFFSET_CLASS}">
        <h3>${OFFSET_STR}</h3>
        <ul>
          <div class="${OFSLIST_CLASS}"></div>
        </ul>
      </div>
      <div class="${BINARY_CLASS}">
        <h3><span>00 01 02 03 04 05 06 07  08 09 0A 0B 0C 0D 0E 0F</span></h3>
        <div>
          <div class="${BINLIST_CLASS}"></div>
        </div>
      </div>
      <div class="${TEXT_CLASS}">
        <h3>${TEXT_STR}</h3>
        <ul>
          <div class="${TXTLIST_CLASS}"></div>
        </ul>
      </div>
    </div>
    <div class="${SCROLL_MAIN_CLASS}">
      <div class="${SCROLL_BAR_CLASS}">
        <div class="${SCROLL_THUMB_CLASS}"></div>
      </div>
    </div>
  </div>
`;

export const CSS = `
:root
{
  --uic-hex-rootcol: black;
  --uic-hex-bg: ${UIC_CONTENT_BACKGROUND_COLOR};
  --whex-hex-color:  black;
  --whex-hex-ttlcl2: #0058ff;
  --whex-hex-scrlbg: #dfdfdf29;
  --hex-sc-sthmbg1: darkgray;
  --hex-sc-sthmbg2: #959595;
  --whex-scroll-scrlbg: #efefef;
  --whex-scroll-sthmbg1: darkgray;
  --whex-scroll-sthmbg2: #959595;
  --whex-cont-bor: #e8e8e8;
  --whex-hex-ttlclm: #646464;
  --whex-hex-offcolttl: #4b7ec0;
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-hex-rootcol: #b8b4b4;
  --uic-hex-bg: ${UIC_CONTENT_BACKGROUND_COLOR_DARK};
  --whex-hex-color: gainsboro;
  --whex-hex-ttlcl2: #2160b0;
  --whex-hex-scrlbg: #1d1d1d;
  --hex-sc-sthmbg1: #454545;
  --hex-sc-sthmbg2: #565656;
  --whex-scroll-scrlbg: #212121;
  --whex-scroll-sthmbg1: #454545;
  --whex-cont-bor: #252525;
  --whex-hex-ttlclm: #7c7c7c;
  --whex-hex-offcolttl: #20477a;
}

.${ROOT_CLASS}
{
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  color: var(--uic-hex-rootcol);
  user-select: auto;
  box-sizing: border-box;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} s
{
  text-decoration: none;
}

.${ROOT_CLASS} h3
{
  margin: 0px;
  font-size: 1em;
  font-weight: 400;
}

.${CONTENT_CLASS}
{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: calc(100% - 10px);
  padding-top: 1px;
  line-height: 20px;
  word-spacing: normal;
  font-size: 16px;
  text-align: center;
  background-color: var(--uic-hex-bg);
  font-family: monospace;
  flex-shrink: 0;
  overflow: auto;
}

.${BINARY_CLASS} > h3 > span,
.${CONTENT_CLASS} h3
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
}

.${CONTENT_CLASS} h3
{
  padding: 0px 10px;
  font-size: 1em;
  color: var(--whex-hex-ttlclm);
  box-sizing: border-box;
}

.${OFFSET_CLASS},
.${TEXT_CLASS},
.${BINARY_CLASS},
.${OFFSET_CLASS} > ul > div,
.${TEXT_CLASS} > ul > div,
.${BINARY_CLASS} > div > div
{
  height: 100%;
}

.${OFFSET_CLASS} > ul,
.${TEXT_CLASS} > ul,
.${BINARY_CLASS} > div
{
  height: calc(100% - 40px);
}

.${OFFSET_CLASS}
{
  width: auto;
}

.${OFFSET_CLASS}
{
  color: var(--whex-hex-ttlcl2);
}

.${OFFSET_CLASS} > h3
{
  color: var(--whex-hex-offcolttl);
}

.${OFFSET_CLASS} > ul,
.${TEXT_CLASS} > ul
{
  list-style-type: none;
  padding: 5px 10px 10px 10px;
  margin: 0px;
}

.${TEXT_CLASS} > ul li
{
  white-space: pre;
  word-spacing: normal;
}

.${BINARY_CLASS}
{
  text-align: left;
  flex-shrink: 0;
}

.${BINARY_CLASS} > div
{
  padding: 5px 10px 10px 10px;
}

.${BINARY_CLASS} > h3,
.${BINARY_CLASS} > div > div
{
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: min-content;
  white-space: pre;
  font-size: 1em;
}

@media (device-width < 550px)
{
  .${CONTENT_CLASS}
  {
    font-size: 20px;
    line-height: inherit;
  }
}

.${SCROLL_MAIN_CLASS}
{
  height: 100%;
  width: 10px;
  overflow: visible;
}

.${SCROLL_MAIN_CLASS} > h3
{
  display: block;
  height: 25px;
  padding: 0px;
}

.${SCROLL_MAIN_CLASS} > div
{
  position: absolute;
  right: 0px;
  width: 10px;
  height: 100%;
  background-color: var(--whex-scroll-scrlbg);
}

.${SCROLL_MAIN_CLASS} > div > div
{
  display: block;
  position: relative;
  width: inherit;
  border-radius: 10px;
  background-color: var(--whex-scroll-sthmbg1);
}

.${SCROLL_MAIN_CLASS} > div > div:hover
{
  background-color: var(--whex-scroll-sthmbg2);
}

@media (width < 830px)
{ 
  div.${SCROLL_MAIN_CLASS}
  {
    position: sticky;
    right: 0px;
  }
}
`;
