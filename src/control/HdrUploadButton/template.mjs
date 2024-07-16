import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_SIZE } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_FAMILY } from '../../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { HEADER_BORDER_RADIUS_HOVER } from '../../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER_DARK } from '../../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('HdrUploadButton', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const HIDDEN_CLASS = mk.newClassName("Hidden");

const MAIN_IMG = await mk.loadSvgAsCssUrl('./search_default.svg');
const HOVER_IMG = await mk.loadSvgAsCssUrl('./search_light_hover.svg');
const HOVER_IMG_DARK = await mk.loadSvgAsCssUrl('./search_dark_hover.svg');

export const ROOT_HTML = `
<label class="${ROOT_CLASS} ${HIDDEN_CLASS} notranslate" translate="no" draggable="false">
  <div></div>
  <span>Upload</span>
  <!--<input type="file">-->
</label>
`;

export const CSS = `
:root
{
  --uic-hdrupl-btnbg: ${HEADER_BACKGROUND_COLOR};
  --uic-hdrupl-btncol: ${HEADER_COLOR_HOVER};
  --uic-hdrupl-img: ${HOVER_IMG};
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-hdrupl-btncol: ${HEADER_COLOR_HOVER_DARK};
  --uic-hdrupl-img: ${HOVER_IMG_DARK};
}

.${ROOT_CLASS} > input
{
  display: none;
}

.${HIDDEN_CLASS}
{
  visibility: hidden;
}

.${ROOT_CLASS}
{
  display: flex;
  width: min-content;
  height: min-content;
  margin: 0px 5px;
  padding-right: 5px;
  color: ${HEADER_FONT_COLOR};
  font-size: ${HEADER_FONT_SIZE};
  font-family: ${HEADER_FONT_FAMILY};
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
}

.${ROOT_CLASS} > div
{
  display: block;
  width: 40px;
  height: 30px;
  border: 4px solid transparent;
  background-image: ${MAIN_IMG};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  flex-shrink: 0;
  box-sizing: border-box;
}

.${ROOT_CLASS}:hover 
{
  color: var(--uic-hdrupl-btncol);
  background-color: var(--uic-hdrupl-btnbg);
  border-radius: ${HEADER_BORDER_RADIUS_HOVER};
  transition: background-color 0.2s;
}

.${ROOT_CLASS}:hover div
{
  background-image: var(--uic-hdrupl-img);
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS} > div
  {
    width: 60px;
    height: 55px;
  }
  .${ROOT_CLASS}
  {
    font-size: 60px;
  }
}
`;
