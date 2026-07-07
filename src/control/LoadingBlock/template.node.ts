import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import unloadingSvg from "./unloading.svg";

const mk = new ControlMaker("LoadingBlock");

const BG_IMG = convertSvgToCssUrl(unloadingSvg);
const BG_CLR = '#061b4366';

export const ROOT_CLASS: string = representClassNames("LoadingBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("LoadingBlock-PORT_CLASS");
export const UNLOAD_CLASS: string = representClassNames("LoadingBlock-UNLOAD_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div class="${PORT_CLASS}"></div>
  <s class="${UNLOAD_CLASS}"><span></span></s>
</div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS},
.${PORT_CLASS}
{
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
}

.${UNLOAD_CLASS} > s
{
  text-decoration: none;
}

.${ROOT_CLASS} > s:not(.${UNLOAD_CLASS})
{
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 3;
  background-color: ${BG_CLR};
}

.${UNLOAD_CLASS}
{
  display: none;
}

.${ROOT_CLASS} > s > span
{
  display: block;
  height: 100px;
  width: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${BG_IMG};
}
`);
