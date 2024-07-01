import { representClassNames } from '../../lib/CSSHelper.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

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

${DARKMODE_SELECTOR_VALUE}
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
  z-index: 1;
  border-bottom: 1px solid var(--uic-mhdr-bor);
  box-shadow: 0px 1.6px 3.6px var(--uic-mhdr-bs1), 0px 0px 2.9px var(--uic-mhdr-bs2);
  background-color: var(--uic-mhdr-bg);
  overflow: hidden;
  user-select: none;
  box-sizing: border-box;
  flex-shrink: 0;
  container-name: header;
  container-type: inline-size;
}

@container header (width < 550px)
{
  .${CLASS.ROOT} > *:nth-child(1)
  {
    display: none;
  }
}

@media (device-width < 550px)
{
  .${CLASS.ROOT}
  {
    height: 130px;
  }
}
`;
