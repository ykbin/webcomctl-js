import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('TextContent', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");
export const NUMBERS_CLASS = mk.newClassName("Numbers");
export const CONTENT_CLASS = mk.newClassName("Content");
export const OFFSET_CLASS = mk.newClassName("Offset");
export const BLUE_CLASS = mk.newClassName("Blue");

const BLUE_COLOR = '#0000ff';
const OFFSET_COLOR = 'rgb(197, 6, 11)';
const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';
const TEXT_CONTENT_COLOR1 = 'black';
const TEXT_CONTENT_COLOR2 = '#b8b4b4';
const NUMBER_BORDER_COLOR1 = '#e6e6e6';
const NUMBER_BORDER_COLOR2 = '#252525';
const NUMBER_BACKGROUND_COLOR1 = '#fafafa';
const NUMBER_BACKGROUND_COLOR2 = '#19191d';

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <ul class="${NUMBERS_CLASS}"></ul>
  <div class="${CONTENT_CLASS}"></div>
</div>
`;

export const CSS = `
:root
{
  --uic-txtcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR};
  --uic-txtcnt-col: ${TEXT_CONTENT_COLOR1};
  --uic-txtcnt-bor: ${NUMBER_BORDER_COLOR1};
  --uic-txtcnt-num-col: ${NUMBER_BACKGROUND_COLOR1};
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-txtcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR_DARK};
  --uic-txtcnt-col: ${TEXT_CONTENT_COLOR2};
  --uic-txtcnt-bor: ${NUMBER_BORDER_COLOR2};
  --uic-txtcnt-num-col: ${NUMBER_BACKGROUND_COLOR2};
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
  color: var(--uic-txtcnt-col);
  font-family: monospace;
  background-color: var(--uic-txtcnt-bg);
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
  border-right: 1px solid var(--uic-txtcnt-bor);
  background-color: var(--uic-txtcnt-num-col);
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

.${BLUE_CLASS}
{
  color: ${BLUE_COLOR};
}

.${OFFSET_CLASS}
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
`;
