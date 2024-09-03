import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('TipInfoBlock', import.meta.url);

export const ROOT_CLASS = mk.newClassName("ROOT_CLASS");
export const PORT_CLASS = mk.newClassName("PORT_CLASS");

export const CLOSE_CLASS = mk.newClassName("CLOSE_CLASS");

export const PULL_OUT_RIGHT = mk.newClassName("PULL_OUT_RIGHT");
export const PULL_OUT_LEFT = mk.newClassName("PULL_OUT_LEFT");
export const PULL_OUT_ON = mk.newClassName("PULL_OUT_ON")
export const LIST_CLASS = mk.newClassName("LIST_CLASS");
export const SIZE_CLASS = mk.newClassName("SIZE_CLASS");

const CLOSE_IMG = await mk.loadSvgAsCssUrl('./X.svg');

const MENU_BG = mk.newCSSVariable("MENU_BG", [ '#f3f3f3', '#252525' ]);
const MENU_COL = mk.newCSSVariable("MENU_COL", [ 'black', '#b8b4b4' ]);
const PULL_OUT_BOR = mk.newCSSVariable("PULL_OUT_BOR", [ '#dedede', '#323232' ]);
const MENU_TITLE_COL = mk.newCSSVariable("MENU_TITLE_COL", [ '#272626', '#9b9b9b' ]);
const CLOSE_HOV_COL = mk.newCSSVariable("CLOSE_HOV_COL", '#80808042');

export const ROOT_HTML = mk.newHTML('ROOT_HTML', `
  <div class="${ROOT_CLASS}">
    <div>
      <div class="${PORT_CLASS}"></div>
      <span>
        <div class="${CLOSE_CLASS}"></div>
      </span>
    </div>
  </div>
`);

export const CSS = mk.newCSS('CSS', `

:root
{
  ${MENU_BG.toString(0)};
  ${MENU_COL.toString(0)};
  ${PULL_OUT_BOR.toString(0)};
  ${MENU_TITLE_COL.toString(0)};
  ${CLOSE_HOV_COL.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${MENU_BG.toString(1)};
  ${MENU_COL.toString(1)};
  ${PULL_OUT_BOR.toString(1)};
  ${MENU_TITLE_COL.toString(1)};
}

.${PORT_CLASS}
{
  width: 100%;
  height: 100%;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS}
{
  position: absolute;
  top: 0;
  display: none;
  height: 100%;
  color: #393939;
  font-family: Open Sans, Arial, sans-serif;
  box-sizing: border-box;
  background-color: ${MENU_BG.asVar()};
  color: ${MENU_COL.asVar()};
  overflow: hidden;
}

.${ROOT_CLASS} > div
{
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  width: 450px;
  height: 100%;
  padding: 0 25px 25px 25px;
}

.${PULL_OUT_RIGHT}
{
  right: 0;
  display: block;
  width: 0;
  transition: width 0.2s;
  border-left: 0 solid;
}

.${PULL_OUT_LEFT}
{
  left: 0;
  display: block;
  width: 0;
  transition: width 0.2s;
  border-right: 0 solid;
}

.${PULL_OUT_ON}
{
  display: block;
  width: 450px;
  border-width: 1px;
  border-color: ${PULL_OUT_BOR.asVar()};
  transition: width 0.2s;
}

.${ROOT_CLASS} > div > span
{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 25px;
}

.${CLOSE_CLASS}
{
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-image: ${CLOSE_IMG};
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
}

.${CLOSE_CLASS}:hover
{
  background-color: ${CLOSE_HOV_COL.asVar()};
}

`);
