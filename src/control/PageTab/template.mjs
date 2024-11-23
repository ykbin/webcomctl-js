import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_FAMALY } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('PageTab', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const TEXT_CLASS = mk.newClassName("Text");
export const CLOSE_CLASS = mk.newClassName("Close");
export const FOCUS_CLASS = mk.newClassName("Focus");
export const LOADING_CLASS = mk.newClassName("Loading");

const CLOSE_IMG = await mk.loadSvgAsCssUrl('./X.svg');

const TAB_WIDTH = '150px';
const HOVX_CLR = '#80808042';
const DEFBRD_CLR = 'transparent';
const FOCBRD_CLR = '#03a8e2f0';

export const ROOT_HTML = `
<s class="${ROOT_CLASS}"></s>
`;

export const ITEM_HTML = `
<div class="${FOCUS_CLASS}" draggable="true">
  <span class="${TEXT_CLASS}"></span>
  <div class="${CLOSE_CLASS}" title="Close"><div></div></div>
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

${DARKMODE_SELECTOR_VALUE}
{
  --uic-pagtab-rootbg: ${UIC_START_BACKGROUND_COLOR_DARK};
  --uic-pagtab-act-bg: #252525;
  --uic-pagtab-hov: #313131;
  --uic-pagtab-col: #8b8b8b;
  --uic-pagtab-bg: #242424e6;
  --uic-pagtab-act-col: #bfbfbf;
  --uic-pagtab-loading: #172031;
}

.${ROOT_CLASS}
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

.${ROOT_CLASS} > *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} > div
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
  border-color: ${DEFBRD_CLR};
  border-bottom: none;
  border-left: none;
  border-right: none;
}

div.${FOCUS_CLASS},
.${ROOT_CLASS} > div.${FOCUS_CLASS}:hover
{
  color: var(--uic-pagtab-act-col);
  border-color: ${FOCBRD_CLR};
  background-color: var(--uic-pagtab-act-bg);
  transition: border-color 0.350s;
  z-index: 2;
}

.${ROOT_CLASS} > div:hover
{
  background-color: var(--uic-pagtab-hov);
}

.${ROOT_CLASS} > div + div
{
  margin-left: 1px;
}

.${ROOT_CLASS} > div > span
{
  height: initial;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${ROOT_CLASS} > div > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: initial;
  height: 17px;
  border-radius: 6px;
  margin: 0 4px;
}

.${ROOT_CLASS} > div > div > div
{
  width: 10px;
  height: 10px;
  background-image: ${CLOSE_IMG};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.${ROOT_CLASS} > div.${LOADING_CLASS},
.${ROOT_CLASS} > div.${LOADING_CLASS}:hover
{
  background-color: var(--uic-pagtab-loading);
}

.${ROOT_CLASS} > div > div:hover
{
  background-color: ${HOVX_CLR};
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    height: 50px;
    font-size: 28px;
  }

  .${ROOT_CLASS} > div
  {
    grid-template-columns: 1fr 40px;
    min-width: 230px;
  }

  .${ROOT_CLASS} > div > div > div
  {
    width: 20px;
    height: 20px;
  }
}
`;
