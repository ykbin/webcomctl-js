import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { convertSvgToCssUrl } from "@/lib/SVG";

import CopySvg from "./Copy.svg";
import CopyDarkSvg from "./CopyDark.svg";

const mk = new ControlMaker("Leb128Content");

const Copy_IMG = convertSvgToCssUrl(CopySvg);
const Copy2_IMG = convertSvgToCssUrl(CopyDarkSvg);
const INPUT_BOR = "#dbdbdb";
const ERROR_COLOR = "red";
const MAIN_FONT = "monospace;";
const IMPUT_FONT = "monospace";
const SELECT_FONT = "sans-serif";
const BOR_LINK = "transparent";

const vars = mk.newCSSVariableMap({
  imput_bg: ['white', 'rgb(23, 23, 26)'],
  font_color: ['black', 'white'],
  input_bor_focus: ['#1b74e4', '#a4cefe'],
  Copy_icon: [Copy_IMG, Copy2_IMG],
  link_hover:['#86868629', '#86868654'],
});

export const ROOT_CLASS: string = representClassNames("Leb128Content-ROOT_CLASS");
export const Field_Block: string = representClassNames("Leb128Content-Field_Block");
export const Field_Imput_Group: string = representClassNames("Leb128Content-Field_Imput_Group");
export const Field_Imput: string = representClassNames("Leb128Content-Field_Imput");
export const ERROR_CLASS: string = representClassNames("Leb128Content-ERROR_CLASS");
export const Config: string = representClassNames("Leb128Content-Config");
export const Hidden: string = representClassNames("Leb128Content-Hidden");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <h1>LEB128 Converter</h1>
  <div class="${Field_Block}">
    <div class="${Field_Imput_Group}">
      <label for="decimal-input">Decimal:</label>
      <div class="${Field_Imput}">
        <input type="number" id="decimal-input" min="0" step="1" placeholder="Enter decimal number" tabindex="1">
        <a href="#" id="decimal-copy" class="copy-link" tabindex="-1" aria-label="Copy decimal value"></a>
      </div>
    </div>
    <div class="${Field_Imput_Group}">
      <label for="leb128-input">LEB128:</label>
      <div class="${Field_Imput}">
        <input type="text" id="leb128-input" placeholder="Enter LEB128 value" tabindex="2">
        <a href="#" id="leb128-copy" class="copy-link" tabindex="-1" aria-label="Copy LEB128 value"></a>
      </div>
    </div>
    <div class="${ERROR_CLASS} ${Hidden}">Invalid array length</div>
  </div>
  <div class="${Config}">
    <label for="output-format">LEB128 Output Format:</label>
    <select id="output-format" tabindex="3">
        <option value="hex-space">Hex (space-separated)</option>
        <option value="dec-comma">Decimal (comma-separated)</option>
        <option value="hex-0x-comma">Hex 0xFF (comma-separated)</option>
        <option value="hex-string">Hex string (no separators)</option>
    </select>
  </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-family: ${MAIN_FONT};
  color: ${vars.font_color.asVar()};
}

.${ROOT_CLASS} > h1
{
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
}

.${Field_Block}
{
  width: 100%;
  max-width: 500px;
}

.${Field_Imput_Group}
{
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.${Field_Imput_Group} > label,
.${Config} > label
{
  margin-bottom: 0.5rem;
}

.${Field_Imput}
{
  display: flex;
  align-items: center;
}

.${Field_Imput} > input
{
  font-family: ${IMPUT_FONT};
  font-size: 1rem;
  padding: 0.5rem;
  border: 2px solid;
  border-color: ${INPUT_BOR};
  border-radius: 4px;
  border-radius: 7px;
  color: ${vars.font_color.asVar()};
  background-color: ${vars.imput_bg.asVar()};
  flex-grow: 1;
}

.${Field_Imput} > input[type=number]::-webkit-inner-spin-button,
.${Field_Imput} > input[type=number]::-webkit-outer-spin-button
{
  margin: 0;
  appearance: none;
}

.${Field_Imput} > input:focus
{
  outline: none;
  border-color: ${vars.input_bor_focus.asVar()};
}

.${Field_Imput} > a
{
  height: 33px;
  width: 33px;
  margin-left: 0.5rem;
  border-radius: 5px;
  border-top: 3px solid ${BOR_LINK};
  border-bottom: 3px solid ${BOR_LINK};
  text-decoration: none;
  background-image: ${vars.Copy_icon.asVar()};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
}

.${Field_Imput} > a:hover
{
  background-color: ${vars.link_hover.asVar()};
}

.${ERROR_CLASS}
{
  color: ${ERROR_COLOR};
  margin-top: 0.5rem;
}

.${Hidden}
{
  visibility: hidden;
}

.${Config}
{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.${Config} > select
{
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-family: ${SELECT_FONT};
  font-size: 1.1rem;
  color: ${vars.font_color.asVar()};
  background-color: ${vars.imput_bg.asVar()};
}

`);
