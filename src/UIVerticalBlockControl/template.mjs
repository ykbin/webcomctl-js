import { representClassNames } from '../lib/CSSHelper.mjs';

export const NAME = 'VerticalBlock';

export const CLASS = representClassNames({
  ROOT: "uic-vrtblk-root",
  PORT: "uic-vrtblk-port",
});

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 670px;
  overflow: hidden;
}
`;