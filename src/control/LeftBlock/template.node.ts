import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("LeftBlock");

export const ROOT_CLASS: string = representClassNames("LeftBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("LeftBlock-PORT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS}
{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  container-name: function;
  container-type: inline-size;
}

@container function (width < 240px)
{
  .${ROOT_CLASS} > div
  {
    display: none;
  }
}
`);
