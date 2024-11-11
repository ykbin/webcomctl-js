import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('ImageContent', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const CONTENT_CLASS = mk.newClassName("Content");
export const BUTT_LEFT_CLASS = mk.newClassName("ButtLeft");
export const BUTT_RIGHT_CLASS = mk.newClassName("ButtRight");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}" draggable="false">
  <div class="${BUTT_LEFT_CLASS}">
    <div></div>
  </div>
  <img class="${CONTENT_CLASS}"/>
  <div class="${BUTT_RIGHT_CLASS}">
    <div></div>
  </div>
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
  background-color: var(--uic-imgcnt-bg);
  box-sizing: border-box;
}

.${ROOT_CLASS} img
{
  height: auto;
  width: auto;
  max-width: calc(100% - 80px);
  max-height: calc(100% - 80px);
  border: 1px solid;
  border-color: #f3f3f3;
  flex-shrink: 0;
  box-sizing: border-box;
}

.${ROOT_CLASS} > div
{
  display: none;
  align-items: center;
  height: 100%;
  width: 100%;
}

.${ROOT_CLASS} > div > div
{
  height: 20px;
  width: 20px;
  background-color: blueviolet;
  flex-shrink: 0;
  overflow: hidden;
}

.${BUTT_LEFT_CLASS}
{
  justify-content: flex-end;
}

.${BUTT_RIGHT_CLASS}
{
  justify-content: flex-start;
}

.${ROOT_CLASS} > div.${BUTT_LEFT_CLASS},
.${ROOT_CLASS} > div.${BUTT_RIGHT_CLASS}
{
  display: flex;
}
`;
