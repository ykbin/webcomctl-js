import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("Journal");

const vars = mk.newCSSVariableMap({
  jour_tit_bor: [ "#d6d6d6", "#727272" ],
  jour_tit_bg: [ "#fbfbfb", "transparent" ],
  jour_tit: [ "#555555", "#dedede" ],
  jour_tit_col: [ "#4e4e4e", "#dedede" ],
});

export const ROOT_CLASS: string = representClassNames("Journal-ROOT_CLASS");
export const TITLE: string = representClassNames("Journal-TITLE");
export const LIST: string = representClassNames("Journal-LIST");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <span>
    <u class="${TITLE}"></u>
    <div>
      <span class="${LIST}"></span>
    </div>
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
  flex-grow: 1;
  justify-content: center;
  padding: 10px 30px 20px 30px;
  width: inherit;
  line-height: 24px;
  font-size: 15px;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} > span
{
  display: block;
  width: 100%;
  max-width: 1200px;
}

.${ROOT_CLASS} > span u
{
  display: block;
  text-decoration: none;
  margin-left: 10%;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  color: ${vars.jour_tit.asVar()};
  height: 25px;
}

.${ROOT_CLASS} > span > div
{
  height: calc(100% - 35px);
  padding: 10px;
  border: 1px solid ${vars.jour_tit_bor.asVar()};
  background-color: ${vars.jour_tit_bg.asVar()};
  word-break: break-all;
  font-family: monospace;
}

.${ROOT_CLASS} > span div span > div
{
  padding: 3px 15px;
  color: ${vars.jour_tit_col.asVar()};
}

@media (device-width <= 550px)
{
  div.${ROOT_CLASS}
  {
    min-height: calc(100% - 550px);
  }
  div.${ROOT_CLASS} > span u
  {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  div.${ROOT_CLASS},
  div.${ROOT_CLASS} > span u
  {
    font-size: 35px;
  }
}

`);
