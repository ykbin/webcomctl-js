import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR } from '../../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('InfoContent', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");

export const PROPERTIES_CLASS = mk.newClassName("Properties");
export const DESCRIPTION_CLASS = mk.newClassName("Description");
export const LIST_CLASS = mk.newClassName("List");
export const SIZE_CLASS = mk.newClassName("Size");


export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div class="${PROPERTIES_CLASS}">
    <div class="${DESCRIPTION_CLASS}">
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
</div>
`;

export const CSS = `

:root
{
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR};
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-imgcnt-bg: ${UIC_CONTENT_BACKGROUND_COLOR_DARK};
}

.${ROOT_CLASS}
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
  padding: 40px;
  box-sizing: border-box;
  background-color: var(--uic-imgcnt-bg);
}

.${PROPERTIES_CLASS}
{
  display: block;
  width: inherit;
  height: inherit;
}


.${DESCRIPTION_CLASS} > h2
{
  display: inline-block;
  padding-left: 5px;
  margin: 0px;
  font-weight: 500;
  font-size: 18px;
  color: #272626;
}

h3
{
  margin: 0px;
  font-weight: 400;
  font-size: 16px;
}

.${DESCRIPTION_CLASS}
{
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #393939;
  font-family: Open Sans, Arial, sans-serif;
  box-sizing: border-box;
}

.${DESCRIPTION_CLASS} *
{
  box-sizing: border-box;
}

.${DESCRIPTION_CLASS} > span
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
  padding-left: 10px;
}
`;
