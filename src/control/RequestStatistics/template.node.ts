import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";

const mk = new ControlMaker("RequestStatistics");

const vars = mk.newCSSVariableMap({
  stat_list_nth3: [ "#d6d6d6", "#727272" ],
  stat_link: [ "black", "#bebebe" ],
  stat_link_hov: [ "#f5f5f5", "#212020" ],
  stat_title: [ "#555555", "#bebebe" ],
  stat_list_bor: [ "#d6d6d6", "#727272" ],
  stat_list_col: [ "#4e4e4e", "#bebebe" ],
  stat_link_col_hov: [ "#555555", "#929292" ],
});

export const ROOT_CLASS: string = representClassNames("RequestStatistics-ROOT_CLASS");
export const LIST_CLASS: string = representClassNames("RequestStatistics-LIST_CLASS");
export const URL_OFF_CLASS: string = representClassNames("RequestStatistics-URL_OFF_CLASS");
export const URL_CLASS: string = representClassNames("RequestStatistics-URL_CLASS");
export const METHOD_CLASS: string = representClassNames("RequestStatistics-METHOD_CLASS");
export const COUNTER_CLASS: string = representClassNames("RequestStatistics-COUNTER_CLASS");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} notranslate" translate="no">
  <span>
    <u>Statistics</u>
    <div class="${LIST_CLASS}"></div>
  </span>
</div>
`;

export const ITEM_HTML = `
<span>
  <div><a class="${URL_CLASS}"></a></div>
  <div class="${METHOD_CLASS}"></div>
  <div class="${COUNTER_CLASS}"></div>
</span>
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
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px 20px 30px;
  line-height: 24px;
  font-size: 15px;
  text-align: left;
  overflow: hidden;
  box-sizing: border-box;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} > span
{
  display: block;
  width: 100%;
  max-width: 1200px;
}

.${ROOT_CLASS} > span > div > span
{
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 200px 200px;
  margin-bottom: 5px;
  height: 32px;
}

.${ROOT_CLASS} > span u
{
  display: block;
  text-decoration: none;
  margin-left: 10%;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  color: ${vars.stat_title.asVar()};
}

.${ROOT_CLASS} > span div span > div
{
  display: flex;
  align-items: center;
  height: 100%;
  padding: 3px 15px;
  border-top: 1px solid;
  border-left: 1px solid;
  border-bottom: 1px solid;
  border-color: ${vars.stat_list_bor.asVar()};
  color: ${vars.stat_list_col.asVar()};
  overflow: hidden;
}

.${ROOT_CLASS} > span div span > div:first-child
{
  padding: 3px 5px;
}

div.${ROOT_CLASS} a
{
  display: block;
  width: 100%;
  padding: 0px 10px;
  text-decoration: none;
  color: ${vars.stat_link.asVar()};
  overflow-wrap: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

${URL_OFF_CLASS}
{
  pointer-events: none;
}

div.${ROOT_CLASS} a:hover
{
  color: ${vars.stat_link_col_hov.asVar()};
  background-color: ${vars.stat_link_hov.asVar()};
}

.${ROOT_CLASS} > span div span > div:nth-child(3n)
{
  border-right: 1px solid ${vars.stat_list_nth3.asVar()};
}

@media (width < 850px)
{
  div.${ROOT_CLASS} > span > div > span
  {
    grid-template-columns: 1fr 0.25fr 0.25fr;
  }
}

@media (device-width <= 550px)
{
 div.${ROOT_CLASS} > span > div > span
 {
   height: 50px;
 }
 div.${ROOT_CLASS} > span div span > div
 {
   font-size: 24px;
 }
 .${ROOT_CLASS} > span div span > div:first-child
 {
   padding: 3px 10px;
 }
}

`);
