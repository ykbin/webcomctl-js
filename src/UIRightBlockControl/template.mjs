import { representClassNames } from '../lib/CSSHelper.mjs';

export const NAME = 'RightBlock';

export const CLASS = representClassNames({
  ROOT: "uic-rhtblk-root",
  PORT: "uic-rhtblk-port",
});

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
}
`;
