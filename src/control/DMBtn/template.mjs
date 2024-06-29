import { Setting } from 'webnetq-js';
import ControlMaker from '../../lib/ControlMaker.mjs';

import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('DMBtn', import.meta.url);

export const NAME = mk.name;

export const ROOT_CLASS = mk.makeClassName("Root");
export const TOGGLE_CLASS = mk.makeClassName("Toggle");

const MOON_IMG = await mk.loadSvgAsCssUrl('./moon.svg');
const SUN_IMG = await mk.loadSvgAsCssUrl('./sun.svg');

const IMG_VAR = mk.makeVarName("Img");
const BG_VAR = mk.makeVarName("Bg");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <span class="${TOGGLE_CLASS}"></span>
</div>
`;

export const CSS = `
:root
{
  ${IMG_VAR}: ${MOON_IMG};
  ${BG_VAR}: #7b7b7b21;
}

[data-${Setting.DATA_KEY}="${Setting.DARK_VAL}"]
{
  ${IMG_VAR}: ${SUN_IMG};
  ${BG_VAR}: #ffffff21;
}

.${ROOT_CLASS}
{
  display: block;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 1px solid ${HEADER_FONT_COLOR};
  box-sizing: border-box;
}

.${ROOT_CLASS}:hover
{
  background-color: var(${BG_VAR});
}

.${TOGGLE_CLASS}
{
  background-image: var(${IMG_VAR});
  display: block;
  height: 100%;
  width: 100%;
  border: 3px solid transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    width: 60px;
    height: 60px;
  }
}
`;
