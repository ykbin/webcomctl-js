import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('ImageContent', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const CONTENT_CLASS = mk.newClassName("Content");
export const BUTT_LEFT_CLASS = mk.newClassName("ButtLeft");
export const BUTT_RIGHT_CLASS = mk.newClassName("ButtRight");
export const BUTT_TWO_CLASS = mk.newClassName("ButtTwo");
const PLAY = await mk.loadSvgAsCssUrl('./play.svg');
const PLAY1 = await mk.loadSvgAsCssUrl('./play1.svg');

export const ROOT_HTML = `
<div class="${ROOT_CLASS}" draggable="false">
  <div>
    <div>
      <div></div>
    </div>
  </div>
  <img class="${CONTENT_CLASS}"/>
  <div>
    <div>
      <div></div>
    </div>
  </div>
  <span>
    <div>
      <div>1</div>/<div>21</div>
    </div>
  </span>
</div>
`;

export const CSS = `
:root
{
  --uic-imgcnt-img:  ${PLAY1};
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR};
  --uic-imgcnt-buthov: #bcbcbc;
  --uic-imgcnt-but: #f1f1f1;
  --uic-imgcnt-quantum: #272727;
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-imgcnt-img:  ${PLAY};
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR_DARK};
  --uic-imgcnt-buthov: #3c3b3b;
  --uic-imgcnt-but: #252525;
  --uic-imgcnt-quantum: #b8b4b4;
}

.${ROOT_CLASS}
{
  position: relative;
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
  display: flex;
  justify-content: flex-start;
  height: 40px;
  width: 100%;
  pointer-events: none;
  overflow: hidden;
}


.${ROOT_CLASS} > div > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 0;
  transition: width 0.2s;
  border-radius: 50%;
  flex-shrink: 0;
}

.${BUTT_TWO_CLASS} > div:first-child > div,
.${BUTT_LEFT_CLASS}> div:first-child > div,
.${BUTT_TWO_CLASS} > div + img + div > div,
.${BUTT_RIGHT_CLASS} > div + img + div > div
{
  width: 20px;
  transition: width 0.3s;
}

.${BUTT_TWO_CLASS} > div > div, 
.${BUTT_LEFT_CLASS} > div > div,
.${BUTT_RIGHT_CLASS} > div > div
{
  background-color: var(--uic-imgcnt-but);
}

.${ROOT_CLASS} > div > div:hover
{
  background-color: var(--uic-imgcnt-buthov);
}

.${ROOT_CLASS} > div > div > div
{
  height: 20px;
  width: 20px;
  background-image: var(--uic-imgcnt-img);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.${ROOT_CLASS} > div:first-child > div > div
{
  transform: scaleX(-1);
  margin-right: 2px;
}

.${ROOT_CLASS} > div + img + div > div > div
{
  margin-left: 2px;
}

.${ROOT_CLASS} > div + img + div
{
  justify-content: flex-end;
}

.${BUTT_TWO_CLASS} > div, 
.${BUTT_LEFT_CLASS} > div:first-child,
.${BUTT_RIGHT_CLASS} > div:last-child
{
  pointer-events: auto;
}

.${ROOT_CLASS} > span
{
  justify-content: flex-end;
  height: 0px;
  width: 0px;
}

.${BUTT_TWO_CLASS} > span,
.${BUTT_LEFT_CLASS} > span,
.${BUTT_RIGHT_CLASS} > span
{
  display: flex;
}

.${ROOT_CLASS} > span > div
{
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  height: 20px;
  color: var(--uic-imgcnt-quantum);
}

`;
