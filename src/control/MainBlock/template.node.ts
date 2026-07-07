import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

const mk = new ControlMaker("MainBlock");

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

export const ROOT_CLASS: string = representClassNames("MainBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("MainBlock-PORT_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div class="${PORT_CLASS}"></div>
</div>
`;

export const CSS = splitCSS(`
.${ROOT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCTHBG_CLR};
  border-radius: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-track,
.${ROOT_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCTRBG_CLR};
}

.${ROOT_CLASS}
{
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${ROOT_CLASS} > div
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 685px;
}
`);
