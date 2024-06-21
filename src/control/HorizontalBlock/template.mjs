import { representClassNames } from '../../lib/CSSHelper.mjs';

export const NAME = 'HorizontalBlock';

export const CLASS = representClassNames({
  ROOT: "uic-hrzblk-root",
  PORT: "uic-hrzblk-port",
});

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}">
</div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
`;