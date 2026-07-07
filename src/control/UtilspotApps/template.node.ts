import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { TOOLBAR_FONT_FAMALY } from "@/lib/WickedTheme";

const mk = new ControlMaker("UtilspotApps");

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

const cent_nth2_mob = '#d6d6d6';

const vars = mk.newCSSVariableMap({
  cent_nth2: ['#f3f3f3', '78787826'],
  link_col_hov: ['#555555', '#c1c1c1c2'],
  link: ['#2d2d2d', '#ffffffab'],
});

export const ROOT_CLASS: string = representClassNames("UtilspotApps-ROOT_CLASS");
export const CENT_CLASS: string = representClassNames("UtilspotApps-CENT_CLASS");
export const MAIN_CLASS: string = representClassNames("UtilspotApps-MAIN_CLASS");
export const LOGO_CLASS: string = representClassNames("UtilspotApps-LOGO_CLASS");
export const ICON_CLASS: string = representClassNames("UtilspotApps-ICON_CLASS");
export const TITLE_CLASS: string = representClassNames("UtilspotApps-TITLE_CLASS");
export const DESC_CLASS: string = representClassNames("UtilspotApps-DESC_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}" draggable="false">
  <div class="${CENT_CLASS}"></div>
</div>
`;

export const ITEM_HTML = `
<div>
  <a class="${MAIN_CLASS}">
    <span class="${LOGO_CLASS}"></span>
    <div>
      <div>
        <div class="${ICON_CLASS}"></div>
        <span class="${TITLE_CLASS} notranslate" translate="no"></span>
      </div>
      <div class="${DESC_CLASS}"></div>
    </div>
  </a>
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

[data-theme="light"] div.${CENT_CLASS} a > span > img:nth-child(2),
[data-theme="dark"] div.${CENT_CLASS} a > span > img:nth-child(1),
[data-theme="dark"] div.${CENT_CLASS} a > div > div > div > img:nth-child(1),
[data-theme="light"] div.${CENT_CLASS} a > div > div > div > img:nth-child(2)
{
  display: none;
}

.${ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: border-box;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${CENT_CLASS}
{
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: initial;
  width: inherit;
  line-height: 1.5em;
  text-align: left;
  font-family: ${TOOLBAR_FONT_FAMALY};
  overflow: hidden;
}

.${CENT_CLASS} a
{
  display: flex;
  max-width: 1500px;
  padding: 75px 0;
  margin: 0px 20px;
}

.${CENT_CLASS} a
{
  color: ${vars.link.asVar()};
  cursor: pointer;
  text-decoration: none;
}

.${CENT_CLASS} a:hover
{
  color: ${vars.link_col_hov.asVar()};
}

.${CENT_CLASS} > div
{
  display: flex;
  justify-content: center;
  width: inherit;
  height: initial;
}

.${CENT_CLASS} > div:nth-child(2n) a
{
  flex-direction: row-reverse;
}

.${CENT_CLASS} > div:nth-child(1n + 2)
{
  border-top: 1px solid ${vars.cent_nth2.asVar()};
}

.${CENT_CLASS} a > span
{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 310px;
  width: 460px;
  flex-shrink: 0;
}

.${CENT_CLASS} a > span > img
{
  height: 90%;
  width: 90%;
}

.${CENT_CLASS} a > span > img
{
  transition: width, height;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}

.${CENT_CLASS} a:hover > span > img
{
  height: 100%;
  width: 100%;
  transition: width, height;
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.15s;
}

.${CENT_CLASS} a > div
{
  width: 550px;
  padding: 20px;
  margin-left: 40px;
}

.${CENT_CLASS} > div:nth-child(2n) a > div
{
  margin-right: 40px;
  margin-left: auto;
}

.${CENT_CLASS} a > div > div
{
  display: flex;
}

.${CENT_CLASS} a > div span
{
  display: block;
  line-height: 1em;
  font-size: 40px;
  padding-left: 10px;
  font-weight: 700;
  font-family: math;
}

.${CENT_CLASS} a > div > div > div
{
  height: 40px;
}

.${CENT_CLASS} a > div img
{
  align-self: flex-start;
  height: 40px;
}

.${CENT_CLASS} a > div > div + div
{
  display: block;
  font-size: 18px;
  margin-top: 10px;
  line-height: 30px;
  padding-left: 20px;
}

@media (width < 1040px)
{
  .${CENT_CLASS} a > div
  {
    width: 350px;
    padding-top: 30px;
  }
  footer
  {
    min-width: 855px;
  }
}

@media (width <= 840px)
{
  .${CENT_CLASS} a
  {
    flex-direction: column;
    align-items: center;
  }
  .${CENT_CLASS} > div:nth-child(2n) a
  {
    flex-direction: column;
    align-items: center;
  }
  .${CENT_CLASS} a > div
  {
    width: 670px;
  }
  .${CENT_CLASS} a > span
  {
    height: 400px;
    width: 550px;
  }
}

@media (device-width <= 550px)
{
  .${ROOT_CLASS} div.${CENT_CLASS} > div:nth-child(1n + 2)
  {
    border-top: 1px solid ${cent_nth2_mob};
  }
  .${ROOT_CLASS} div.${CENT_CLASS} a
  {
    flex-direction: column;
    height: auto;
    width: inherit;
    padding: 60px 0px;
  }
  .${ROOT_CLASS} div.${CENT_CLASS} a:hover
  {
    color: inherit;
  }
  .${CENT_CLASS} a:hover > span > img
  {
    transform: none;
    transition-duration: inherit;
    transition-timing-function: inherit;
    transition-delay: inherit;
  }
  .${CENT_CLASS} a > span
  {
    height: auto;
    width: inherit;
  }
  .${ROOT_CLASS} div.${CENT_CLASS} a > div
  {
    width: inherit;
    margin: 0px;
  }
  .${ROOT_CLASS} div.${CENT_CLASS} a > div img
  {
    height: 70px;
  }
  .${ROOT_CLASS} div.${CENT_CLASS} a > div span
  {
    margin-top: 5px;
    font-size: 60px;
  }
  .${CENT_CLASS} a > div > div + div
  {
    font-size: 28px;
    line-height: 42px;
  }
}

`);
