import { GITHUB_WASMUX_URL } from "@/lib/Links";
import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("WebWasmuxContent");

const color_a = '#0969da';

const vars = mk.newCSSVariableMap({
  color: ['#353535','#dcdcdc'],
});

export const ROOT_CLASS: string = representClassNames("WebWasmuxContent-ROOT_CLASS");

export const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <h2>Wasmux</h2>
    <ul>
      <li><a href="${GITHUB_WASMUX_URL}">Wasmux GitHub</a></li>
      <li>Our service makes it easy to convert various programming languages into code that browsers can understand. No matter which language you're working with, our tool automatically transforms your code so it displays and runs correctly in any modern web environment.</li>
    </ul>
  </div>
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
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  color: ${vars.color.asVar()};
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} > *
{
  width: 700px;
  margin: 0 auto;
}

.${ROOT_CLASS} > h2
{
  padding: 20px 0;
  font-size: 40px;
}

.${ROOT_CLASS} a
{
  color: ${color_a};
}

.${ROOT_CLASS} ul
{
  padding: 0;
  list-style-type: none;
}

.${ROOT_CLASS} ul > li
{
  margin-bottom: 10px;
}

.${ROOT_CLASS} ul > li::first-letter
{
  padding-left: 5px;
}

@media (device-width < 550px)
{
}
`);
