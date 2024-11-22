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
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR};
  --uic-imgcnt-buthov: #6c6c6c;
  --uic-imgcnt-but: #bcbcbc;
  --uic-imgcnt-quantum: #272727;
}

${DARKMODE_SELECTOR_VALUE}
{
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
  visibility: hidden;
  pointer-events: none;
  overflow: hidden;
}

.${ROOT_CLASS} > div > div
{
  display: flex;
  align-items: center;
  height: 100%;
  width: 20px;
  border-radius: 5px;
  flex-shrink: 0;
  animation-fill-mode: both;
  animation-duration: 300ms;
  animation-iteration-count: 1;
}

.${ROOT_CLASS} > div:first-child > div
{
  animation-name: left_get_out;
}

.${ROOT_CLASS} > div:last-child > div
{
  animation-name: right_get_out;
}

.${BUTT_TWO_CLASS} > div:first-child > div, 
.${BUTT_LEFT_CLASS} > div:first-child > div
{
  animation-name: left_come_out;
}

.${BUTT_TWO_CLASS} > div:last-child > div, 
.${BUTT_RIGHT_CLASS} > div:last-child > div
{
  animation-name: right_come_out;
}

@keyframes left_come_out
{
  0%
  {
    transform: translateX(-20px);
  }
  50%
  {
    transform: translateX(-10px);
  }
  100%
  {
    transform: translateX(0);
  }
}

@keyframes left_get_out
{
  0%
  {
    transform: translateX(0);
  }
  50%
  {
    transform: translateX(-10px);
  }
  100%
  {
    transform: translateX(-20px);
  }
}

@keyframes right_come_out
{
  0%
  {
    transform: translateX(20px);
  }
  50%
  {
    transform: translateX(10px);
  }
  100%
  {
    transform: translateX(0);
  }
}

@keyframes right_get_out
{
  0%
  {
    transform: translateX(0);
  }
  50%
  {
    transform: translateX(10px);
  }
  100%
  {
    transform: translateX(20px);
  }
}

.${BUTT_TWO_CLASS} > div > div, 
.${BUTT_LEFT_CLASS} > div > div,
.${BUTT_RIGHT_CLASS} > div > div
{
  background-color: var(--uic-imgcnt-but);
  transition: background-color 1s;
}

.${ROOT_CLASS} > div > div:hover
{
  background-color: var(--uic-imgcnt-buthov);
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

.${ROOT_CLASS} > div + img + div
{
  justify-content: flex-end;
}

.${BUTT_TWO_CLASS} > div, 
.${BUTT_LEFT_CLASS} > div:first-child,
.${BUTT_RIGHT_CLASS} > div:last-child
{
  visibility: visible;
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
  animation-name: get_out;
  animation-fill-mode: both;
  animation-duration: 300ms;
  animation-iteration-count: 1;
}

.${BUTT_TWO_CLASS} > span > div,
.${BUTT_LEFT_CLASS} > span > div,
.${BUTT_RIGHT_CLASS} > span > div
{
  animation-name: come_out;
}

@keyframes come_out
{
  0%
  {
    transform: translateY(-20px);
  }
  50%
  {
    transform: translateY(-10px);
  }
  100%
  {
    transform: translateY(0);
  }
}

@keyframes get_out
{
  0%
  {
    transform: translateY(0);
  }
  50%
  {
    transform: translateY(-10px);
  }
  100%
  {
    transform: translateY(-20px);
  }
}
`;
