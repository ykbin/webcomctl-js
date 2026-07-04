import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("RightBlock");

export const ROOT_CLASS: string = representClassNames("RightBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("RightBlock-PORT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS}
{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
}
`);
