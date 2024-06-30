import { representClassNames } from '../../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../../lib/SVG.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_SIZE } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_FAMILY } from '../../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';
import { HEADER_BORDER_RADIUS_HOVER } from '../../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER_DARK } from '../../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER } from '../../lib/WickedTheme.mjs';

const MAIN_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './home_default.svg');
const HOVER_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './home_light_hover.svg');
const HOVER_IMG_DARK = await loadSvgAsCssUrlAsync(import.meta.url, './home_dark_hover.svg');

export const NAME = 'HdrHomeButton';

export const CLASS = representClassNames({
  ROOT: "uic-hdrhm-root",
});

export const HTML = `
<a class="${CLASS.ROOT} notranslate" translate="no" href="\${ENV:HOST_URL}" draggable="false">
  <div></div>
  <span>Home</span>
</a>
`;

export const CSS = `
:root
{
  --uic-hdrhm-btnbg: ${HEADER_BACKGROUND_COLOR};
  --uic-hdrhm-btncol: ${HEADER_COLOR_HOVER};
  --uic-hdrhm-img: ${HOVER_IMG};
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-hdrhm-btnbg: ${HEADER_BACKGROUND_COLOR_DARK};
  --uic-hdrhm-btncol: ${HEADER_COLOR_HOVER_DARK};
  --uic-hdrhm-img: ${HOVER_IMG_DARK};
}

.${CLASS.ROOT}
{
  display: flex;
  width: min-content;
  height: min-content;
  margin: 0px 5px;
  padding-right: 5px;
  color: ${HEADER_FONT_COLOR};
  font-family: ${HEADER_FONT_FAMILY};
  font-size: ${HEADER_FONT_SIZE};
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  box-sizing: border-box;
  flex-shrink: 0;
}

.${CLASS.ROOT}:hover
{
  color: var(--uic-hdrhm-btncol);
  background-color: var(--uic-hdrhm-btnbg);
  border-radius: ${HEADER_BORDER_RADIUS_HOVER};
  transition: background-color 0.2s;
}

.${CLASS.ROOT}:hover > div
{
  background-image: var(--uic-hdrhm-img);
}

.${CLASS.ROOT} > div
{
  width: 40px;
  height: 30px;
  border: 4px solid transparent;
  background-image: ${MAIN_IMG};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  flex-shrink: 0;
  box-sizing: border-box;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT} > div
  {
    width: 60px;
    height: 55px;
  }
  .${CLASS.ROOT} > span
  {
    font-size: 60px;
  }
}
`;
