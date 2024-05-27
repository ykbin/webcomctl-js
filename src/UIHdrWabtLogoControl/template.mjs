import { representClassNames } from '../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../lib/SVG.mjs';

import { HEADER_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';

const FAVICON1_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './favicon1.svg');
const FAVICON2_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './favicon2.svg');
const HEADER1_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './header1.svg');
const HEADER2_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './header2.svg');

export const NAME = 'HdrWabtLogo';

export const CLASS = representClassNames({
  ROOT: "uic-hdrwabt-root",
});

export const HTML = `
<div class="${CLASS.ROOT}">
  <h3></h3>
  <h2></h2>
</div>
`;

export const CSS = `
:root
{
  --uic-hdrwabt-fimg: ${FAVICON1_IMG};
  --uic-hdrwabt-himg: ${HEADER1_IMG};
}

[data-theme="dark"]
{
  --uic-hdrwabt-fimg: ${FAVICON2_IMG};
  --uic-hdrwabt-himg: ${HEADER2_IMG};
}

.${CLASS.ROOT} h2,
.${CLASS.ROOT} h3
{
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  font-weight: 400;
}

.${CLASS.ROOT} *
{
  box-sizing: border-box;
}

.${CLASS.ROOT}
{
  display: flex;
  height: 33px;
}

.${CLASS.ROOT} > h3
{
  width: 35px;
  background-image: var(--uic-hdrwabt-fimg);
}

.${CLASS.ROOT} > h3
{
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 7px;
  flex-shrink: 0;
}

.${CLASS.ROOT} > h2
{
  width: 77px;
  background-size: 180px;
  background-position-y: center;
  background-position-x: left;
  background-image: var(--uic-hdrwabt-himg);
}

.${CLASS.ROOT} > h2
{
  height: 100%;
  background-repeat: no-repeat;
  margin-right: 15px;
  flex-shrink: 0;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT}
  {
    height: 130px;
  }
  .${CLASS.ROOT} > h2
  {
    width: 170px;
    background-size: 425px;
  }
  .${CLASS.ROOT} > h3
  {
    display: none;
  }
}
`;
