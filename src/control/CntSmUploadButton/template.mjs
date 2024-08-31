import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('CntSmUploadButton', import.meta.url);

export const ROOT_CLASS = mk.newClassName("ROOT_CLASS");
export const LOAD_CLASS = mk.newClassName("LOAD_CLASS");

const DBG_VAR = mk.newCSSVariable("DBG_VAR", [ '#ffffff', '#472f2f42' ]);
const HBG_VAR = mk.newCSSVariable("HBG_VAR", [ '#f5eaea', '#ba8f8f29' ]);

const LOAD_IMG = await mk.loadSvgAsCssUrl('./load.svg');

const COLOR = '#c50000';
const BORDER_COLOR = COLOR;
const LD_COLOR = '#c5000078';
const LD_BORDER_COLOR = LD_COLOR;

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <span></span>
  <label class="notranslate" translate="no">Upload</label>
</div>
`;

export const CSS = `
:root
{
  ${DBG_VAR.toString(0)};
  ${HBG_VAR.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${DBG_VAR.toString(1)};
  ${HBG_VAR.toString(1)};
}

.${ROOT_CLASS} input
{
   display: none;
}

.${ROOT_CLASS}
{
  display: flex;
  align-items: center;
  width: 140px;
  height: 32px;
  border-radius: 5px;
  font-size: 24px;
  box-sizing: content-box;
  float: right;
}

.${ROOT_CLASS}
{
  background-color: ${DBG_VAR.asVar()};
  color: ${COLOR};
  border: 2px solid ${BORDER_COLOR};
  cursor: pointer;
}

.${ROOT_CLASS}:hover 
{
  background-color: ${HBG_VAR.asVar()};
}

.${ROOT_CLASS} > label
{
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  user-select: none;
  flex-shrink: 0;
}

.${LOAD_CLASS}
{
  background-color: ${HBG_VAR.asVar()};
  color: ${LD_COLOR};
  border: 2px solid ${LD_BORDER_COLOR};
  cursor: no-drop;
  pointer-events: none;
}

.${LOAD_CLASS} > span
{
  position: relative;
  left: 39%;
  display: block;
  width: 33px;
  height: 100%;
  background-image: ${LOAD_IMG};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  pointer-events: none;
  flex-shrink: 0;
}

.${LOAD_CLASS} label
{
  position: relative;
  right: 33px;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    width: 280px;
    height: 64px;
    border-radius: 10px;
    font-size: 48px;
    margin-top: 10px;
  }
  .${LOAD_CLASS} span
  {
    width: 66px;
  }
  .${LOAD_CLASS} label
  {
    right: 66px;
  }
}
`;
