import { representClassNames } from '../../lib/CSSHelper.mjs';

import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

export const NAME = 'TextContent';

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

export const CLASS = representClassNames({
  ROOT: "uic-txtcnt-root",
  NUMBERS: "uic-txtcnt-numbers",
  CONTENT: "uic-txtcnt-content",
  OFFSET: "uic-txtcnt-offset",
  BLUE: "uic-txtcnt-blue",
});

export const HTML = `
<div class="${CLASS.ROOT}">
  <ul class="${CLASS.NUMBERS}"></ul>
  <div class="${CLASS.CONTENT}"></div>
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

[data-theme="dark"]
{
  --uic-txtcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR_DARK};
  --uic-txtcnt-col: ${TEXT_CONTENT_COLOR2};
  --uic-txtcnt-bor: ${NUMBER_BORDER_COLOR2};
  --uic-txtcnt-num-col: ${NUMBER_BACKGROUND_COLOR2};
}

.${CLASS.ROOT} ul
{
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}

.${CLASS.ROOT} > div::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${CLASS.ROOT} > div::-webkit-scrollbar-thumb
{
  background-color: ${SCROLLBAR_THUMB_COLOR};
  border-radius: 10px;
}

.${CLASS.ROOT} > div::-webkit-scrollbar-track,
.${CLASS.ROOT} > div::-webkit-scrollbar-corner
{
  background-color: ${SCROLLBAR_TRACK_COLOR};
}

.${CLASS.ROOT} > ul::-webkit-scrollbar
{
  width: 0;
  height: 10px;
}

.${CLASS.ROOT}
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

.${CLASS.ROOT} > *
{
  box-sizing: border-box;
}

.${CLASS.ROOT} > div
{
  height: auto;
  width: 100%;
  padding: 10px 10px 0px 10px;
  overflow-y: scroll;
  overflow-x: scroll;
}

.${CLASS.ROOT} > div > span
{
  white-space: pre;
}

.${CLASS.ROOT} > ul
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

.${CLASS.ROOT} > ul:empty
{
  display: none;
}

.${CLASS.ROOT} > ul > li,
.${CLASS.ROOT} > div > span
{
  display: block;
  height: 20px;
}

.${CLASS.BLUE}
{
  color: ${BLUE_COLOR};
}

.${CLASS.OFFSET}
{
  color: ${OFFSET_COLOR};
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT}
  {
    font-size: 25px;
  }
  .${CLASS.ROOT} > ul > li, 
  .${CLASS.ROOT} > div > span
  {
    height: 30px;
  }
}
`;
