import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('MainHeader', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");

export const ROOT_HTML = `
<header class="${ROOT_CLASS} ${PORT_CLASS}" draggable="false"></header>
`;

export const CSS = `
:root
{
  --uic-mhdr-bg: #f9f9f9;
  --uic-mhdr-bor: #c2c2c2;
  --uic-mhdr-bs1: rgba(0,0,0,0.13);
  --uic-mhdr-bs2: rgba(0,0,0,0.11);
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-mhdr-bg: #101010;
  --uic-mhdr-bor: #5f5f5f8f;
  --uic-mhdr-bs1: rgb(0 0 0);
  --uic-mhdr-bs2: rgb(23 23 26 / 60%);
}

.${ROOT_CLASS}
{
  position: relative;
  display: flex;
  height: 43px;
  padding: 5px 10px;
  z-index: 1;
  border-bottom: 1px solid var(--uic-mhdr-bor);
  box-shadow: 0px 1.6px 3.6px var(--uic-mhdr-bs1), 0px 0px 2.9px var(--uic-mhdr-bs2);
  background-color: var(--uic-mhdr-bg);
  overflow: hidden;
  user-select: none;
  box-sizing: border-box;
  flex-shrink: 0;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    height: 130px;
  }
}
`;
