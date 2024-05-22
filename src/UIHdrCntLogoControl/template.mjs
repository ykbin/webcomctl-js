import { HEADER_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';
import { optimize } from 'svgo';
import { readFile } from 'node:fs/promises';

import path from 'node:path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bytes = await readFile(path.resolve(__dirname, './favicon1.svg'), { encoding: 'utf8', flag: 'r' });
const result = optimize(bytes, {
  plugins: [
    { removeStyleElement: true },
    { removeViewBox: true },
  ]
});

console.log('>>>', result.data);

export const NAME = 'HdrCntLogo';

export const CLASS = {
  ROOT: "uic-hdrcnt-root",
};

export const HTML = `
<div class="${CLASS.ROOT}">
  <h3></h3>
  <h2></h2>
</div>
`;

export const CSS = `
:root
{
  --uic-hdrcnt-fimg: url(favicon1.svg);
  --uic-hdrcnt-himg: url(header1.svg);
}

[data-theme="dark"]
{
  --uic-hdrcnt-fimg: url(favicon2.svg);
  --uic-hdrcnt-himg: url(header2.svg);
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
