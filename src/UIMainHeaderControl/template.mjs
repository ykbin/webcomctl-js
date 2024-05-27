import { representClassNames } from '../lib/CSSHelper.mjs';

export const NAME = 'MainHeader';

export const CLASS = representClassNames({
  ROOT: "uic-mhdr-root",
  PORT: "uic-mhdr-port",
});

export const HTML = `
<header class="${CLASS.ROOT} ${CLASS.PORT}" draggable="false"></header>
`;

export const CSS = `
:root
{
  /*light*/
  --uic-mhdr-bg: #f9f9f9;
  --uic-mhdr-bor: #c2c2c2;
  --uic-mhdr-bs1: rgba(0,0,0,0.13);
  --uic-mhdr-bs2: rgba(0,0,0,0.11);
}

[data-theme="dark"]
{
  --uic-mhdr-bg: #101010;
  --uic-mhdr-bor: #5f5f5f8f;
  --uic-mhdr-bs1: rgb(0 0 0);
  --uic-mhdr-bs2: rgb(23 23 26 / 60%);
}

.${CLASS.ROOT}
{
  position: relative;
  display: flex;
  height: 43px;
  padding: 5px 10px;
  border-bottom: 1px solid var(--uic-mhdr-bor);
  box-shadow: 0px 1.6px 3.6px var(--uic-mhdr-bs1), 0px 0px 2.9px var(--uic-mhdr-bs2);
  box-sizing: border-box;
  z-index: 1;
  background-color: var(--uic-mhdr-bg);
  overflow: hidden;
  user-select: none;
  flex-shrink: 0;
}

@media (device-width < 550px)
{
  .${CLASS.ROOT}
  {
    height: 130px;
  }
}
`;
