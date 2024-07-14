import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_START_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('VerticalBlock', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = `
root:
{
  --uic-vrtblk-rootbg: ${UIC_START_BACKGROUND_COLOR};
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-vrtblk-rootbg: ${UIC_START_BACKGROUND_COLOR_DARK};
}

.${ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 670px;
  background-color: var(--uic-vrtblk-rootbg);
  overflow: hidden;
}
`;
