import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('DMBtn', import.meta.url);

const ROOT_CLASS = mk.newClassName("ROOT_CLASS");
const TOGGLE_CLASS = mk.newClassName("TOGGLE_CLASS");

const MOON_IMG = await mk.loadSvgAsCssUrl('./moon.svg');
const SUN_IMG = await mk.loadSvgAsCssUrl('./sun.svg');

const IMG_VAR = mk.newCSSVariable("IMG_VAR", [ MOON_IMG, SUN_IMG ]);
const BG_VAR = mk.newCSSVariable("BG_VAR", [ '#7b7b7b21', '#ffffff21' ]);

mk.newHTML('ROOT_HTML', `
<div class="${ROOT_CLASS}">
  <span class="${TOGGLE_CLASS}"></span>
</div>
`);

mk.newCSS('CSS', `
:root
{
  ${IMG_VAR.toString(0)};
  ${BG_VAR.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${IMG_VAR.toString(1)};
  ${BG_VAR.toString(1)};
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
  background-color: ${BG_VAR.asVar()};
}

.${TOGGLE_CLASS}
{
  background-image: ${IMG_VAR.asVar()};
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
`);

export function buildComponent()
{
  return mk.buildComponent();
}
