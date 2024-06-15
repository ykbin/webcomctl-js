import { representClassNames } from '../../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../../lib/SVG.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const FAVICON1_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './favicon1.svg');
const FAVICON2_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './favicon2.svg');
const HEADER1_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './header1.svg');
const HEADER2_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './header2.svg');

export const NAME = 'HdrCntLogo';

export const CLASS = representClassNames({
  ROOT: "uic-hdrcnt-root",
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
  --uic-hdrcnt-fimg: ${FAVICON1_IMG};
  --uic-hdrcnt-himg: ${HEADER1_IMG};
}

[data-theme="dark"]
{
  --uic-hdrcnt-fimg: ${FAVICON2_IMG};
  --uic-hdrcnt-himg: ${HEADER2_IMG};
}

.${CLASS.ROOT} h2,
.${CLASS.ROOT} h3
{
  margin: 0px;
  padding: 0px;
  font-size: 1em;
  font-weight: 400;
}

.${CLASS.ROOT}
{
  display: flex;
  height: 33px;
}

.${CLASS.ROOT} > h3
{
  width: 36px;
  height: 100%;
  margin-right: 7px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: var(--uic-hdrcnt-fimg);
  flex-shrink: 0;
}

.${CLASS.ROOT} > h2
{
  width: 130px;
  height: 100%;
  margin-right: 15px;
  background-size: 180px;
  background-position-y: center;
  background-position-x: left;
  background-repeat: no-repeat;
  background-image: var(--uic-hdrcnt-himg);
  flex-shrink: 0;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT}
  {
    height: 130px;
  }
  .${CLASS.ROOT} > h3
  {
    display: none;
  }
  .${CLASS.ROOT} > h2
  {
    width: 255px;
    background-size: 360px;
  }
}
`;
