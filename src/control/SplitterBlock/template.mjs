import { representClassNames } from '../../lib/CSSHelper.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

export const NAME = 'SplitterBlock';

export const CLASS = representClassNames({
  ROOT:   'uic-spltblk-root',
  PORT:   'uic-spltblk-port',
  NONE:   'uic-spltblk-none',
  RIGHT:  'uic-spltblk-right',
  LEFT:   'uic-spltblk-left',
  TOP:    'uic-spltblk-top',
  BOTTOM: 'uic-spltblk-bottom',
});

export const HTML = `
<div class="${CLASS.ROOT}">
  <div class="${CLASS.PORT}"></div>
  <span class="${CLASS.NONE}"><div></div></span>
</div>
`;

export const CSS = `
:root
{
  --uic-spltblk-bor: #e6e6e6;
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-spltblk-bor: #3c3c3c;
}

.${CLASS.ROOT}
{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid var(--uic-spltblk-borde);
}

.${CLASS.PORT}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.${CLASS.ROOT} > span
{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
}

.${CLASS.ROOT} > span > div
{
  flex-shrink: 0;
  background-color: blue;
}

.${CLASS.BOTTOM} > div,
.${CLASS.TOP} > div
{
  width: 100%;
  height: 5px;
}

.${CLASS.TOP}
{
  top: 0;
  width: 100%;
  height: 0;
}

.${CLASS.BOTTOM}
{
  bottom: 0;
  width: 100%;
  height: 0;
}

.${CLASS.RIGHT}
{
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
}

.${CLASS.LEFT} > div,
.${CLASS.RIGHT} > div
{
  width: 5px;
  height: 100%;
}

.${CLASS.LEFT}
{
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
}
`;
