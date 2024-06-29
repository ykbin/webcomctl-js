import { Setting } from 'webnetq-js';
import { representClassNames } from '../../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../../lib/SVG.mjs';

import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_FAMALY } from '../../lib/WickedTheme.mjs';
import { UIC_BLUE_SQUARE_BACKGROUND } from '../../lib/WickedTheme.mjs';
import { UIC_BLUE_SQUARE_BORDER } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

export const NAME = 'PageTab';

const CLOSE_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './X.svg');
const TAB_WIDTH = '150px';

export const CLASS = representClassNames({
  ROOT: "uic-pagtab-root",
  TEXT: "uic-pagtab-name",
  CLOSE: "uic-pagtab-close",
  FOCUS: "uic-pagtab-active",
  LOADING: "uic-pagtab-loading",
});

const VAR = {
  HOVXCLR: '#80808042',
  DEFBRDCLR: 'transparent',
  FOCBRDCLR: '#03a8e2f0',
}

export const HTML = `
<s class="${CLASS.ROOT}"></s>
`;

export const ITEM_HTML = `
<div class="${CLASS.FOCUS}" draggable="true">
  <span class="${CLASS.TEXT}"></span>
  <div class="${CLASS.CLOSE}" title="Close"><div></div></div>
</div>
`;

export const CSS = `
:root
{
  --uic-pagtab-rootbg: ${UIC_START_BACKGROUND_COLOR};
  --uic-pagtab-act-bg: #f3f3f3;
  --uic-pagtab-hov: #dfdfdf;
  --uic-pagtab-col: #838282;
  --uic-pagtab-bg: #ebebeb;
  --uic-pagtab-act-col: black;
  --uic-pagtab-loading: #949eb0;
}

[data-${Setting.DATA_KEY}="${Setting.DARK_VAL}"]
{
  --uic-pagtab-rootbg: ${UIC_START_BACKGROUND_COLOR_DARK};
  --uic-pagtab-act-bg: #252525;
  --uic-pagtab-hov: #313131;
  --uic-pagtab-col: #8b8b8b;
  --uic-pagtab-bg: #242424e6;
  --uic-pagtab-act-col: #bfbfbf;
  --uic-pagtab-loading: #172031;
}

.${CLASS.ROOT}
{
  display: flex;
  width: 100%;
  height: 30px;
  padding: 0px 10px;
  font-size: 13px;
  letter-spacing: 2px;
  background-color: var(--uic-pagtab-rootbg);
  flex-shrink: 0;
  user-select: none;
  font-family: ${TOOLBAR_FONT_FAMALY};
  text-decoration: none;
  box-sizing: border-box;
}

.${CLASS.ROOT} > *
{
  box-sizing: border-box;
}

.${CLASS.ROOT} > div
{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 25px;
  align-items: center;
  padding-left: 10px;
  height: inherit;
  width: ${TAB_WIDTH};
  max-width: ${TAB_WIDTH};
  background-color: var(--uic-pagtab-bg);
  color: var(--uic-pagtab-col);
  border-top-width: 1px;
  border-style: solid;
  border-color: ${VAR.DEFBRDCLR};
  border-bottom: none;
  border-left: none;
  border-right: none;
}

div.${CLASS.FOCUS},
.${CLASS.ROOT} > div.${CLASS.FOCUS}:hover
{
  color: var(--uic-pagtab-act-col);
  border-color: ${VAR.FOCBRDCLR};
  background-color: var(--uic-pagtab-act-bg);
  transition: border-color 0.350s;
  z-index: 2;
}

.${CLASS.ROOT} > div:hover
{
  background-color: var(--uic-pagtab-hov);
}

.${CLASS.ROOT} > div + div
{
  margin-left: 1px;
}

.${CLASS.ROOT} > div > span
{
  height: initial;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${CLASS.ROOT} > div > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: initial;
  height: 17px;
  border-radius: 6px;
  margin: 0 4px;
}

.${CLASS.ROOT} > div > div > div
{
  width: 10px;
  height: 10px;
  background-image: ${CLOSE_IMG};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.${CLASS.ROOT} > div.${CLASS.LOADING}
{
  background-color: var(--uic-pagtab-loading);
}

.${CLASS.DISABLE}
{
  display: block;
  height: inherit;
  width: inherit;
  border: 1px solid ${UIC_BLUE_SQUARE_BORDER};
  background-color: ${UIC_BLUE_SQUARE_BACKGROUND};
  box-sizing: border-box;
}

.${CLASS.ROOT} > div > div:hover
{
  background-color: ${VAR.HOVXCLR};
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT}
  {
    height: 50px;
    font-size: 28px;
  }

  .${CLASS.ROOT} > div
  {
    grid-template-columns: 1fr 40px;
    min-width: 230px;
  }

  .${CLASS.ROOT} > div > div > div
  {
    width: 20px;
    height: 20px;
  }
}
`;
