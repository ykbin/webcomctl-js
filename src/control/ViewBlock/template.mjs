import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_START_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('ViewBlock', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = `
root:
{
  --uic-viewblk-rootbg: ${UIC_START_BACKGROUND_COLOR};
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-viewblk-rootbg: ${UIC_START_BACKGROUND_COLOR_DARK};
}

.${ROOT_CLASS}
{
  display: flex;
  height: 100%;
  background-color: var(--uic-viewblk-rootbg);
  overflow: hidden;
  box-sizing: border-box;
}

.${ROOT_CLASS} > div 
{
  min-width: 285px;
  flex-shrink: 0;
  overflow: hidden;
}

.${ROOT_CLASS} > div:last-child
{
  flex-grow: 1;
  flex-shrink: initial;
}

.${ROOT_CLASS} > div:last-child > div
{
  border: none;
  border-right: none;
}
`;
