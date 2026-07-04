import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("TripleBlock");

const vars = mk.newCSSVariableMap({
});

export const ROOT_CLASS: string = representClassNames("TripleBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("TripleBlock-PORT_CLASS");

export const ROOT_HTML = `
  <div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
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
  display: flex;
  width: inherit;
  height: 100%;
  min-width: 685px;
  flex-direction: column;
}
`);
