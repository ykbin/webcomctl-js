import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { TOOLBAR_FONT_SANS } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('PropInfoPanel', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "DESCRIPTION_CLASS", // TODO: Remove
  "LIST_CLASS",
  "LIST_NAME",
  "LIST_VALUE",
]);

const vars = mk.newCSSVariableMap({
  menuCol: [ 'black', '#b8b4b4' ],
  titleCol: [ '#272626', '#9b9b9b' ],
});

const SCROLLBAR_THUMB_COLOR = '#b5b5b5c7';
const SCROLLBAR_TRACK_COLOR = 'transparent';

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS} notranslate" translate="no">
    <div>
        <div class="${clss.LIST_CLASS}">
          <h2>Properties</h2>
          <div>
            <span>
              <h3 class="${clss.LIST_NAME}">Height</h3><label class="${clss.LIST_VALUE}">2272 px</label>
            </span>
            <span>
              <h3 class="${clss.LIST_NAME}">JFIF Ver</h3><label class="${clss.LIST_VALUE}">1.1</label>
            </span>
            <span>
              <h3 class="${clss.LIST_NAME}">ColorSpace</h3><label class="${clss.LIST_VALUE}">YCbCr</label>
            </span>
          </div>
        </div>
    </div>
  </div>
`);

mk.newHTML('ITEM_HTML', `
<span>
  <h3 class="${clss.LIST_NAME}"></h3>
  <label class="${clss.LIST_VALUE}"></label>
</span>
`);

mk.newCSS('CSS', `

:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${clss.ROOT_CLASS} > div::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${clss.ROOT_CLASS} > div::-webkit-scrollbar-thumb
{
  background-color: ${SCROLLBAR_THUMB_COLOR};
  border-radius: 10px;
}

.${clss.ROOT_CLASS} > div::-webkit-scrollbar-track,
.${clss.ROOT_CLASS} > div::-webkit-scrollbar-corner
{
  background-color: ${SCROLLBAR_TRACK_COLOR};
}

.${clss.ROOT_CLASS}
{
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.${clss.ROOT_CLASS} > div
{
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 10px 25px 10px 10px;
  color: #393939;
  font-family: ${TOOLBAR_FONT_SANS};
  box-sizing: border-box;
  color: ${vars.menuCol.asVar()};
  overflow: auto;
}

.${clss.ROOT_CLASS} > div *
{
  box-sizing: border-box;
}

.${clss.LIST_CLASS}
{
  display: table;
  width: 100%;
  font-size: 14px;
  border-spacing: 0 5px;
}

.${clss.LIST_CLASS} > h2
{
  display: inline-block;
  padding-left: 5px;
  margin: 0 0 10px 0;
  font-weight: 600;
  font-size: 19px;
  color: ${vars.titleCol.asVar()};
}

.${clss.LIST_CLASS} > div > span 
{
  display: table-row-group;
  font-size: 13px;
}

.${clss.LIST_CLASS} > div > span > h3
{
  display: table-cell;
  vertical-align: middle;
  padding: 3px 0 3px 10px;
  min-width: 50px;
  margin: 0px;
  font-weight: 400;
}

.${clss.LIST_CLASS} > div > span > label
{
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  padding: 3px 0 3px 10px;
  word-break: break-all;
}

.${clss.LIST_CLASS} > span:nth-child(2n + 3)
{
  background-color: #7a7a7a29;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
