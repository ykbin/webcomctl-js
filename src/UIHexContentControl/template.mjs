import { representClassNames } from '../lib/CSSHelper.mjs';

import { COMMON_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../lib/WickedTheme.mjs';

export const NAME = 'HexContent';

const BLUE_COLOR = '#0000ff';
const OFFSET_COLOR = 'rgb(197, 6, 11)';
const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';

export const CLASS = representClassNames({
  ROOT: "uic-hexcnt-root",
  NUMBERS: "uic-hexcnt-numbers",
  CONTENT: "uic-hexcnt-content",
  OFFSET: "uic-hexcnt-offset",
  BLUE: "uic-hexcnt-blue",
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
  --uic-hexcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR};
  --uic-hexcnt-col: black;
  --uic-hexcnt-bor: #e6e6e6;
}

[data-theme="dark"]
{
  --uic-hexcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR_DARK};
  --uic-hexcnt-col: #ffffff9e;
  --uic-hexcnt-bor: #5f5f5f4a;
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
  color: var(--uic-hexcnt-col);
  font-family: monospace;
  background-color: var(--uic-hexcnt-bg);
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
  flex-shrink: 0;
  height: auto;
  min-width: 55px;
  padding: 10px 5px 10px 5px;
  text-align: center;
  border-right: 1px solid var(--uic-hexcnt-bor);
  overflow-y: auto;
  overflow-x: scroll;
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
