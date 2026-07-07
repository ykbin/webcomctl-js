import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("ImageInfoPanel");

const vars = mk.newCSSVariableMap({
  menuCol: [ 'black', '#b8b4b4' ],
  titleCol: [ '#272626', '#9b9b9b' ],
});

const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';
const LIST_BG = '#7a7a7a29';

export const ROOT_CLASS: string = representClassNames("ImageInfoPanel-ROOT_CLASS");
export const DESCRIPTION_CLASS: string = representClassNames("ImageInfoPanel-DESCRIPTION_CLASS"); // TODO: Remove
export const DESCRIPTION_FORMAT_CLASS: string = representClassNames("ImageInfoPanel-DESCRIPTION_FORMAT_CLASS"); // TODO: Remove
export const DESCRIPTION_TITLE: string = representClassNames("ImageInfoPanel-DESCRIPTION_TITLE");
export const DESCRIPTION_HISTORY: string = representClassNames("ImageInfoPanel-DESCRIPTION_HISTORY");
export const LIST_CLASS: string = representClassNames("ImageInfoPanel-LIST_CLASS");
export const LIST_NAME: string = representClassNames("ImageInfoPanel-LIST_NAME");
export const LIST_VALUE: string = representClassNames("ImageInfoPanel-LIST_VALUE");

export const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <div class="${DESCRIPTION_CLASS} notranslate" translate="no">

        <div class="${DESCRIPTION_FORMAT_CLASS}">
          <h2 class="${DESCRIPTION_TITLE}"></h2>
          <span class="${DESCRIPTION_HISTORY}"></span>
        </div>

        <div class="${LIST_CLASS}"></div>

    </div>
  </div>
`;

export const ITEM_HTML = `
<span>
  <h3 class="${LIST_NAME}"></h3>
  <label class="${LIST_VALUE}"></label>
</span>
`;

export const CSS = splitCSS(`

:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
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
  margin: 0 0 5px 0;
  font-weight: 600;
  font-size: 19px;
  color: ${vars.titleCol.asVar()};
}

.${DESCRIPTION_CLASS} h3
{
  margin: 0px;
  font-weight: 400;
}

.${DESCRIPTION_CLASS}
{
  width: 100%;
  height: 100%;
  padding: 10px 25px 10px 10px;
  font-family: ${TOOLBAR_FONT_SANS};
  box-sizing: border-box;
  color: ${vars.menuCol.asVar()};
  overflow: auto;
}

.${DESCRIPTION_CLASS} *
{
  box-sizing: border-box;
}

.${DESCRIPTION_FORMAT_CLASS} > span
{
  display: block;
  padding: 5px;
  line-height: 1.7;
}

.${LIST_CLASS}
{
  display: table;
  width: 100%;
  font-size: 14px;
  border-spacing: 0 5px;
}

.${LIST_CLASS} span
{
  display: table-row-group;
}

.${LIST_CLASS} > span > h3
{
  display: table-cell;
  vertical-align: middle;
  padding: 3px 0 3px 10px;
  min-width: 50px;
}

.${LIST_CLASS} > span > label
{
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  padding: 3px 0 3px 10px;
  word-break: break-all;
}

.${LIST_CLASS} > span:nth-child(2n)
{
  background-color: ${LIST_BG};
}
`);
