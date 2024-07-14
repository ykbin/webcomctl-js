import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('ImageContent', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const CONTENT_CLASS = mk.newClassName("Content");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}" draggable="false">
  <img class="${CONTENT_CLASS}"/>
</div>
`;

export const CSS = `
:root
{
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR};
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR_DARK};
}

.${ROOT_CLASS}
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
  padding: 40px;
  box-sizing: border-box;
  background-color: var(--uic-imgcnt-bg);
}

.${ROOT_CLASS} img
{
  height: auto;
  width: auto;
  max-width: calc(100% - 80px);
  max-height: calc(100% - 80px);
  border: 1px solid;
  border-color: #f3f3f3;
  box-sizing: border-box;
}
`;
