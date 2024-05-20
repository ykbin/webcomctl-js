import { HEADER_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';
import { HEADER_FONT_SIZE } from '../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../lib/WickedTheme.mjs';
import { HEADER_FONT_FAMILY } from '../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR } from '../lib/WickedTheme.mjs';
import { HEADER_BACKGROUND_COLOR_DARK } from '../lib/WickedTheme.mjs';
import { HEADER_BORDER_RADIUS_HOVER } from '../lib/WickedTheme.mjs';
import { HEADER_COLOR_HOVER } from '../lib/WickedTheme.mjs';

export const NAME = 'HdrHomeButton';

const IMAGE_DEFAULT = 'url(home_default.svg)';
const IMAGE_HOVER = 'url(home_hover.svg)';

export const CLASS = {
  ROOT: "uic-hdrhm-root",
};

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
}

[data-theme="dark"]
{
  --uic-hdrhm-btnbg: ${HEADER_BACKGROUND_COLOR_DARK};
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
  color: ${HEADER_COLOR_HOVER};
  background-color: var(--uic-hdrhm-btnbg);
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
  border: 4px solid transparent;
  background-image: ${IMAGE_DEFAULT};
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
