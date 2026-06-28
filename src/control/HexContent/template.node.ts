import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { UIC_CONTENT_BACKGROUND_COLOR } from "@/lib/WickedTheme";
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from "@/lib/WickedTheme";
import { TOOLBAR_FONT_MONOSPACE } from "@/lib/WickedTheme";

const mk = new ControlMaker("HexContent");

export const ROOT_CLASS: string = representClassNames("HexContent-ROOT_CLASS");
export const CONTENT_CLASS: string = representClassNames("HexContent-CONTENT_CLASS");
export const OFSLIST_CLASS: string = representClassNames("HexContent-OFSLIST_CLASS");
export const BINLIST_CLASS: string = representClassNames("HexContent-BINLIST_CLASS");
export const TXTLIST_CLASS: string = representClassNames("HexContent-TXTLIST_CLASS");
export const SCROLL_MAIN_CLASS: string = representClassNames("HexContent-SCROLL_MAIN_CLASS");
export const SCROLL_BAR_CLASS: string = representClassNames("HexContent-SCROLL_BAR_CLASS");
export const SCROLL_THUMB_CLASS: string = representClassNames("HexContent-SCROLL_THUMB_CLASS");
export const OFFSET_CLASS: string = representClassNames("HexContent-OFFSET_CLASS");
export const BINARY_CLASS: string = representClassNames("HexContent-BINARY_CLASS");
export const TEXT_CLASS: string = representClassNames("HexContent-TEXT_CLASS");

const SCROLL_STHMBG2 = '#959595';

const vars = mk.newCSSVariableMap({
  ROOTCOL: [ "black", "#b8b4b4" ],
  BG: [ UIC_CONTENT_BACKGROUND_COLOR, UIC_CONTENT_BACKGROUND_COLOR_DARK ],
  TTLCL1: [ "#646464", "#7c7c7c" ],
  TTLCL2: [ "#0058ff", "#2160b0" ],
  SCROLL_STHMBG1: [ "darkgray", "#454545" ],
  OFFCOLTTL: [ "#4b7ec0", "#20477a" ],
});

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
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  color: ${vars.ROOTCOL.asVar()};
  user-select: auto;
  overflow: hidden;
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
  background-color: ${vars.BG.asVar()};
  font-family: ${TOOLBAR_FONT_MONOSPACE};
  flex-shrink: 0;
  overflow: hidden;
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
  color: ${vars.TTLCL1.asVar()};
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
  color: ${vars.TTLCL2.asVar()};
}

.${OFFSET_CLASS} > h3
{
  color: ${vars.OFFCOLTTL.asVar()};
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
}

.${SCROLL_MAIN_CLASS} > div > div
{
  display: block;
  position: relative;
  width: inherit;
  border-radius: 10px;
  background-color: ${vars.SCROLL_STHMBG1.asVar()};
}

.${SCROLL_MAIN_CLASS} > div > div:hover
{
  background-color: ${SCROLL_STHMBG2};
}

@media (width < 830px)
{ 
  div.${SCROLL_MAIN_CLASS}
  {
    position: sticky;
    right: 0px;
  }
}
`);
