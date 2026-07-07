import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from '@/lib/DarkMode';
import { TOOLBAR_FONT_SANS } from '@/lib/WickedTheme';

import closeSvg from "./X.svg";

const mk = new ControlMaker("TipInfoBlock");

const vars = mk.newCSSVariableMap({
  menuBg: [ '#f3f3f3', '#252525' ],
  menuCol: [ 'black', '#b8b4b4' ],
  pullOutBor: [ '#dedede', '#323232' ],
  menuTitleCol: [ '#272626', '#9b9b9b' ],
});

const CLOSE_IMG = convertSvgToCssUrl(closeSvg);
const CLOSE_HOV_COL = '#80808042';

export const ROOT_CLASS: string = representClassNames("TipInfoBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("TipInfoBlock-PORT_CLASS");
export const CLOSE_CLASS: string = representClassNames("TipInfoBlock-CLOSE_CLASS");
export const PULL_OUT_RIGHT: string = representClassNames("TipInfoBlock-PULL_OUT_RIGHT");
export const PULL_OUT_LEFT: string = representClassNames("TipInfoBlock-PULL_OUT_LEFT");
export const PULL_OUT_ON: string = representClassNames("TipInfoBlock-PULL_OUT_ON");
export const LIST_CLASS: string = representClassNames("TipInfoBlock-LIST_CLASS");
export const SIZE_CLASS: string = representClassNames("TipInfoBlock-SIZE_CLASS");

export const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <div>
      <div class="${PORT_CLASS}"></div>
      <span>
        <div class="${CLOSE_CLASS}"><div></div></div>
      </span>
    </div>
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

.${PORT_CLASS}
{
  width: 100%;
  height: calc(100% - 43px);

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
  font-family: ${TOOLBAR_FONT_SANS};
  box-sizing: border-box;
  background-color: ${vars.menuBg.asVar()};
  color: ${vars.menuCol.asVar()};
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
  border-color: ${vars.pullOutBor.asVar()};
  transition: width 0.2s;
}

.${ROOT_CLASS} > div > span
{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 13px;
  flex-shrink: 0;
}

.${CLOSE_CLASS}
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.${CLOSE_CLASS} > div
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

.${CLOSE_CLASS}:hover > div
{
  background-color: ${CLOSE_HOV_COL};
}

.${CLOSE_CLASS}:active > div
{
  width: 18px;
  height: 18px;
  background-size: 80%;
  transition: width 0.1s, height 0.1s, background-size 0.1s;
  background-size: 100%;
}
`);
