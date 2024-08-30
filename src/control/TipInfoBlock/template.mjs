import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('TipInfoBlock', import.meta.url);

export const ROOT_CLASS = mk.newClassName("ROOT_CLASS");

export const CLOSE_CLASS = mk.newClassName("CLOSE_CLASS");

export const PULL_OUT_RIGHT = mk.newClassName("PULL_OUT_RIGHT");
export const PULL_OUT_LEFT = mk.newClassName("PULL_OUT_LEFT");
export const PULL_OUT_ON = mk.newClassName("PULL_OUT_ON")
export const LIST_CLASS = mk.newClassName("LIST_CLASS");
export const SIZE_CLASS = mk.newClassName("SIZE_CLASS");

const CLOSE_IMG = await mk.loadSvgAsCssUrl('./X.svg');

const MENU_BG = mk.newCSSVariable("MENU_BG", [ '#f3f3f3', '#252525' ]);
const MENU_COL = mk.newCSSVariable("MENU_COL", [ 'black', '#b8b4b4' ]);
const PULL_OUT_BOR = mk.newCSSVariable("PULL_OUT_BOR", [ '#dedede', '#323232' ]);
const MENU_TITLE_COL = mk.newCSSVariable("MENU_TITLE_COL", [ '#272626', '#9b9b9b' ]);
const CLOSE_HOV_COL = mk.newCSSVariable("CLOSE_HOV_COL", '#ff00005e');

export const ROOT_HTML = mk.newHTML('ROOT_HTML', `
    <div class="${ROOT_CLASS}">
      <div>
        <h2><span class="notranslate" translate="no">JPEG</span>:</h2>
        <span>
          One of the popular raster graphics formats used to store photographs and similar images. The JPEG algorithm allows you to compress an image both lossy and lossless (lossless JPEG compression mode).
        </span>
        <div class="${LIST_CLASS} notranslate" translate="no">
          <span><h3>Size</h3><label>88 KB</label></span>
          <span><h3>Library</h3><label>libjpeg-turbo-2.1.91</label></span>
          <span><h3>MD5</h3><label>6C539ACE23ECEA28A66FB18514D86A8C</label></span>
        </div>

          <ul class="${SIZE_CLASS} notranslate" translate="no">
            <li><h3>Name:</h3><label>Name1234567890</label></li>
            <li><h3>Height</h3><label>470 px</label></li>
            <li><h3>JFIF Ver</h3><label>1.1</label></li>
            <li><h3>ColorSpace</h3><label>YCbCr</label></li>
          </ul>
        </div>
        <div class="${CLOSE_CLASS}"></div>
    </div>
`);

export const CSS = mk.newCSS('CSS', `

:root
{
  ${MENU_BG.toString(0)};
  ${MENU_COL.toString(0)};
  ${PULL_OUT_BOR.toString(0)};
  ${MENU_TITLE_COL.toString(0)};
  ${CLOSE_HOV_COL.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${MENU_BG.toString(1)};
  ${MENU_COL.toString(1)};
  ${PULL_OUT_BOR.toString(1)};
  ${MENU_TITLE_COL.toString(1)};
}

${ROOT_CLASS} > *
{
  box-sizing: border-box;
}

${ROOT_CLASS} h3
{
  margin: 0px;
  font-weight: 400;
  font-size: 16px;
}

.${ROOT_CLASS}
{
  position: absolute;
  display: none;
  justify-content: flex-end;
  max-width: 450px;
  height:100%;
  color: #393939;
  font-family: Open Sans, Arial, sans-serif;
  box-sizing: border-box;
  background-color: ${MENU_BG.asVar()};
  color: ${MENU_COL.asVar()};
  overflow: hidden;
}

.${ROOT_CLASS} > div > h2
{
  display: inline-block;
  padding-left: 5px;
  margin: 0px;
  font-weight: 500;
  font-size: 18px;
  color: ${MENU_TITLE_COL.asVar()};
}

.${PULL_OUT_RIGHT}
{
  right: 0;
  display: flex;
  width: 0;
  padding: 0;
  transform: translateX(100%);
  transition: transform 0.2s ease-in-out, width 0.01s 0.2s, padding 0.01s 0.2s;
  border-left: 1px solid ${PULL_OUT_BOR.asVar()};
}

.${PULL_OUT_LEFT}
{
  left: 0;
  display: flex;
  width: 0;
  padding: 0;
  transform: translateX(-100%);
  transition: transform 0.2s ease-in-out, width 0.01s 0.2s, padding 0.01s 0.2s;
  border-right: 1px solid ${PULL_OUT_BOR.asVar()};
}

.${PULL_OUT_ON}
{
  display: flex;
  width: 100%;
  min-width: 300px;
  padding: 20px 20px 10px 20px;
  transform: translateX(0);
  transition: padding 0.01s, width 0.01s, transform 0.2s ease-in-out 0.01s;
}


.${ROOT_CLASS} > div > span
{
  display: block;
  max-width: 500px;
  padding: 0px 5px;
  margin-bottom: 16px;
  line-height: 1.7;
}

.${LIST_CLASS}
{
  display: table;
  width: 100%;
  border-spacing: 0 10px;
}

.${LIST_CLASS} span 
{
  display: table-row-group;
}

.${LIST_CLASS} > span > h3
{
  display: table-cell;
  padding-left: 10px;
  min-width: 50px;
}

.${LIST_CLASS} > span > label
{
  display: table-cell;
  width: 100%;
  padding-left: 10px;
  word-break: break-all;
}

.${SIZE_CLASS}
{
  display: table;
  border-spacing: 0 10px;
  margin: 0;
  padding: 0;
}

.${SIZE_CLASS} > li
{
  display: table-row-group;
}

.${SIZE_CLASS} > li > h3
{
  display: table-cell;
  padding-left: 10px;
  min-width: 50px;
}

.${SIZE_CLASS} > li > label
{
  display: table-cell;
  width: 100%;
  word-break: break-all;
  padding-left: 10px;
}

.${CLOSE_CLASS}
{
  position: relative;
  bottom: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-image: ${CLOSE_IMG};
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
}

.${CLOSE_CLASS}:hover
{
  background-color: ${CLOSE_HOV_COL.asVar()};
}

`);
