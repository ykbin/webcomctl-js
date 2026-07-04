import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("ProtocolContent");

const vars = mk.newCSSVariableMap({
  con_col: [ '#353535', '#dcdcdc' ],
});

export const ROOT_CLASS: string = representClassNames("ProtocolContent-ROOT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <span>
    <ul id="wsock-message-list"></ul>
  </span>
</div>
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
  display: flex;
  padding: 0px 0px 0px 30px;
  flex-grow: 1;
  font-family: monospace;
}

.${ROOT_CLASS} > span
{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.${ROOT_CLASS} > span > ul
{
  width: inherit;
  padding: 10px 0px 15px 0px;
  margin: 0px;
  line-height: 20px;
  font-size: 0.95em;
  color: ${vars.con_col.asVar()};
}

.${ROOT_CLASS} > span > ul > li
{
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  contain: paint;
}
`);
