import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("ViewBlock");

export const ROOT_CLASS: string = representClassNames("ViewBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("ViewBlock-PORT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS}
{
  display: flex;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.${ROOT_CLASS} > div
{
  min-width: 285px;
  flex-shrink: 0;
  overflow: hidden;
}

.${ROOT_CLASS} > div:last-child
{
  flex-grow: 1;
  flex-shrink: initial;
}

.${ROOT_CLASS} > div:last-child > div
{
  border: none;
  border-right: none;
}
`);
