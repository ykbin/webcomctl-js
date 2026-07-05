import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_FONT_SANS } from "@/lib/WickedTheme";

const mk = new ControlMaker("WikFooter");

const vars = mk.newCSSVariableMap({
  bg:     [ '#f9f9f9', '#101010'  ],
  border: [ '#eaedf1', '#3f3f3f' ],
  clr:    [ '#6a6a6a', '#9a9a9a' ],
});

const LINK_COLOR = '#5063b1';

export const ROOT_CLASS: string = representClassNames("WikFooter-ROOT_CLASS");
export const VERSION_CLASS: string = representClassNames("WikFooter-VERSION_CLASS");

export const ROOT_HTML = `
<footer class="${ROOT_CLASS} notranslate" translate="no">
  <a href="\${ENV:HOST_URL}" draggable="false">\${ENV:HOST}</a>
  <span class="${VERSION_CLASS}">v\${ENV:VERSION}</span>
</footer>
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

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS}
{
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  border-top: 1px solid ${vars.border.asVar()};
  background-color: ${vars.bg.asVar()};
  color: ${vars.clr.asVar()};
  font-family: ${TOOLBAR_FONT_SANS};
  font-size: 12px;
  user-select: none;
}

.${ROOT_CLASS} a
{
  color: ${LINK_COLOR};
  text-decoration: none;
}

.${ROOT_CLASS} a:hover
{
  text-decoration: underline;
}

.${VERSION_CLASS}
{
  opacity: 0.8;
}
`);
