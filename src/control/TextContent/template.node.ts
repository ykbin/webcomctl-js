import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { COMMON_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";
import { UIC_CONTENT_BACKGROUND_COLOR } from "@/lib/WickedTheme";
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from "@/lib/WickedTheme";
import { TOOLBAR_FONT_MONOSPACE } from "@/lib/WickedTheme";

const mk = new ControlMaker("TextContent");

const vars = mk.newCSSVariableMap({
  bg: [ UIC_CONTENT_BACKGROUND_COLOR, UIC_CONTENT_BACKGROUND_COLOR_DARK ],
  col: [ 'black', '#b8b4b4' ],
  bor: [ '#e6e6e6', '#252525' ],
  numCol: [ '#fafafa', '#19191d' ],
});

const BLUE_COLOR = '#0000ff';
const OFFSET_COLOR = 'rgb(197, 6, 11)';
const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';

export const ROOT_CLASS: string = representClassNames("TextContent-ROOT_CLASS");
export const NUMBERS: string = representClassNames("TextContent-NUMBERS");
export const CONTENT: string = representClassNames("TextContent-CONTENT");
export const OFFSET: string = representClassNames("TextContent-OFFSET");
export const BLUE: string = representClassNames("TextContent-BLUE");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <ul class="${NUMBERS}"></ul>
  <div class="${CONTENT}">
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

.${ROOT_CLASS} ul
{
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}

.${ROOT_CLASS} > div::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${ROOT_CLASS} > div::-webkit-scrollbar-thumb
{
  background-color: ${SCROLLBAR_THUMB_COLOR};
  border-radius: 10px;
}

.${ROOT_CLASS} > div::-webkit-scrollbar-track,
.${ROOT_CLASS} > div::-webkit-scrollbar-corner
{
  background-color: ${SCROLLBAR_TRACK_COLOR};
}

.${ROOT_CLASS} > ul::-webkit-scrollbar
{
  width: 0;
  height: 10px;
}

.${ROOT_CLASS}
{
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 1.4em;
  color: ${vars.col.asVar()};
  font-family: ${TOOLBAR_FONT_MONOSPACE};
  background-color: ${vars.bg.asVar()};
  box-sizing: border-box;
}

.${ROOT_CLASS} > *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} > div
{
  height: auto;
  width: 100%;
  padding: 10px 10px 0px 10px;
  overflow-y: scroll;
  overflow-x: scroll;
}

.${ROOT_CLASS} > div > span
{
  white-space: pre;
}

.${ROOT_CLASS} > ul
{
  height: auto;
  min-width: 55px;
  padding: 10px 5px 10px 5px;
  border-right: 1px solid ${vars.bor.asVar()};
  background-color: ${vars.numCol.asVar()};
  text-align: center;
  overflow-y: auto;
  overflow-x: scroll;
  scrollbar-width: none;
  flex-shrink: 0;
}

.${ROOT_CLASS} > ul:empty
{
  display: none;
}

.${ROOT_CLASS} > ul > li,
.${ROOT_CLASS} > div > span
{
  display: block;
  height: 20px;
}

.${BLUE}
{
  color: ${BLUE_COLOR};
}

.${OFFSET}
{
  color: ${OFFSET_COLOR};
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    font-size: 25px;
  }
  .${ROOT_CLASS} > ul > li,
  .${ROOT_CLASS} > div > span
  {
    height: 30px;
  }
}
`);
