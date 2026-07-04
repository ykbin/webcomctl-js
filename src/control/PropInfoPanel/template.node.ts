import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("PropInfoPanel");

const vars = mk.newCSSVariableMap({
  menuCol: [ 'black', '#b8b4b4' ],
  titleCol: [ '#272626', '#9b9b9b' ],
});

const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';

export const ROOT_CLASS: string = representClassNames("PropInfoPanel-ROOT_CLASS");
export const LIST_CLASS: string = representClassNames("PropInfoPanel-LIST_CLASS");
export const LIST_NAME: string = representClassNames("PropInfoPanel-LIST_NAME");
export const LIST_VALUE: string = representClassNames("PropInfoPanel-LIST_VALUE");
export const TITLE: string = representClassNames("PropInfoPanel-TITLE");

export const ROOT_HTML = `
  <div class="${ROOT_CLASS} notranslate" translate="no">
    <div>
      <h2 class="${TITLE}"></h2>
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

.${ROOT_CLASS} > *::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${ROOT_CLASS} > *::-webkit-scrollbar-thumb
{
  background-color: ${SCROLLBAR_THUMB_COLOR};
  border-radius: 10px;
}

.${ROOT_CLASS} > *::-webkit-scrollbar-track,
.${ROOT_CLASS} > *::-webkit-scrollbar-corner
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

.${ROOT_CLASS} h3
{
  margin: 0px;
  font-weight: 400;
}

.${ROOT_CLASS} > div
{
  width: 100%;
  height: 100%;
  padding: 10px 25px 10px 10px;
  color: #393939;
  font-family: ${TOOLBAR_FONT_SANS};
  box-sizing: border-box;
  color: ${vars.menuCol.asVar()};
  overflow: auto;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${LIST_CLASS}
{
  display: table;
  width: 100%;
  font-size: 14px;
  border-spacing: 0 5px;
}

.${ROOT_CLASS} h2
{
  display: inline-block;
  padding-left: 5px;
  margin: 0 0 10px 0;
  font-weight: 600;
  font-size: 19px;
  color: ${vars.titleCol.asVar()};
}

.${LIST_CLASS} span
{
  display: table-row-group;
  font-size: 13px;
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

.${LIST_CLASS} > span:nth-child(2n + 2)
{
  background-color: #7a7a7a29;
}
`);
