import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('DMBtn2', import.meta.url);

const MOON_IMG = await mk.loadSvgAsCssUrl('./moon.svg');
const SUN_IMG = await mk.loadSvgAsCssUrl('./sun.svg');

export const ROOT_CLASS = mk.newClassName("Root");

const IMG_VAR = mk.newVarName("Img");
const BGHOV_VAR = mk.newVarName("BgHov");
const BSHOV_VAR = mk.newVarName("BsHov");
const BOR_VAR = mk.newVarName("Bor");
const BS_VAR = mk.newVarName("Bs");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}"></div>
`;

export const CSS = `
:root
{
  ${IMG_VAR}: ${MOON_IMG};
  ${BGHOV_VAR}: #e4e6e8;
  ${BSHOV_VAR}: #ffffff;
  ${BOR_VAR}: #7c7c7c;
  ${BS_VAR}: #c8c8c8;
}

${DARKMODE_SELECTOR_VALUE}
{
  ${IMG_VAR}: ${SUN_IMG};
  ${BGHOV_VAR}: #6a6a6a;
  ${BSHOV_VAR}: #000000;
  ${BOR_VAR}: #616161;
  ${BS_VAR}: #373737;
}

.${ROOT_CLASS}
{
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid var(${BOR_VAR});
  background-image: var(${IMG_VAR});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0px 0px 3px 0px var(${BS_VAR});
}

.${ROOT_CLASS}:hover
{
  background-color: var(${BGHOV_VAR});
  box-shadow: inset 0px 0px 6px 0px var(${BSHOV_VAR});
}
`;
