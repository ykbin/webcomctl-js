import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { TOOLBAR_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("Notfound");

import notfoundSvg from "./notfound.svg";

const notfound = convertSvgToCssUrl(notfoundSvg);
const button = '#007e11';
const button_hover = '#00660e';
const button_color = 'white';

const vars = mk.newCSSVariableMap({
});

export const ROOT_CLASS: string = representClassNames("Notfound-ROOT_CLASS");
export const NOT_IMG: string = representClassNames("Notfound-NOT_IMG");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
    <div class="${NOT_IMG}">
      <span><a href="/">Homepage</a></span>
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

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS}
{
  height: 100%;
  width: 100%;
  font-family: ${TOOLBAR_FONT_SANS};
  overflow: auto;
}

.${NOT_IMG}
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 500px;
  min-height: 365px;
  background-image: ${notfound};
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: 500px;
}

.${ROOT_CLASS} div span
{
  display: flex;
  justify-content: flex-start;
  width: 520px;
  height: 250px;
  font-size: 40px;
  align-items: flex-end;
}

.${ROOT_CLASS} div span a
{
  text-decoration: none;
  cursor: pointer;
  color: ${button_color};
  border-radius: 10px;
  width: 271px;
  height: 60px;
  line-height: 60px;
  background-color: ${button};
  text-align: center;
}

.${ROOT_CLASS} div span a:hover
{
  background-color: ${button_hover};
}

.${ROOT_CLASS} div span a:visited
{
  color: ${button_color};
}

`);
