import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("UtilspotMainBlock");

const sc_th_bg = '#b5b5b5c7';
const sc_tr_bg = "transparent";

const vars = mk.newCSSVariableMap({
});

export const ROOT_CLASS: string = representClassNames("UtilspotMainBlock-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("UtilspotMainBlock-PORT_CLASS");
export const SCROLL_CLASS: string = representClassNames("UtilspotMainBlock-SCROLL_CLASS");

export const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <div class="${SCROLL_CLASS} ${PORT_CLASS}"></div>
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

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} h4
{
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  font-weight: 400;
}

.${ROOT_CLASS}
{
  position: fixed;
  width: 100%;
  height: 100%;
}

.${SCROLL_CLASS}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${SCROLL_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${SCROLL_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${sc_th_bg};
  border-radius: 10px;
}

.${SCROLL_CLASS}::-webkit-scrollbar-corner,
.${SCROLL_CLASS}::-webkit-scrollbar-track
{
  background-color: ${sc_tr_bg};
}

@media (device-width <= 550px)
{
 .${ROOT_CLASS}
  {
    font-size: 37px;
  }
  .${SCROLL_CLASS}
  {
    min-width: auto;
  }
}
`);
