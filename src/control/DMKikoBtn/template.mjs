import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('DMKikoBtn', import.meta.url);

const MOON_IMG = await mk.loadSvgAsCssUrl('./moon.svg');
const SUN_IMG = await mk.loadSvgAsCssUrl('./sun.svg');

export const ROOT_CLASS = mk.newClassName("Root");

const IMG_VAR = mk.newVarName("Img");

const BORDER_COLOR = '#6a6a6a';
const IMAGE_BORDER_COLOR = 'transparent';

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div></div>
</div>
`;

export const CSS = `
:root 
{
  ${IMG_VAR}: ${MOON_IMG};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${IMG_VAR}: ${SUN_IMG};
}

.${ROOT_CLASS}
{
  width: 50px;
  height: 50px;
  border: 2px solid ${BORDER_COLOR};
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.${ROOT_CLASS} > div
{
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 4px solid ${IMAGE_BORDER_COLOR};
  background-image: var(${IMG_VAR});
}
`;
