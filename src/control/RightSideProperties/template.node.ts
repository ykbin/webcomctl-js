import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("RightSideProperties");

const vars = mk.newCSSVariableMap({
  nav_but_bg: [ 'white', 'rgb(23, 23, 26)' ],
  wsock_rpanel_bor: [ '#f3f0f0', ' #c2c2c240' ],
});

export const ROOT_CLASS: string = representClassNames("RightSideProperties-ROOT_CLASS");
export const PORT_CLASS: string = representClassNames("RightSideProperties-PORT_CLASS");
export const ANIME: string = representClassNames("RightSideProperties-ANIME");
export const SHOW: string = representClassNames("RightSideProperties-SHOW");

export const ROOT_HTML = `
  <div class="${ROOT_CLASS}">
    <div>
      <span><div class="${PORT_CLASS}"></div></span>
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

.${PORT_CLASS}
{
  display: none;
}

.${ROOT_CLASS}.${SHOW} > div  > span > div,
.${ROOT_CLASS}.${ANIME}.${SHOW} > div  > span > div,
.${ROOT_CLASS}.${ANIME} > div  > span > div
{
  display: flex;
}

div.${SHOW}
{
  display: flex;
  width: auto;
  flex-shrink: 0;
}

.${ROOT_CLASS}
{
  position: sticky;
  top: 0;
  z-index: 1;
  overflow: hidden;
}

.${ROOT_CLASS} > div
{
  display: flex;
  flex-direction: row-reverse;
}

.${SHOW}
{
  border-left: 1px solid ${vars.wsock_rpanel_bor.asVar()};
}

.${ROOT_CLASS} > div > span
{
  display: block;
  width: 0;
  padding-top: 5px;
  flex-shrink: 0;
  overflow: hidden;
  background-color: ${vars.nav_but_bg.asVar()};
}

.${ROOT_CLASS} > div  > span > div
{
  align-items: center;
  width: 200px;
  padding: 0px 10px 0px 20px;
  overflow: hidden;
}

.${ROOT_CLASS} > span > div:last-child
{
  margin-bottom: 0px;
}

.${ROOT_CLASS} > div > span > div h5
{
  width: 100px;
}

.${ROOT_CLASS} > div > span > div span
{
  padding-left: 5px;
}

.${ANIME} > div  > span
{
  transition: width 0.3s;
}

.${SHOW} > div  > span
{
  width: 200px;
}

.${ANIME}.${SHOW} > div  > span
{
  transition: width 0.3s;
}

@media (device-width < 550px)
{
  div.${ROOT_CLASS}
  {
    display: flex;
    justify-content: flex-end;
    width: 0px;
    margin-top: 40px;
  }
  div.${ROOT_CLASS} > div
  {
    height: calc(100% - 55px);
    padding: 40px 0px 0px 0px;
    top: 140px;
    margin-top: 53px;
  }
  .${ROOT_CLASS} > div > span
  {
    padding-top: 20px;
  }
}
`);
