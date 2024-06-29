import { representClassNames } from '../../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../../lib/SVG.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_START_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_START_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const UPLOAD1_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './up-file.svg');
const UPLOAD2_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './up-file-hover.svg');
const SEARCH_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './search.svg');

export const NAME = 'StartupUpload';

export const CLASS = representClassNames({
  ROOT: 'uic-strupl-root',
  FDROP: 'uic-strupl-fdrop',
  DSHOW: 'uic-strupl-dshow',
  DHIDE: 'uic-strupl-dhide',
});

export const HTML = `
<div class="${CLASS.ROOT}" align="center">
  <h2>Drop your file</h2>
  <h2>Upload your file</h2>
  <div class="${CLASS.FDROP} ${CLASS.DHIDE}">
    <div>
      <div class="uic-strupl-fdimg"></div>
      <div class="uic-strupl-fdbtn">
        <label class="notranslate" translate="no">
          <span></span>Upload
        </label>
      </div>
    </div>
  </div>
</div>
`;

export const CSS = `
:root
{
  --uic-strupl-rootbg: ${UIC_START_BACKGROUND_COLOR};
  --uic-strupl-des: #afafaf;
  --uic-strupl-dhide-bg: #fafafa;
  --uic-strupl-fdrop-borImg: #ebebeb00;
  --uic-strupl-fdrop-borImg2: #dfdfdf;
  --uic-strupl-img: ${UPLOAD1_IMG};
  --uic-strupl-bor: transparent;
  --uic-strupl-fdbtn-col: #a6a6a6;
  --uic-strupl-fdbtn-bor: #c1c1c1;
  --uic-strupl-fdbtn-hov: #4545450f;
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-strupl-rootbg: ${UIC_START_BACKGROUND_COLOR_DARK};
  --uic-strupl-img: ${UPLOAD2_IMG};
  --uic-strupl-fdbtn-hov: #45454540;
  --uic-strupl-dhide-bg: transparent;
}

.uic-strupl-fdbtn label > input,
.${CLASS.ROOT} > h2 + h2
{
  display: none;
}

.${CLASS.ROOT} *
{
  box-sizing: border-box;
}

.${CLASS.FDROP}
{
  align-self: center;
  width: 100%;
  max-width: 1065px;
  border-radius: 10px;
  overflow: hidden;
  user-select: none;
}

.${CLASS.ROOT}
{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 570px;
  padding: 20px 20px;
  background-color: var(--uic-strupl-rootbg);
  user-select: none;
  box-sizing: border-box;
}

.${CLASS.ROOT} > h2 
{
  margin: 0px 0px 20px 0px;
  font-size: 2.81em;
  text-align: center;
  font-weight: 800;
  color: var(--uic-strupl-des);
  font-family: math;
}

.${CLASS.DHIDE}
{
  background-color: var(--uic-strupl-dhide-bg);
}

.${CLASS.DSHOW} .uic-strupl-fdimg
{
  width: 100%;
  transform: scale(1.1);
  transition-duration: 0.7s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.2s;
}

.${CLASS.FDROP} > div
{
  height: 100%;
  border-image-source: repeating-linear-gradient(45deg, var(--uic-strupl-fdrop-borImg) 0% 2%, var(--uic-strupl-fdrop-borImg2) 2% 4%,var(--uic-strupl-fdrop-borImg) 4% 6%,var(--uic-strupl-fdrop-borImg2) 6% 8%);
  border-width: 4px;
  border-image-slice: 4;
  border-style: solid;
  padding: 30px;
}

.uic-strupl-fdimg
{
  height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: var(--uic-strupl-img);
  border: 15px solid var(--uic-strupl-bor);
}

.${CLASS.DSHOW} > div > div + div
{
  opacity: 0.3;
}

.uic-strupl-fdbtn
{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: none;
  width: auto;
  height: auto;
  pointer-events: auto;
}

.uic-strupl-fdbtn > label
{
  display: flex;
  align-items: center;
  width: 270px;
  color: var(--uic-strupl-fdbtn-col);
  font-size: 45px;
  text-align: center;
  border: 3px solid var(--uic-strupl-fdbtn-bor);
  border-radius: 5px;
  padding: 5px 10px 5px 30px;
  cursor: pointer;
  font-family: system-ui;
  flex-shrink: 0;
}

.uic-strupl-fdbtn > label:hover
{
  background-color: var(--uic-strupl-fdbtn-hov);
}

.uic-strupl-fdbtn > label > span
{
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-image: ${SEARCH_IMG};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

@media (device-width <= 550px)
{
  .${CLASS.ROOT}
  {
    display: flex;
    justify-content: center;
    min-height: 680px;
  }
  .${CLASS.FDROP}
  {
    height: 100%;
    max-height: 1100px;
  }
  .${CLASS.FDROP} > div
  {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .uic-strupl-fdimg
  {
    height: calc(100% - 75px);
  }
  .uic-strupl-fdbtn
  {
    height: auto;
  }
}

@media (device-width <= 300px)
{
  .${CLASS.FDROP}
  {
    width: auto;
    height: auto;
  }
  .${CLASS.FDROP} > div
  {
    width: auto;
  }
  .uic-strupl-fdimg
  {
    display: none;
  }
  .uic-strupl-fdimg + div
  {
    display: block;
  }
  .uic-strupl-fdbtn > label
  {
    width: 470px;
    font-size: 80px;
  }
  .uic-strupl-fdbtn > label > span
  {
    width: 80px;
    height: 80px;
  }
  .${CLASS.ROOT} > h2
  {
    display: none;
  }
  .${CLASS.ROOT} > h2 + h2
  {
    display: block;
    font-size: 4.81em;
    font-weight: 800;
    color: #afafaf;
    font-family: math;
    margin: 0px 0px 20px 0px;
  }
}
`;
