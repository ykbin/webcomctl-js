import { Mobile } from '../lib/Settings.mjs';
import { representClassNames } from '../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../lib/SVG.mjs';

const LOAD_IMG = await loadSvgAsCssUrlAsync(import.meta.url, './load.svg');

export const NAME = 'CntSmUploadButton';

export const CLASS = representClassNames({
  ROOT: "uic-csupl-root",
  LOAD: "uic-csupl-load",
});

export const HTML = `
<div class="${CLASS.ROOT}">
  <span></span>
  <label class="notranslate" translate="no">Upload</label>
</div>
`;

export const CSS = `
:root
{
  --uic-csupl-clr: #c50000;
  --uic-csupl-brd: #c50000;
  --uic-csupl-ldclr: #c5000078;
  --uic-csupl-ldbrd: #c5000078;
  /* light */
  --uic-csupl-dbg: #ffffff;
  --uic-csupl-hbg: #f5eaea;
}

[data-theme="dark"]
{
  --uic-csupl-dbg: #472f2f42;
  --uic-csupl-hbg: #ba8f8f29;
}

.${CLASS.ROOT} input
{
   display: none;
}

.${CLASS.ROOT}
{
  display: flex;
  align-items: center;
  width: 140px;
  height: 32px;
  border-radius: 5px;
  font-size: 24px;
  box-sizing: content-box;
  float: right;
}

.${CLASS.ROOT}
{
  background-color: var(--uic-csupl-dbg);
  color: var(--uic-csupl-clr);
  border: 2px solid var(--uic-csupl-brd);
  cursor: pointer;
}

.${CLASS.ROOT}:hover 
{
  background-color: var(--uic-csupl-hbg);
}

.${CLASS.ROOT} > label
{
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  user-select: none;
  flex-shrink: 0;
}

.${CLASS.LOAD}
{
  background-color: var(--uic-csupl-hbg);
  color: var(--uic-csupl-ldclr);
  border: 2px solid var(--uic-csupl-ldbrd);
  cursor: no-drop;
  pointer-events: none;
}

.${CLASS.LOAD} > span
{
  position: relative;
  left: 39%;
  display: block;
  width: 33px;
  height: 100%;
  background-image: ${LOAD_IMG};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  pointer-events: none;
  flex-shrink: 0;
}

.${CLASS.LOAD} label
{
  position: relative;
  right: 33px;
}

@media (device-width < ${Mobile.deviceWidth})
{
  .${CLASS.ROOT}
  {
    width: 280px;
    height: 64px;
    border-radius: 10px;
    font-size: 48px;
    margin-top: 10px;
  }
  .${CLASS.LOAD} span
  {
    width: 66px;
  }
  .${CLASS.LOAD} label
  {
    right: 66px;
  }
}
`;
