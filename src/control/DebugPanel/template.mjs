import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('DebugPanel', import.meta.url);
const ARROW_IMG = await mk.loadSvgAsCssUrl('./arrow.svg');

const ROOT_CLASS = mk.newClassName("ROOT_CLASS");
const LIST_CLASS = mk.newClassName("LIST_CLASS");
const TEXT_CLASS = mk.newClassName("TEXT_CLASS");
const CONTROL_CLASS = mk.newClassName("CONTROL_CLASS");

const BOR_VAR = mk.newCSSVariable("BOR_VAR", [ '#d0dbe9', '#35383c' ]);
const BG_VAR = mk.newCSSVariable("BG_VAR", [ '#fdfdfd', 'rgb(43 43 45)' ]);
const DEFBUT_VAR = mk.newCSSVariable("DEFBUT_VAR", [ '#488ee9', '#2d5b96' ]);

mk.newHTML('ROOT_HTML', `
  <div class="${ROOT_CLASS}">
    <div class="${CONTROL_CLASS}">
      <div></div>
      <span></span>
    </div>
    <div class="${LIST_CLASS}"></div>
  </div>
`);

mk.newHTML('ITEM_HTML', `
<div class="${TEXT_CLASS}"></div>
`);

mk.newCSS('CSS', `
:root
{
  ${BOR_VAR.toString(0)};
  ${BG_VAR.toString(0)};
  ${DEFBUT_VAR.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${BOR_VAR.toString(1)};
  ${BG_VAR.toString(1)};
  ${DEFBUT_VAR.toString(1)};
}

.${ROOT_CLASS}
{
  position: fixed;
  bottom: 2px;
  left: 2px;
  width: auto;
  height: auto;
  padding: 5px 5px 0px 5px;
  border: 1px solid ${BOR_VAR.asVar()};
  border-radius: 2px;
  background-color: ${BG_VAR.asVar()};
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  cursor: default;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${CONTROL_CLASS}
{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 25px;
  margin-bottom: 5px;
}

.${CONTROL_CLASS} > *
{
  width: 25px;
  height: 25px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.${CONTROL_CLASS} > div
{
  background-image: ${ARROW_IMG};
}

.${CONTROL_CLASS} > span
{
  display: block;
  background-image: ${ARROW_IMG};
}

.${LIST_CLASS} > div
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
  background-color: ${DEFBUT_VAR.asVar()};
  cursor: pointer;
}

.${LIST_CLASS} > div:hover
{
  background-color: #417cc8;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
