import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("UtilspotScrollBlock");

const sc_th_bg = '#b5b5b5c7';
const sc_tr_bg = 'transparent';

const vars = mk.newCSSVariableMap({
});

export const ROOT_CLASS: string = representClassNames("UtilspotScrollBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("UtilspotScrollBlock-PORT_CLASS");

export const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <div class="${PORT_CLASS}">
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
  position: fixed;
  width: 100%;
  height: 100%;
  font-family: Helvetica, Arial, sans-serif;
  overflow: auto;
  box-sizing: border-box;
}

.${PORT_CLASS}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 1040px;
  box-sizing: border-box;
}

.${ROOT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${sc_th_bg};
  border-radius: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-corner,
.${ROOT_CLASS}::-webkit-scrollbar-track
{
  background-color: ${sc_tr_bg};
}

@media (width < 1040px)
{
  .${PORT_CLASS}
  {
    min-width: 855px;
  }
}

@media (width <= 900px)
{
  div.${PORT_CLASS}
  {
    min-width: 670px;
  }
}

@media (device-width <= 550px)
{
  div.${PORT_CLASS}
  {
    min-width: auto;
  }
}
`);
