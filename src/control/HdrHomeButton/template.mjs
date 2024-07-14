import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_SIZE } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_FAMILY } from '../../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';
import { HEADER_BORDER_RADIUS_HOVER } from '../../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER_DARK } from '../../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('HdrHomeButton', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");

const MAIN_IMG = await mk.loadSvgAsCssUrl('./home_default.svg');
const HOVER_IMG = await mk.loadSvgAsCssUrl('./home_light_hover.svg');
const HOVER_IMG_DARK = await mk.loadSvgAsCssUrl('./home_dark_hover.svg');

const BTNBG_VAR = mk.newVarName("BtnBg");
const BTNCOL_VAR = mk.newVarName("BtnCol");
const IMG_VAR = mk.newVarName("Img");

export const ROOT_HTML = `
<a class="${ROOT_CLASS} notranslate" translate="no" href="\${ENV:HOST_URL}" draggable="false">
  <div></div>
  <span>Home</span>
</a>
`;

export const CSS = `
:root
{
  ${BTNBG_VAR}: ${HEADER_BACKGROUND_COLOR};
  ${BTNCOL_VAR}: ${HEADER_COLOR_HOVER};
  ${IMG_VAR}: ${HOVER_IMG};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${BTNBG_VAR}: ${HEADER_BACKGROUND_COLOR_DARK};
  ${BTNCOL_VAR}: ${HEADER_COLOR_HOVER_DARK};
  ${IMG_VAR}: ${HOVER_IMG_DARK};
}

.${ROOT_CLASS}
{
  display: flex;
  width: min-content;
  height: min-content;
  margin: 0px 5px;
  padding-right: 5px;
  color: ${HEADER_FONT_COLOR};
  font-family: ${HEADER_FONT_FAMILY};
  font-size: ${HEADER_FONT_SIZE};
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  box-sizing: border-box;
  flex-shrink: 0;
}

.${ROOT_CLASS}:hover
{
  color: var(${BTNCOL_VAR});
  background-color: var(${BTNBG_VAR});
  border-radius: ${HEADER_BORDER_RADIUS_HOVER};
  transition: background-color 0.2s;
}

.${ROOT_CLASS}:hover > div
{
  background-image: var(${IMG_VAR});
}

.${ROOT_CLASS} > div
{
  width: 40px;
  height: 30px;
  border: 4px solid transparent;
  background-image: ${MAIN_IMG};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  flex-shrink: 0;
  box-sizing: border-box;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS} > div
  {
    width: 60px;
    height: 55px;
  }
  .${ROOT_CLASS} > span
  {
    font-size: 60px;
  }
}
`;
