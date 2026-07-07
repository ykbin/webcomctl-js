import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { convertSvgToCssUrl } from "@/lib/SVG";

import { COMMON_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";

import fileUploadSvg from "./file-upload.svg";

const mk = new ControlMaker("Loading");

const MAIN_IMG = convertSvgToCssUrl(fileUploadSvg);
const BGROUND_COLOR = '#1e1e1e91';

export const ROOT_CLASS: string = representClassNames("Loading-ROOT_CLASS");
export const SHOW_CLASS: string = representClassNames("Loading-SHOW_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div></div>
</div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS}
{
  display: none;
}

.${SHOW_CLASS}
{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 555px;
  z-index: 3;
  background-color: ${BGROUND_COLOR};
}

.${SHOW_CLASS} > div
{
  width: 100%;
  height: 100%;
  max-width: 160px;
  min-width: 160px;
  background-image: ${MAIN_IMG};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${SHOW_CLASS} > div
  {
    width: 320px;
    height: 320px;
  }
}
`);
