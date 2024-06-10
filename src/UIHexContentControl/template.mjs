import { representClassNames } from '../lib/CSSHelper.mjs';

import { COMMON_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../lib/WickedTheme.mjs';

export const NAME = 'HexContent';

export const CLASS = representClassNames({
  ROOT: "uic-hexcnt-root",
  CONTENT: "uic-hexcnt-content",
  OFFSET: "uic-hexcnt-offset",
  OFSLIST: "uic-hexcnt-ofslist",
  BINARY: "uic-hexcnt-binary",
  BINLIST: "uic-hexcnt-binlist",
  TEXT: "uic-hexcnt-text",
  TXTLIST: "uic-hexcnt-txtlist",
  SROOT: "uic-scroll-root",
  SBAR: "uic-scroll-bar",
  STHUMB: "uic-scroll-thumb",
});

export const HTML = `
 <div class="${CLASS.ROOT}">
    <div class="${CLASS.CONTENT}">
      <div class="${CLASS.OFFSET}">
        <h3>Offset</h3>
        <ul>
          <div class="${CLASS.OFSLIST}"></div>
        </ul>
      </div>
      <div class="${CLASS.BINARY}">
        <h3><span>00 01 02 03 04 05 06 07  08 09 0A 0B 0C 0D 0E 0F</span></h3>
        <div>
          <div class="${CLASS.BINLIST}"></div>
        </div>
      </div>
      <div class="${CLASS.TEXT}">
        <h3>Text</h3>
        <ul>
          <div class="${CLASS.TXTLIST}"></div>
        </ul>
      </div>
    </div>
    <div class="${CLASS.SROOT}">
      <div class="${CLASS.SBAR}">
        <div class="${CLASS.STHUMB}"></div>
      </div>
    </div>
  </div>
`;

export const CSS = `
:root
{
  --whex-hex-color:  black;
  --whex-hex-ttlcl2: blue;
  --whex-hex-scrlbg: #dfdfdf29;
  --hex-sc-sthmbg1: darkgray;
  --hex-sc-sthmbg2: #959595;
  --whex-scroll-scrlbg: linear-gradient(white 0%, #efefef 3% 97%, white 100%);
  --whex-scroll-sthmbg1: darkgray;
  --whex-scroll-sthmbg2: #959595;
  --whex-root-col: #224e76;
  --whex-cont-bor: #e8e8e8;
  --text-title-bg: linear-gradient(to left, white 5%, #eef5ff 40% 100%);
  --offset-title-bg: linear-gradient(to right, white 5%, #eef5ff 40% 100%);
  --binary-title-bg: #eef5ff;
  
}

[data-theme="dark"]
{
  background-color: rgb(23, 23, 26);
  color: white;
  --whex-hex-color: gainsboro;
  --whex-hex-ttlcl2: #6d6e7b;
  --whex-hex-scrlbg: #1d1d1d;
  --hex-sc-sthmbg1: #454545;
  --hex-sc-sthmbg2: #565656;
  --whex-scroll-scrlbg: linear-gradient(rgb(23, 23, 26) 0%, #212121 3% 97%, rgb(23, 23, 26) 100%);
  --whex-scroll-sthmbg1: #454545;
  --whex-cont-bor: #252525;
  --text-title-bg: linear-gradient(to left, rgb(23, 23, 26) 5%, #1d2027ff 40% 100%);
  --offset-title-bg: linear-gradient(to right, rgb(23, 23, 26) 5%, #1d2027ff 40% 100%);
  --binary-title-bg: #1d2027ff;
}

.${CLASS.ROOT}
{
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  user-select: auto;
  box-sizing: border-box;
}

.${CLASS.ROOT} *
{
  box-sizing: border-box;
}

.${CLASS.ROOT} s
{
  text-decoration: none;
}

.${CLASS.ROOT} h3
{
  color: var(--whex-root-col);
  margin: 0px;
  font-size: 1em;
  font-weight: 400;
}

.${CLASS.CONTENT}
{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: calc(100% - 10px);
  padding: 10px 10px 15px 10px;
  line-height: 20px;
  word-spacing: normal;
  font-size: 16px;
  text-align: center;
  font-family: monospace;
  flex-shrink: 0;
  overflow: hidden;
}

.${CLASS.CONTENT} h3
{
  height: 30px;
  padding: 5px 15px 5px 15px;
  border-bottom: 1px solid var(--whex-cont-bor);
  font-size: 1em;
  box-sizing: border-box;
}

.${CLASS.OFFSET},
.${CLASS.TEXT},
.${CLASS.BINARY},
.${CLASS.OFFSET} > ul > div,
.${CLASS.TEXT} > ul > div,
.${CLASS.BINARY} > div > div
{
  height: 100%;
}

.${CLASS.OFFSET} > ul,
.${CLASS.TEXT} > ul,
.${CLASS.BINARY} > div
{
  height: calc(100% - 40px);
}

.${CLASS.OFFSET}
{
  width: auto;
}

.${CLASS.OFFSET} > h3
{
  background: var(--offset-title-bg);
}

.${CLASS.TEXT}
{
  width: 100%;
}

.${CLASS.TEXT} > h3
{
  width: max-content;
  background: var(--text-title-bg);
  text-align: left;
}

.${CLASS.OFFSET} > ul
{
  color: var(--whex-hex-ttlcl2);
}

.${CLASS.OFFSET} > ul,
.${CLASS.TEXT} > ul
{
  list-style-type: none;
  padding: 20px 15px 10px 15px;
  margin: 0px;
}

.${CLASS.TEXT} > ul li
{
  white-space: pre;
  word-spacing: normal;
}

.${CLASS.BINARY}
{
  border-right: 1px solid var(--whex-cont-bor);
  border-left: 1px solid var(--whex-cont-bor);
  text-align: left;
  flex-shrink: 0;
  z-index: 1;
}

.${CLASS.BINARY} > div
{
  padding: 20px 15px 10px 15px;
}

.${CLASS.BINARY} > h3
{
  background-color: var(--binary-title-bg);
}

.${CLASS.BINARY} > h3,
.${CLASS.BINARY} > div > div
{
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: min-content;
  white-space: pre;
  font-size: 1em;
}

@media (device-width < 550px)
{
  .${CLASS.CONTENT}
  {
    font-size: 20px;
    line-height: inherit;
  }
}

.${CLASS.SROOT}
{
  height: 100%;
  width: 10px;
  overflow: visible;
}

.${CLASS.SROOT} > h3
{
  display: block;
  height: 25px;
  padding: 0px;
}

.${CLASS.SROOT} > div
{
  position: absolute;
  right: 0px;
  width: 10px;
  height: 100%;
  background: var(--whex-scroll-scrlbg);
}

.${CLASS.SROOT} > div > div
{
  display: block;
  position: relative;
  width: inherit;
  border-radius: 10px;
  background-color: var(--whex-scroll-sthmbg1);
}

.${CLASS.SROOT} > div > div:hover
{
  background-color: var(--whex-scroll-sthmbg2);
}

@media (width < 830px)
{ 
  div.${CLASS.SROOT}
  {
    position: sticky;
    right: 0px;
  }
}
`;
