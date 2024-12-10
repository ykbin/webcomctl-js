import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('DBC-left', import.meta.url);

const vars = mk.newCSSVariableMap({
  dbc_split_norm: ['url(/dbc-online/splitter.svg)'],

  dbc_split_hov: ['url(/dbc-online/splitter-hover.svg)'],

  left_but_img: ['url(/dbc-online/left-but.svg)'],

  left_but_hov_img: ['url(/dbc-online/left-but-hover.svg)'],

  sep_bg: ['linear-gradient(to bottom,transparent 0%, #bcbcbc30 35% 85%, transparent 100%)'],

  sep_hov_bg: ['linear-gradient(to bottom,transparent 0%, #7d7d7d30 35% 85%, transparent 100%)'],

  button_bg: ['#dddddd40'],
  /*light*/

  left_col: ['#494949','#ffffff9e'],

  left_bg: ['#ffffff','rgb(23, 23, 26)'],

  left_grad: ['linear-gradient(white 0% 69%, #ff000000 100%)','linear-gradient(rgb(23, 23, 26) 0% 69%, #ff000000 100%)'],

  left_fog_grad: ['linear-gradient(#ffffff00, white)','linear-gradient(#ffffff00, rgb(23, 23, 26))'],

  dbc_doc_icon: ['url(/dbc-online/document.svg)','url(/dbc-online/document2.svg)'],

  dbc_mes_pseudo_icon:  ['url(/dbc-online/lock_message.svg)','url(/dbc-online/lock_message_dark.svg)'],

  dbc_group_icon: ['url(/dbc-online/group.svg)','url(/dbc-online/group2.svg)'],

  dbc_sig_icon: ['url(/dbc-online/signal.svg)', 'url(/dbc-online/signal2.svg)'],

  dbc_mes_icon: ['url(/dbc-online/message.svg)','url(/dbc-online/message2.svg)'],

  dbc_sig_pseudo_icon: ['url(/dbc-online/lock_signal.svg)','url(/dbc-online/lock_signal_dark.svg)'],

  mes_pseudo_bor: ['#470000e3','#a77d7de0'],

  mes_pseudo_col: ['#470000e3','#a77d7de0'],

  tree_list_bor: ['black','white'],

  tree_list_col: ['black','white'],

  tree_act_col: ['black','#eeeeee'],

  mes_pseudo_list_col: ['#684a4acc','#ffd5d570'],

  mes_pseudo_list_bor: ['#684a4acc','#ffd5d570'],

  left_name_hov: ['#e9e9e9', '#c1c1c126'],
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "NODE-GROUP",
  "NODE-SIGNAL",
  "NODE-MESSAGE",
  "NODE-MESSAGE-PSEUDO",
  "dbc-bn-nav",
  "dbc-tree",
  "dbc-tree-active",
  "dbc-panel-separator",
  "dbc-state-collapse",
  "dbc-state-expand",
  "dbc-state-none",
  "dbc-node-document",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">

  <s>
    <div>
      <div class="${clss.dbc-bn-nav}"></div>
    </div>
  </s>

  <nav class="${clss.dbc-tree}"></nav>

  <div class="${clss.dbc-panel-separator}"><div></div></div>

  <span><div></div></span>

</div>
`);

mk.newCSS('CSS', `
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${clss.ROOT_CLASS}
{
  display: grid;
  grid-template-rows: 35px auto min-content;
  grid-template-columns: auto 10px;
  grid-template-areas:
  'header header'
  'content stick'
  'footer footer';
  width: inherit;
  grid-area: left;
  align-self: start;
  position: sticky;
  top: 0px;
  height: inherit;
  max-height: calc(100vh - 143px);
  min-height: 400px;
  overflow-y: hidden;
  overflow-x: hidden;
  font-family: "Roboto","Arial","monospace";
  color: ${vars.left_col.asVar()};
  background-color: ${vars.left_bg.asVar()};
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > nav
{
  grid-area: content;
  padding: 30px 10px 20px 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-shrink: 0;
}

div.${clss.ROOT_CLASS} nav div s h2
{
  display: block;
  font-weight: 500;
  overflow-wrap: normal;
  white-space: nowrap;
}

div[class*="dbc-state-"] > s
{
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 7px;
  user-select: none;
}

div.${clss.ROOT_CLASS} > nav div > s + span
{
  padding-left: 10px;
  display: block;
}

div.${clss.ROOT_CLASS} nav div > s > h2 > s
{
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  flex-shrink: 0;
}

.${clss.dbc-node-document}  > s > h2 > s
{
  background-image: ${vars.dbc_doc_icon.asVar()};
}

.${clss.NODE-MESSAGE} > s > h2 > s
{
  background-image: ${vars.dbc_mes_icon.asVar()};
}

div.${clss.ROOT_CLASS} nav div.${clss.NODE-MESSAGE-PSEUDO} > s > h2 > s
{
  background-image: ${vars.dbc_mes_pseudo_icon.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.NODE-MESSAGE-PSEUDO} div.${clss.NODE-SIGNAL} > s > h2 > s
{
  background-image: ${vars.dbc_sig_pseudo_icon.asVar()};
}

body div.${clss.ROOT_CLASS} nav .${clss.NODE-MESSAGE-PSEUDO} s > h2 > div
{
  color: ${vars.mes_pseudo_list_col.asVar()};
}

div.${clss.ROOT_CLASS} nav div.${clss.NODE-MESSAGE-PSEUDO} s h2:hover 
{
  background-color: ${vars.mes_pseudo_hov_bg.asVar()};
}

.${clss.NODE-GROUP} > s > h2 > s
{
  background-image: ${vars.dbc_group_icon.asVar()};
}

.${clss.NODE-SIGNAL} > s > h2 > s
{
  background-image: ${vars.dbc_sig_icon.asVar()};
}

div.${clss.ROOT_CLASS} nav div > s > h2 > div
{
  flex-shrink: 0;
  text-overflow: ellipsis;
  padding-right: 5px;
}

div.${clss.ROOT_CLASS} nav div.${clss.dbc-tree-active} > s > h2 > div
{
  color: ${vars.tree_act_col.asVar()};
  font-weight: 600;
  padding: 0px;
}

div.${clss.ROOT_CLASS} nav > div s  h2
{
  display: flex;
  align-items: center;
  font-size: 1.02em;
  flex-shrink: 0;
  margin-left: 7px;
}

div.${clss.ROOT_CLASS} nav div s h2:hover
{
  background-color: ${vars.left_name_hov.asVar()};
}

div.${clss.ROOT_CLASS} > nav div s b
{
  display: flex;
  width: 15px;
  height: 15px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

div.${clss.ROOT_CLASS} > nav div.${clss.dbc-state-none} > s b
{
  pointer-events: none;
  visibility: hidden;
}

div.${clss.ROOT_CLASS} > nav div s b div
{
  display: block;
  width: 7px;
  height: 7px;
  border-bottom: 1px solid;
  border-left: 1px solid;
}

div.${clss.ROOT_CLASS} > nav div.${clss.dbc-state-expand} > s b div
{
  transform: rotate(315deg);
}

div.${clss.ROOT_CLASS} > nav div.${clss.dbc-state-collapse} > s b div
{
  transform: rotate(228deg);
}

div.${clss.ROOT_CLASS} > nav div.${clss.NODE-MESSAGE-PSEUDO} > s b div
{
  border-color: ${vars.mes_pseudo_list_bor.asVar()};
}

div.${clss.ROOT_CLASS} > nav div.${clss.NODE-MESSAGE-PSEUDO} s b:hover div
{
  border-color: ${vars.mes_pseudo_bor.asVar()};
  color: ${vars.mes_pseudo_bor.asVar()};
}

div.${clss.ROOT_CLASS} > nav div s b:hover div
{
  border-color: ${vars.tree_list_bor.asVar()};
  color: ${vars.tree_list_col.asVar()};
}

div.${clss.ROOT_CLASS} > nav + div
{
  grid-area: stick;
  width: 10px;
  height: 100%;
  background: ${vars.sep_bg.asVar()};
  flex-shrink: 0;
  cursor: e-resize;
}

div.${clss.ROOT_CLASS} > nav + div:hover
{
  background: ${vars.sep_hov_bg.asVar()};
}

div.${clss.ROOT_CLASS} > nav + div > div
{
  width: 10px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 8px;
  background-image: ${vars.dbc_split_norm.asVar()};
}

div.${clss.ROOT_CLASS} > nav + div:hover > div
{
  background-image: ${vars.dbc_split_hov.asVar()};
}

.${clss.ROOT_CLASS} > s
{
  grid-area: header;
  display: flex;
  height: 50px;
  width: calc(100% - 20px);
  align-items: center;
  background: ${vars.left_grad.asVar()};
  z-index: 2;
}

.${clss.ROOT_CLASS} > s > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 25px;
  margin-left: 10px;
  border-radius: 10px;
}

.${clss.ROOT_CLASS} > s > div > div
{
  width: 20px;
  height: 20px;
  background-image: ${vars.left_but_img.asVar()};
  background-size: contain;
  background-origin: padding-box;
  background-repeat: no-repeat;
  background-position: center;
}

.${clss.ROOT_CLASS} > s > div:hover
{
  background-color: ${vars.button_bg.asVar()};
}

.${clss.ROOT_CLASS} > s > div:hover > div
{
  background-image: ${vars.left_but_hov_img.asVar()};
  transition: background-image 0.5s;
}

.${clss.ROOT_CLASS} > span 
{
  grid-area: footer;
  display: flex;
  height: 0px;
  align-items: flex-end;
}

.${clss.ROOT_CLASS} > span > div 
{
  height: 25px;
  width: 100%;
  background: ${vars.left_fog_grad.asVar()};
}

.${clss.ROOT_CLASS} nav:hover + div + span > div 
{
  width: calc(100% - 20px);
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}