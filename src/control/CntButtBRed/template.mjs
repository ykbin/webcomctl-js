import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('CntButtBRed', import.meta.url);

const WATER_IMG = await mk.loadSvgAsCssUrl('./water.svg');

export const ROOT_CLASS = mk.newClassName("Root");
export const LOAD_CLASS = mk.newClassName("Load");
export const LABEL_CLASS = mk.newClassName("Label");
export const HEIGHT_CLASS = mk.newClassName("Height");

const HOVBG_VAR = mk.newVarName("Hovbg");

const DEF_COLOR = '#c50000';
const DEF_BORDER_COLOR = DEF_COLOR;
const ACT_COLOR = '#a72f2f';
const ACT_BORDER_COLOR = ACT_COLOR;

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div><div class="${HEIGHT_CLASS}"></div></div>
  <label class="${LABEL_CLASS}">Upload</label>
</div>
`;

export const CSS = `
:root
{
  ${HOVBG_VAR}: #f5eaea;
}

${DARKMODE_SELECTOR_VALUE}
{
  ${HOVBG_VAR}: #5841414f;
}

.${ROOT_CLASS} > div > div,
.${LABEL_CLASS} > input
{
  display:none;
}

.${ROOT_CLASS},
.${LOAD_CLASS}
{
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 271px;
  height: 60px;
  font-size: 40px;
  box-sizing: content-box;
  overflow: hidden;
}

.${ROOT_CLASS}
{
  color: ${DEF_COLOR};
  border: 3px solid ${DEF_BORDER_COLOR};
}

.${ROOT_CLASS}:hover
{
  background-color: var(${HOVBG_VAR});
}

.${LOAD_CLASS}
{
  justify-items: center;
  flex-direction: column-reverse;
  flex-wrap: nowrap;
  justify-content: flex-start;
  border: 3px solid ${ACT_BORDER_COLOR};
  color: ${ACT_COLOR};
  cursor: no-drop;
}

.${LOAD_CLASS} > div
{
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  min-height: 110%;
  min-width: 100%;
}

.${LOAD_CLASS} > div > div
{
  width: 100%;
  background-image: ${WATER_IMG};
  background-repeat: no-repeat;
  background-size: 120%;
}

.${LABEL_CLASS}
{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  cursor: pointer;
  font-family: Open Sans,Arial,sans-serif;
}

.${LOAD_CLASS} .${LABEL_CLASS}
{
  position: relative;
  z-index: 1;
  top: 99%;
  pointer-events: none;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS},
  .${LOAD_CLASS}
  {
    width: 542px;
    height: 120px;
    font-size: 70px;
    border-radius: 20px;
  }
}
`;
