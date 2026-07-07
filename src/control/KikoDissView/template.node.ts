import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

import arrowSvg from "./arrow.svg";

const mk = new ControlMaker("KikoDissView");

const ARROW = convertSvgToCssUrl(arrowSvg);

const imgbg =  '#f3f3f3';

const vars = mk.newCSSVariableMap({
  viewbg: [ 'rgb(172 172 172 / 80%)' ],
});

export const ROOT_CLASS: string = representClassNames("KikoDissView-ROOT_CLASS");
export const IMAGE_CLASS: string = representClassNames("KikoDissView-IMAGE_CLASS");
export const SHOW_CLASS: string = representClassNames("KikoDissView-SHOW_CLASS");
export const SHOW_BUTT_CLASS: string = representClassNames("KikoDissView-SHOW_BUTT_CLASS");
export const SHOW_BUTT1_CLASS: string = representClassNames("KikoDissView-SHOW_BUTT1_CLASS");
export const SHOW_BUTT2_CLASS: string = representClassNames("KikoDissView-SHOW_BUTT2_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}" draggable="false">
  <span>
    <div><div></div></div>
    <img class="${IMAGE_CLASS}" src="">
    <div><div></div></div>
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

.${ROOT_CLASS} > span
{
  min-width: 660px;
}

.${ROOT_CLASS}
{
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${vars.viewbg.asVar()};
  overflow: auto;
}

.${SHOW_CLASS},
${SHOW_BUTT_CLASS},
.${SHOW_BUTT1_CLASS},
.${SHOW_BUTT2_CLASS}
{
  display: block;
}


.${ROOT_CLASS} > span
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 510px;
  padding: 30px;
  cursor: pointer;
}

.${ROOT_CLASS} > span > img
{
  cursor: default;
}

.${ROOT_CLASS} > span > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  padding-right: 9px;
  border-radius: 50%;
  flex-shrink: 0;
  visibility: hidden;
}

.${SHOW_BUTT_CLASS} > span > div,
.${SHOW_BUTT1_CLASS} > span > div:first-child,
.${SHOW_BUTT2_CLASS} > span > div:last-child
{
  visibility: visible;
}

.${ROOT_CLASS} > span > div:hover
{
  background-color: #7d7d7d5e;
}

.${ROOT_CLASS} > span > div > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
}

.${ROOT_CLASS} > span > div > div
{
  width: 70px;
  height: 70px;
  background-image: ${ARROW};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.${ROOT_CLASS} > span > div + img + div
{
  padding-right: 0;
  padding-left: 9px;
}

.${ROOT_CLASS} > span > div + img + div > div
{
  transform: scaleX(-1);
}

.${ROOT_CLASS} > span > img
{
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  border: 2px solid;
  border-color: ${imgbg};
  user-select: none;
  flex-shrink: 0;
}

.${ROOT_CLASS} > span > img
{
  max-width: calc(100% - 220px);
}
`);
