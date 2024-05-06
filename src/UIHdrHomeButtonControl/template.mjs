import { HEADER_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';
import { HEADER_FONT_SIZE } from '../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../lib/WickedTheme.mjs';
import { HEADER_FONT_FAMILY } from '../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR } from '../lib/WickedTheme.mjs';
import { HEADER_BORDER_RADIUS_HOVER } from '../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER } from '../lib/WickedTheme.mjs';

export const NAME = 'HdrHomeButton';

const IMAGE_DEFAULT = 'url(home_default.svg)';
const IMAGE_HOVER = 'url(home_hover.svg)';

export const CLASS = {
  ROOT: "uic-hdrhm-root",
};

export const HTML = `
<a class="${CLASS.ROOT}" href="\${ENV:HOST_URL}" draggable="false">
  <div></div>
  <span class="notranslate" translate="no">Home</span>
</a>
`;

export const CSS = `
.${CLASS.ROOT}
{
  display: flex;
  align-items: center;
  width: min-content;
  height: min-content;
  color: ${HEADER_FONT_COLOR};
  cursor: pointer;
  flex-shrink: 0;
  user-select: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: ${HEADER_FONT_FAMILY};
}

.${CLASS.ROOT}:hover
{
  color: ${HEADER_COLOR_HOVER};
  background-color: ${HEADER_BACKGROUND_COLOR};
  border-radius: ${HEADER_BORDER_RADIUS_HOVER};
  transition: background-color 0.2s;
}

.${CLASS.ROOT}:hover > div
{
  background-image: ${IMAGE_HOVER};
}

.${CLASS.ROOT} > div
{
  width: 40px;
  height: 30px;
  background-image: ${IMAGE_DEFAULT};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: 4px solid transparent;
  flex-shrink: 0;
  box-sizing: border-box;
}

.${CLASS.ROOT} > span
{
  display: flex;
  align-items: center;
  font-size: ${HEADER_FONT_SIZE};
  margin: 0px 7px 0px 5px;
  flex-shrink: 0;
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
