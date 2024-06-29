import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('DebugPanel', import.meta.url);

export const NAME = mk.name;

export const ROOT_CLASS = mk.makeClassName("Root");
export const LIST_CLASS = mk.makeClassName("List");
export const TEXT_CLASS = mk.makeClassName("Text");

const BOR_VAR = mk.makeVarName("Bor");
const BG_VAR = mk.makeVarName("Bg");
const DEFBUT_VAR = mk.makeVarName("DefBut");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${LIST_CLASS}"></div>
`;

export const ITEM_HTML = `
<div class="${TEXT_CLASS}"></div>
`;

export const CSS = `
:root
{
  ${BOR_VAR}: #d0dbe9;
  ${BG_VAR}: #fdfdfd;
  ${DEFBUT_VAR}: #488ee9;
}

${DARKMODE_SELECTOR_VALUE}
{
  ${BOR_VAR}: #35383c;
  ${BG_VAR}: rgb(43 43 45);
  ${DEFBUT_VAR}: #2d5b96;
}

.${ROOT_CLASS}
{
  position: fixed;
  bottom: 2px;
  left: 2px;
  width: auto;
  height: auto;
  padding: 5px 5px 0px 5px;
  border: 1px solid var(${BOR_VAR});
  border-radius: 2px;
  background-color: var(${BG_VAR});
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  cursor: default;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  min-width: 90px;
  padding: 0 2px;
  margin-bottom: 5px;
  color: white;
  background-color: var(${DEFBUT_VAR});
  cursor: pointer;
}

.${ROOT_CLASS} > div:hover
{
  background-color: #417cc8;
}
`;
