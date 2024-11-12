import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('ImageContent', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const CONTENT_CLASS = mk.newClassName("Content");
export const BUTT_LEFT_CLASS = mk.newClassName("ButtLeft");
export const BUTT_RIGHT_CLASS = mk.newClassName("ButtRight");
const PLAY = await mk.loadSvgAsCssUrl('./play.svg');

export const ROOT_HTML = `
<div class="${ROOT_CLASS}" draggable="false">
  <div class="${BUTT_LEFT_CLASS}">
    <div>
      <div></div>
    </div>
  </div>
  <img class="${CONTENT_CLASS}"/>
  <div class="${BUTT_RIGHT_CLASS}">
    <div>
      <div></div>
    </div>
  </div>
</div>
`;

export const CSS = `
:root
{
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR};
  --uic-imgcnt-but: #80808061;
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
  box-sizing: border-box;
  flex-shrink: 0;
}

.${ROOT_CLASS} > div
{
  display: none;
  height: 40px;
  width: 100%;
}

.${ROOT_CLASS} > div > div
{
  display: flex;
  align-items: center;
  height: 100%;
  width: 20px;
  background-color: var(--uic-imgcnt-but);
  border-radius: 5px;
  flex-shrink: 0;
}

.${ROOT_CLASS} > div > div > div
{
  height: 20px;
  width: 20px;
  background-image: ${PLAY};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.${ROOT_CLASS} > div:first-child > div > div
{
  transform: scaleX(-1);
}

.${BUTT_LEFT_CLASS}
{
  justify-content: flex-start;
}

.${BUTT_RIGHT_CLASS}
{
  justify-content: flex-end;
}

.${ROOT_CLASS} > div.${BUTT_LEFT_CLASS},
.${ROOT_CLASS} > div.${BUTT_RIGHT_CLASS}
{
  display: flex;
}
`;
