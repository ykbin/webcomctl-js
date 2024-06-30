import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('HdrDbcLogo', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");

const FAVICON1_IMG = await mk.loadSvgAsCssUrl('./favicon1.svg');
const FAVICON2_IMG = await mk.loadSvgAsCssUrl('./favicon2.svg');
const HEADER1_IMG = await mk.loadSvgAsCssUrl('./header1.svg');
const HEADER2_IMG = await mk.loadSvgAsCssUrl('./header2.svg');

const FAVICON_VAR = mk.newVarName("FaviconImg");
const HEADER_VAR = mk.newVarName("HeaderImg");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <h3></h3>
  <h2></h2>
</div>
`;

export const CSS = `
:root
{
  ${FAVICON_VAR}: ${FAVICON1_IMG};
  ${HEADER_VAR}: ${HEADER1_IMG};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${FAVICON_VAR}: ${FAVICON2_IMG};
  ${HEADER_VAR}: ${HEADER2_IMG};
}

.${ROOT_CLASS} h2,
.${ROOT_CLASS} h3
{
  margin: 0px;
  padding: 0px;
  font-size: 1em;
  font-weight: 400;
}

.${ROOT_CLASS}
{
  display: flex;
  height: 33px;
}

.${ROOT_CLASS} > h3
{
  height: 100%;
  width: 93px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: var(${FAVICON_VAR});
  margin-right: 7px;
  flex-shrink: 0;
}

.${ROOT_CLASS} > h2
{
  height: 100%;
  width: 91px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: var(${HEADER_VAR});
  margin-right: 15px;
  flex-shrink: 0;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    height: 130px;
  }
  .${ROOT_CLASS} > h3
  {
    width: 195px;
  }
  .${ROOT_CLASS} > h2
  {
    display: none;
  }
}
`;
