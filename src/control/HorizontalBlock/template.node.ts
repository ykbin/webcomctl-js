import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("HorizontalBlock");

export const ROOT_CLASS: string = representClassNames("HorizontalBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("HorizontalBlock-PORT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}
`);
