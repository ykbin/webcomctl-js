import ControlMaker from "@/lib/ControlMaker";
import { representClassNames } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

export const ROOT_CLASS: string   = representClassNames("JwtTabs-ROOT_CLASS");
export const TAB_CLASS: string    = representClassNames("JwtTabs-TAB_CLASS");
export const ACTIVE_CLASS: string = representClassNames("JwtTabs-ACTIVE_CLASS");

const mk = new ControlMaker("JwtTabs");
const vars = mk.newCSSVariableMap({
  BG2: [ "#ffffff", "#161b27" ],
  BG3: [ "#eef0f6", "#1e2535" ],
  BORDER: [ "rgba(0,0,0,0.08)", "rgba(255,255,255,0.08)" ],
  TEXT1: [ "#4e4e4e", "#dedede" ],
  TEXT2: [ "#5a6080", "#8b91a8" ],
});

const RADIUS_SM = "6px";
const SANS = "'Inter', system-ui, -apple-system, sans-serif";

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <button type="button" class="${TAB_CLASS} ${ACTIVE_CLASS}" data-tab="decode">Decode</button>
  <button type="button" class="${TAB_CLASS}" data-tab="encode">Encode</button>
  <button type="button" class="${TAB_CLASS}" data-tab="verify">Verify</button>
</div>
`;

export const CSS = [
`:root
{
  ${vars.toString(0)};
}`,

`${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}`,

`.${ROOT_CLASS} {
  display: flex; gap: 2px;
  background: ${vars.BG2.asVar()};
  border: 1px solid ${vars.BORDER.asVar()};
  border-radius: ${RADIUS_SM};
  padding: 3px;
  width: fit-content;
  margin-bottom: 24px;
}`,

`.${TAB_CLASS} {
  font-family: ${SANS};
  font-size: 13px;
  font-weight: 500;
  padding: 6px 18px;
  border-radius: 5px;
  border: none;
  background: transparent;
  color: ${vars.TEXT2.asVar()};
  cursor: pointer;
  transition: .15s;
}`,

`.${TAB_CLASS}:hover { color: ${vars.TEXT1.asVar()}; }`,

`.${TAB_CLASS}.${ACTIVE_CLASS} {
  background: ${vars.BG3.asVar()};
  color: ${vars.TEXT1.asVar()};
  box-shadow: 0 1px 3px rgba(0,0,0,.4);
}`,
];
