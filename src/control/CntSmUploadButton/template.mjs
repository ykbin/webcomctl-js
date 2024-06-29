import { Setting } from 'webnetq-js';
import ControlMaker from '../../lib/ControlMaker.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const maker = new ControlMaker('CntSmUploadButton', import.meta.url);

const LOAD_IMG = await maker.loadSvgAsCssUrl('./load.svg');

export const NAME = maker.name;

export const ROOT_CLASS = maker.makeClassName("Root");
export const LOAD_CLASS = maker.makeClassName("Load");

const DBG_VAR = maker.makeVarName("Dbg");
const HBG_VAR = maker.makeVarName("Hbg");

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
  ${DBG_VAR}: #ffffff;
  ${HBG_VAR}: #f5eaea;
}

[data-${Setting.DATA_KEY}="${Setting.DARK_VAL}"]
{
  ${DBG_VAR}: #472f2f42;
  ${HBG_VAR}: #ba8f8f29;
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
  background-color: var(${DBG_VAR});
  color: ${COLOR};
  border: 2px solid ${BORDER_COLOR};
  cursor: pointer;
}

.${ROOT_CLASS}:hover 
{
  background-color: ${HBG_VAR};
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
  background-color: ${HBG_VAR};
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
