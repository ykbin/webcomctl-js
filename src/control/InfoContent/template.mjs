import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('InfoContent', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");

const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';

export const ROOT_HTML = `
  <div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = `

:root
{
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR};
  --menu-bg: white;
  --menu-col: black;
  --menu-title-col: #272626;
  --close-hov: #80808042;
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR_DARK};
  --menu-bg: rgb(23, 23, 26);
  --menu-col: #b8b4b4;
  --menu-title-col: #9b9b9b;
}

.${PORT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${PORT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCROLLBAR_THUMB_COLOR};
  border-radius: 10px;
}

.${PORT_CLASS}::-webkit-scrollbar-track,
.${PORT_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCROLLBAR_TRACK_COLOR};
}

.${PORT_CLASS}
{
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 25px 10px 10px;
  color: #393939;
  font-family: Open Sans, Arial, sans-serif;
  box-sizing: border-box;
  background-color: var(--menu-bg);
  color: var(--menu-col);
  overflow: auto;
}
`;
