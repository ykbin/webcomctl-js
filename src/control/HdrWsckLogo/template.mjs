import { representClassNames } from '../../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../../lib/SVG.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

export const NAME = 'HdrWabtLogo';

export const CLASS = representClassNames({
  ROOT: "uic-hdrwsck-root",
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
  /*light*/
  --uic-hdrwsck-fimg: url(favicon1.svg);
  --uic-hdrwsck-himg: url(header1.svg);
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-hdrwsck-fimg: url(favicon2.svg);
  --uic-hdrwsck-himg: url(header2.svg);
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
  height: 100%;
  width: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: var(--uic-hdrwsck-fimg);
  margin-right: 7px;
  flex-shrink: 0;
}

.${CLASS.ROOT} > h2
{
  height: 100%;
  width: 145px;
  margin-right: 15px;
  background-size: 180px;
  background-position-y: center;
  background-position-x: left;
  background-repeat: no-repeat;
  background-image: var(--uic-hdrwsck-himg);
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
    width: 330px;
    background-size: 410px;
  }
}
`;
