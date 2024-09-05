import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('DebugPanel', import.meta.url);
const ARROW_IMG = await mk.loadSvgAsCssUrl('./arrow.svg');

const ROOT_CLASS = mk.newClassName("ROOT_CLASS");
const LIST_CLASS = mk.newClassName("LIST_CLASS");
const TEXT_CLASS = mk.newClassName("TEXT_CLASS");
const CONTROL_CLASS = mk.newClassName("CONTROL_CLASS");

const UP_CLASS = mk.newClassName("UP_CLASS");
const LEFT_CLASS = mk.newClassName("LEFT_CLASS");

const RIGHT_CLASS = mk.newClassName("RIGHT_CLASS");
const DOWN_CLASS = mk.newClassName("DOWN_CLASS");
const hideClick = mk.newClassName("hideClick");
const sideClick = mk.newClassName("sideClick");

const vars = mk.newCSSVariableMap({
  bor: [ '#d0dbe9', '#35383c' ],
  bg:  [ '#fdfdfd', 'rgb(43 43 45)' ],
  control: [ ' #efefef', '#2f2f2f' ],
  defBut: [ '#488ee9', '#2d5b96' ],
  hovBut: '#417cc8',
});

mk.newHTML('ROOT_HTML', `
  <div class="${ROOT_CLASS}">
    <div class="${CONTROL_CLASS}">
      <div><div class="${sideClick}"></div></div>
      <span><div class="${hideClick}"></div></span>
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
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${ROOT_CLASS}
{
  position: fixed;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

.${RIGHT_CLASS}
{
  right: 2px;
  align-items: flex-end;
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
  border-top: 1px solid ${vars.bor.asVar()};
  border-left: 1px solid ${vars.bor.asVar()};
  border-right: 1px solid ${vars.bor.asVar()};
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  background-color: ${vars.control.asVar()};
}

.${CONTROL_CLASS} > *
{
  display: block;
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 2px;
  background-color: ${vars.defBut.asVar()};
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
  background-color: ${vars.hovBut.asVar()};
}

.${CONTROL_CLASS} > div > div
{
  transform: scaleX(-1);
}

.${CONTROL_CLASS} > span > div
{
  transform: rotate(270deg);
}

.${DOWN_CLASS} .${CONTROL_CLASS} > span > div
{
  transform: rotate(90deg);
}

.${LIST_CLASS}
{
  padding: 5px 5px 0px 5px;
  border: 1px solid ${vars.bor.asVar()};
  background-color: ${vars.bg.asVar()};
}

.${LIST_CLASS} > div
{
  width: 100%;
  height: 25px;
  min-width: 90px;
  max-width: 150px;
  padding: 0 5px;
  margin-bottom: 5px;
  border-radius: 2px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  background-color: ${vars.defBut.asVar()};
  overflow: hidden;
  cursor: pointer;
}

.${LIST_CLASS} > div:hover
{
  background-color: ${vars.hovBut.asVar()};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
