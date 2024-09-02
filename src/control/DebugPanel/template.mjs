import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('DebugPanel', import.meta.url);
const ARROW_IMG = await mk.loadSvgAsCssUrl('./arrow.svg');

const ROOT_CLASS = mk.newClassName("ROOT_CLASS");
const LIST_CLASS = mk.newClassName("LIST_CLASS");
const TEXT_CLASS = mk.newClassName("TEXT_CLASS");
const CONTROL_CLASS = mk.newClassName("CONTROL_CLASS");

const LEFT_CLASS = mk.newClassName("LEFT_CLASS");
const RIGHT_CLASS = mk.newClassName("RIGHT_CLASS");
const UP_CLASS = mk.newClassName("UP_CLASS");
const DOWN_CLASS = mk.newClassName("DOWN_CLASS");

const BOR_VAR = mk.newCSSVariable("BOR_VAR", [ '#d0dbe9', '#35383c' ]);
const BG_VAR = mk.newCSSVariable("BG_VAR", [ '#fdfdfd', 'rgb(43 43 45)' ]);
const CONTROL_VAR = mk.newCSSVariable("CONTROL_VAR", [ ' #efefef', '#2f2f2f' ]);
const DEFBUT_VAR = mk.newCSSVariable("DEFBUT_VAR", [ '#488ee9', '#2d5b96' ]);
const DEFBUT_VAR_HOV = mk.newCSSVariable("DEFBUT_VAR_HOV", ['#417cc8']);

mk.newHTML('ROOT_HTML', `
  <div class="${ROOT_CLASS} ${LEFT_CLASS} ${UP_CLASS}">
    <div class="${CONTROL_CLASS}">
      <div><div></div></div>
      <span><div></div></span>
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
  ${CONTROL_VAR.toString(0)};
  ${DEFBUT_VAR_HOV.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${BOR_VAR.toString(1)};
  ${BG_VAR.toString(1)};
  ${DEFBUT_VAR.toString(1)};
  ${CONTROL_VAR.toString(1)};
}

.${ROOT_CLASS}
{
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  bottom: 2px;
  width: auto;
  height: auto;
  padding: 0px 5px 0px 5px;
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  user-select: none;
  cursor: default;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${LEFT_CLASS}
{
  left: 2px;
}

.${RIGHT_CLASS}
{
  right: 2px;
}

.${DOWN_CLASS} .${LIST_CLASS}
{
  display: none;
}

.${CONTROL_CLASS}
{
  display: flex;
  width: max-content;
  padding: 5px;
  border-top: 1px solid ${BOR_VAR.asVar()};
  border-left: 1px solid ${BOR_VAR.asVar()};
  border-right: 1px solid ${BOR_VAR.asVar()};
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  background-color: ${CONTROL_VAR.asVar()};
}

.${CONTROL_CLASS} > *
{
  display: block;
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 2px;
  background-color: ${DEFBUT_VAR.asVar()};
}

.${CONTROL_CLASS} > *:last-child
{
  margin-right: 0;
}

.${CONTROL_CLASS} > * > div
{
  width: 100%;
  height: 100%;
  background-image: ${ARROW_IMG};
  background-size: 85%;
  background-position: center;
  background-repeat: no-repeat;
}

.${CONTROL_CLASS} > *:hover
{
  background-color: ${DEFBUT_VAR_HOV.asVar()};
}

.${LEFT_CLASS} .${CONTROL_CLASS} > div > div
{
  transform: scaleX(-1);
}

.${CONTROL_CLASS} > span > div
{
  transform: rotate(0deg);
}

.${DOWN_CLASS} .${CONTROL_CLASS} > span
{
  transform: rotate(90deg);
}

.${LIST_CLASS}
{
  padding: 5px 5px 0px 5px;
  border: 1px solid ${BOR_VAR.asVar()};
  background-color: ${BG_VAR.asVar()};
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
  border-radius: 2px;
  color: white;
  background-color: ${DEFBUT_VAR.asVar()};
  cursor: pointer;
}

.${LIST_CLASS} > div:hover
{
  background-color: ${DEFBUT_VAR_HOV.asVar()};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
