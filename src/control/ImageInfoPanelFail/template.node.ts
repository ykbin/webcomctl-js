import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("ImageInfoPanelFail");

const TABE_BG = '#7a7a7a29';
const TABE_BG_N2 = 'transparent';

const vars = mk.newCSSVariableMap({
  Foncol: [ 'black', '#b8b4b4' ],
});

export const ROOT_CLASS: string = representClassNames("ImageInfoPanelFail-ROOT_CLASS");

export const ROOT_HTML = `
  <i class="${ROOT_CLASS}">
    <ul>
      <li>
        <div>Height</div>
        <div>854 px</div>
      </li>
      <li>
        <div>Chroma bpp</div>
        <div>8</div>
      </li>
      <li>
        <div>Alpha channel</div>
        <div>No</div>
      </li>
      <li>
        <div>Premul alpha</div>
        <div>No</div>
      </li>
      <li>
        <div>Primary</div>
        <div>Yes</div>
      </li>
    </ul>
  </i>
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

.${ROOT_CLASS}
{
  display: block;
  width: inherit;
  height: 100%;
  padding: 10px 25px 10px 10px;
  font-family: Open Sans, Arial, sans-serif;
  font-style: normal;
  color: ${vars.Foncol.asVar()};
  flex-shrink: 0;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} > ul
{
  display: table;
  width: inherit;
  margin: 0;
  padding: 0;
  border-spacing: 0 5px;
}

.${ROOT_CLASS} > ul > li
{
  display: table-row-group;
  width: inherit;
  list-style-type: none;
  background-color: ${TABE_BG};
}

.${ROOT_CLASS} > ul > li:nth-child(2n)
{
  background-color: ${TABE_BG_N2};
}

.${ROOT_CLASS} > ul > li > div
{
  display: table-cell;
  vertical-align: middle;
  padding: 3px 0 3px 10px;
  min-width: 50px;
  white-space: nowrap;
}

.${ROOT_CLASS} > ul > li > div:nth-child(2n)
{
  width: 100%;
  min-width: auto;
  white-space: normal;
  word-break: break-all;
}
`);