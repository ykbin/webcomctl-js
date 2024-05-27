import { COMMON_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';
import { representClassNames } from '../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../lib/SVG.mjs';

const WATER_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './water.svg');

export const NAME = 'CntButtBRed';

export const CLASS = representClassNames({
  ROOT: "uic-brbut-root",
  LOAD: "uic-brbut-load",
  LABEL: "uic-brbut-label",
  HEIGHT: "uic-brbut-height",
});

const DEF_COLOR = '#c50000';
const DEF_BORDER_COLOR = DEF_COLOR;
const ACT_COLOR = '#a72f2f';
const ACT_BORDER_COLOR = ACT_COLOR;

export const HTML = `
<div class="${CLASS.ROOT}">
  <div><div class="${CLASS.HEIGHT}"></div></div>
  <label class="${CLASS.LABEL}">Upload</label>
</div>
`;

export const CSS = `
:root
{
  --uic-brbut-hovbg: #f5eaea;
}

[data-theme="dark"]
{
  --uic-brbut-hovbg: #5841414f;
}

.${CLASS.ROOT} > div > div,
.${CLASS.LABEL} > input
{
  display:none;
}

.${CLASS.ROOT},
.${CLASS.LOAD}
{
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 271px;
  height: 60px;
  font-size: 40px;
  box-sizing: content-box;
  overflow: hidden;
}

.${CLASS.ROOT}
{
  color: ${DEF_COLOR};
  border: 3px solid ${DEF_BORDER_COLOR};
}

.${CLASS.ROOT}:hover
{
  background-color: var(--uic-brbut-hovbg);
}

.${CLASS.LOAD}
{
  justify-items: center;
  flex-direction: column-reverse;
  flex-wrap: nowrap;
  justify-content: flex-start;
  border: 3px solid ${ACT_BORDER_COLOR};
  color: ${ACT_COLOR};
  cursor: no-drop;
}

.${CLASS.LOAD} > div
{
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  min-height: 110%;
  min-width: 100%;
}

.${CLASS.LOAD} > div > div
{
  width: 100%;
  background-image: ${WATER_IMG};
  background-repeat: no-repeat;
  background-size: 120%;
}

.${CLASS.LABEL}
{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  cursor: pointer;
  font-family: Open Sans,Arial,sans-serif;
}

.${CLASS.LOAD} .${CLASS.LABEL}
{
  position: relative;
  z-index: 1;
  top: 99%;
  pointer-events: none;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT},
  .${CLASS.LOAD}
  {
    width: 542px;
    height: 120px;
    font-size: 70px;
    border-radius: 20px;
  }
}
`;
