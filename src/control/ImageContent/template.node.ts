import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { UIC_CONTENT_BACKGROUND_COLOR } from "@/lib/WickedTheme";
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from "@/lib/WickedTheme";

import playSvg from "./play.svg";

const mk = new ControlMaker("ImageContent");

export const ROOT_CLASS: string = representClassNames("ImageContent-ROOT_CLASS");
export const CONTENT_CLASS: string = representClassNames("ImageContent-CONTENT_CLASS");
export const BUTT_LEFT_CLASS: string = representClassNames("ImageContent-BUTT_LEFT_CLASS");
export const BUTT_RIGHT_CLASS: string = representClassNames("ImageContent-BUTT_RIGHT_CLASS");
export const IMAGE_POSITION: string = representClassNames("ImageContent-IMAGE_POSITION");
export const IMAGE_NUMBERS: string = representClassNames("ImageContent-IMAGE_NUMBERS");
export const LEFT_CLICK: string = representClassNames("ImageContent-LEFT_CLICK");
export const RIGHT_CLICK: string = representClassNames("ImageContent-RIGHT_CLICK");

const img_b_c = '#f3f3f3';

const vars = mk.newCSSVariableMap({
  img: [
    convertSvgToCssUrl(playSvg),
  ],
  bg: [
    UIC_CONTENT_BACKGROUND_COLOR,
    UIC_CONTENT_BACKGROUND_COLOR_DARK,
  ],
  buthov:  [ '#bcbcbc', '#3c3b3b' ],
  but:     [ '#f1f1f1', '#252525' ],
  quantum: [ '#272727', '#b8b4b4' ],
});

export const ROOT_HTML = `
<div class="${ROOT_CLASS}" draggable="false">
  <div>
    <div class="${LEFT_CLICK}">
      <div></div>
    </div>
  </div>
    <span><img class="${CONTENT_CLASS}"/></span>
  <div>
    <div class="${RIGHT_CLICK}">
      <div></div>
    </div>
  </div>
  <s>
    <div>
      <div class="${IMAGE_POSITION}"></div>/<div class="${IMAGE_NUMBERS}"></div>
    </div>
  </s>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
  padding: 40px 40px 40px 40px;
  background-color: ${vars.bg.asVar()};
  box-sizing: border-box;
}

.${ROOT_CLASS} > span
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 80px);
  width: calc(100% - 280px);
  padding: 0 10px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.${ROOT_CLASS} img[src]
{
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  border: 1px solid;
  border-color: ${img_b_c};
  box-sizing: border-box;
}

.${ROOT_CLASS} > div
{
  display: flex;
  justify-content: flex-start;
  height: 40px;
  width: 100%;
  pointer-events: none;
  overflow: hidden;
}

.${ROOT_CLASS} > div > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 0;
  transition: width 0.2s;
  border-radius: 50%;
  flex-shrink: 0;
}

.${BUTT_LEFT_CLASS} .${LEFT_CLICK},
.${BUTT_RIGHT_CLASS} .${RIGHT_CLICK}
{
  width: 40px;
  transition: width 0.3s;
  pointer-events: auto;
}

.${BUTT_LEFT_CLASS} > div > div,
.${BUTT_RIGHT_CLASS} > div > div
{
  background-color:  ${vars.but.asVar()};
}

.${ROOT_CLASS} > div > div:hover
{
  background-color: ${vars.buthov.asVar()};
}

.${ROOT_CLASS} > div > div > div
{
  height: 20px;
  width: 20px;
  background-image: ${vars.img.asVar()};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.${ROOT_CLASS} .${LEFT_CLICK}
{
  transform: scaleX(-1);
  margin-right: 2px;
}

.${ROOT_CLASS} .${RIGHT_CLICK} > div > div
{
  margin-left: 2px;
}

.${ROOT_CLASS} > div + span + div
{
  justify-content: flex-end;
}

.${ROOT_CLASS} > s
{
  display: none;
  justify-content: flex-end;
  height: 0px;
  width: 0px;
  text-decoration: none;
}

.${BUTT_LEFT_CLASS} > s,
.${BUTT_RIGHT_CLASS} > s
{
  display: flex;
}

.${ROOT_CLASS} > s > div
{
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  height: 0;
  color: ${vars.quantum.asVar()};
}

.${BUTT_LEFT_CLASS} > s > div,
.${BUTT_RIGHT_CLASS} > s > div
{
  height: 20px;
  transition: height 0.3s;
}
`);
