import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import donotLoadSvg from "./donot_load.svg";

const mk = new ControlMaker("ImgFailContent");

const DONOT_IMG = convertSvgToCssUrl(donotLoadSvg);
const vars = mk.newCSSVariableMap({
});

const SCROLL_THUMB = '#b5b5b5c7';
const SCROLL_T = 'transparent';
const BGC = '#fbfbfb';
const BS = '#89898945';
const TEXT = '#8f8f8f';

export const ROOT_CLASS: string = representClassNames("ImgFailContent-ROOT_CLASS");
export const TEXT_CLASS: string = representClassNames("ImgFailContent-text");

export const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <div>
      <div>
        <span></span>
        <div class="${TEXT_CLASS}">
          <div>Sorry, your</div>
          <div>file didn't</div>
          <div>load</div>
        </div>
      </div>
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

.${ROOT_CLASS}
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.${ROOT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCROLL_THUMB};
  border-radius: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-track,
.${ROOT_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCROLL_T};
}

.${ROOT_CLASS} > div
{
  height: 40%;
}

.${ROOT_CLASS} > div > div
{
  display: flex;
  align-items: flex-start;
  padding: 5px;
  border-radius: 5px;
  background-color: ${BGC};
  box-shadow: 0px 0px 4px 1px ${BS};
}

.${ROOT_CLASS} span
{
  display: block;
  width: 65px;
  height: 75px;
  margin-right: 5px;
  margin-top: 5px;
  background-image: ${DONOT_IMG};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.${TEXT_CLASS}
{
  height: max-content;
  font-size: 25px;
  color: ${TEXT};
  font-family: system-ui;
  flex-shrink: 0;
}

@media (device-width < 550px)
{
  .${ROOT_CLASS} span
  {
    width: 130px;
    height: 150px;
  }
  .${TEXT_CLASS}
  {
    font-size: 50px;
  }
}
`);
