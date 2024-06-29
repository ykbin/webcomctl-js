import { Setting } from 'webnetq-js';
import { representClassNames } from '../../lib/CSSHelper.mjs';
import { UIC_START_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

export const NAME = 'ViewBlock';

export const CLASS = representClassNames({
  ROOT: "uic-viewblk-root",
  PORT: "uic-viewblk-port",
});

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export const CSS = `
root:
{
  --uic-viewblk-rootbg: ${UIC_START_BACKGROUND_COLOR};
}

[data-${Setting.DATA_KEY}="${Setting.DARK_VAL}"]
{
  --uic-viewblk-rootbg: ${UIC_START_BACKGROUND_COLOR_DARK};
}

.${CLASS.ROOT}
{
  display: flex;
  height: 100%;
  padding-top: 3px;
  background-color: var(--uic-viewblk-rootbg);
  overflow: hidden;
  box-sizing: border-box;
}

.${CLASS.ROOT} > div 
{
  min-width: 285px;
  flex-shrink: 0;
  contain: paint;
}

.${CLASS.ROOT} > div:last-child
{
  flex-grow: 1;
  flex-shrink: initial;
}

.${CLASS.ROOT} > div:last-child > div
{
  border: none;
  border-right: none;
}
`;
