import { representClassNames } from '../../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../../lib/SVG.mjs';

import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const MAIN_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './file-upload.svg');
const BGROUND_COLOR = '#1e1e1e91';

export const NAME = 'Loading';

export const CLASS = representClassNames({
  ROOT: 'uic-loading-root',
  SHOW: 'uic-loading-show',
});

export const HTML = `
<div class="${CLASS.ROOT}">
  <div></div>
</div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  display: none;
}

.${CLASS.SHOW}
{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 555px;
  z-index: 3;
  background-color: ${BGROUND_COLOR};
}

.${CLASS.SHOW} > div
{
  width: 100%;
  height: 100%;
  max-width: 160px;
  min-width: auto;
  background-image: ${MAIN_IMG};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.SHOW} > div
  {
    width: 320px;
    height: 320px;
  }
}
`;
