import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { UIC_START_BACKGROUND_COLOR } from "@/lib/WickedTheme";
import { UIC_START_BACKGROUND_COLOR_DARK } from "@/lib/WickedTheme";

const mk = new ControlMaker("DocVer1");

export const ROOT_CLASS: string = representClassNames("DocVer1-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("DocVer1-PORT_CLASS");

const vars = mk.newCSSVariableMap({
  rootBg: [ UIC_START_BACKGROUND_COLOR, UIC_START_BACKGROUND_COLOR_DARK ],
});

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
  cursor: default;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  background-color: ${vars.rootBg.asVar()};
}
`);
