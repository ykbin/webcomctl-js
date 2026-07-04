import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("VerticalBlock");

export const ROOT_CLASS: string = representClassNames("VerticalBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("VerticalBlock-PORT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 670px;
  overflow: hidden;
}
`);
