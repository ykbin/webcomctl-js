import { representClassNames } from '../../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../../lib/SVG.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';
import { HEADER_FONT_COLOR } from '../../lib/WickedTheme.mjs';

const MOON_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './moon.svg');
const SUN_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './sun.svg');

export const NAME = 'DMBtn';

export const CLASS = representClassNames({
  ROOT: "uic-dmbtn-root",
  TOGGLE: "uic-dmbtn-toggle",
});

export const HTML = `
<div class="${CLASS.ROOT}">
  <span class="${CLASS.TOGGLE}"></span>
</div>
`;

export const CSS = `
:root
{
  --uic-dmbtn-img: ${MOON_IMG};
  --uic-dmbtn-bg: #7b7b7b21;
}

[data-theme="dark"]
{
  --uic-dmbtn-img: ${SUN_IMG};
  --uic-dmbtn-bg: #ffffff21;
}

.${CLASS.ROOT}
{
  display: block;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 1px solid ${HEADER_FONT_COLOR};
  box-sizing: border-box;
}

.${CLASS.ROOT}:hover
{
  background-color: var(--uic-dmbtn-bg);
}

.${CLASS.TOGGLE}
{
  background-image: var(--uic-dmbtn-img);
  display: block;
  height: 100%;
  width: 100%;
  border: 3px solid transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT}
  {
    width: 60px;
    height: 60px;
  }
}
`;
