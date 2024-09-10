import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('InfoContent', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const DESCRIPTION_CLASS = mk.newClassName("Description");
export const DESCRIPTION_FORMAT_CLASS = mk.newClassName("Description_Format");

export const DESCRIPTION_TITLE = mk.newClassName("Description_Title");
export const DESCRIPTION_HISTORY = mk.newClassName("Description_history");

export const LIST_CLASS = mk.newClassName("List");
export const LIST_PROPERTY = mk.newClassName("List_Property");
export const LIST_NAME = mk.newClassName("List_Name");
export const LIST_VALUE = mk.newClassName("List_Value");

export const SIZE_CLASS = mk.newClassName("Size");
export const SIZE_PROPERTY = mk.newClassName("Size_Property");
export const SIZE_NAME = mk.newClassName("Size_Name");
export const SIZE_VALUE = mk.newClassName("Size_Value");

const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';

export const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <div class="${DESCRIPTION_CLASS}">

        <div class="${DESCRIPTION_FORMAT_CLASS}">
          <h2 class="${DESCRIPTION_TITLE} notranslate" translate="no"><span>JPEG</span>:</h2>
          <span class="${DESCRIPTION_HISTORY}">
            One of the popular raster graphics formats used to store photographs and similar images. The JPEG algorithm allows you to compress an image both lossy and lossless (lossless JPEG compression mode).
          </span>
        </div>
        <div class="${LIST_CLASS} notranslate" translate="no">
          <span class="${LIST_PROPERTY}">
            <h3 class="${LIST_NAME}">Size</h3>
            <label class="${LIST_VALUE}">88 KB</label>
          </span>
          <span class="${LIST_PROPERTY}">
            <h3 class="${LIST_NAME}">Library</h3>
            <label class="${LIST_VALUE}">libjpeg-turbo-2.1.91</label>
          </span>
          <span class="${LIST_PROPERTY}">
            <h3 class="${LIST_NAME}">MD5</h3>
            <label class="${LIST_VALUE}">6C539ACE23ECEA28A66FB18514D86A8C</label>
          </span>
        </div>

        <ul class="${SIZE_CLASS} notranslate" translate="no">
          <li class="${SIZE_PROPERTY}">
            <h3 class="${SIZE_NAME}">Name:</h3>
            <label class="${SIZE_VALUE}">Name1234567890</label>
          </li>
          <li class="${SIZE_PROPERTY}">
            <h3 class="${SIZE_NAME}">Height</h3>
            <label class="${SIZE_VALUE}">470 px</label>
          </li>
          <li class="${SIZE_PROPERTY}">
            <h3 class="${SIZE_NAME}">JFIF Ver</h3>
            <label class="${SIZE_VALUE}">1.1</label>
          </li>
          <li class="${SIZE_PROPERTY}">
            <h3 class="${SIZE_NAME}">ColorSpace</h3>
            <label class="${SIZE_VALUE}">YCbCr</label>
          </li>
        </ul>

    </div>
  </div>
`;

export const CSS = `

:root
{
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR};
  --menu-col: black;
  --menu-title-col: #272626;
  --close-hov: #80808042;
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR_DARK};
  --menu-col: #b8b4b4;
  --menu-title-col: #9b9b9b;
}

.${DESCRIPTION_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${DESCRIPTION_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCROLLBAR_THUMB_COLOR};
  border-radius: 10px;
}

.${DESCRIPTION_CLASS}::-webkit-scrollbar-track,
.${DESCRIPTION_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCROLLBAR_TRACK_COLOR};
}

.${ROOT_CLASS}
{
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.${DESCRIPTION_FORMAT_CLASS} h2
{
  display: inline-block;
  padding-left: 5px;
  margin: 0px;
  font-weight: 500;
  font-size: 18px;
  color: var(--menu-title-col);
}

.${DESCRIPTION_CLASS} h3
{
  margin: 0px;
  font-weight: 400;
  font-size: 16px;
}

.${DESCRIPTION_CLASS}
{
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 10px 25px 10px 10px;
  color: #393939;
  font-family: Open Sans, Arial, sans-serif;
  box-sizing: border-box;
  color: var(--menu-col);
  overflow: auto;
}

.${DESCRIPTION_CLASS} *
{
  box-sizing: border-box;
}

.${DESCRIPTION_FORMAT_CLASS} > span
{
  display: block;
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
`;
