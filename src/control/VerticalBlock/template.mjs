import { Setting } from 'webnetq-js';
import { representClassNames } from '../../lib/CSSHelper.mjs';
import { UIC_START_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

export const NAME = 'VerticalBlock';

export const CLASS = representClassNames({
  ROOT: "uic-vrtblk-root",
  PORT: "uic-vrtblk-port",
});

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export const CSS = `
root:
{
  --uic-vrtblk-rootbg: ${UIC_START_BACKGROUND_COLOR};
}

[data-${Setting.DATA_KEY}="${Setting.DARK_VAL}"]
{
  --uic-vrtblk-rootbg: ${UIC_START_BACKGROUND_COLOR_DARK};
}

.${CLASS.ROOT}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 670px;
  background-color: var(--uic-vrtblk-rootbg);
  overflow: hidden;
}
`;
