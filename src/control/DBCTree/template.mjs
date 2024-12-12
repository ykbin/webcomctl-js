import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('DBCTree', import.meta.url);

const vars = mk.newCSSVariableMap({
  left_on_sc: ['transparent'],
  dbc_split_norm: ['url(/dbc-online/splitter.svg)'],
  dbc_split_hov: ['url(/dbc-online/splitter-hover.svg)'],
  left_but_img: ['url(/dbc-online/left-but.svg)'],
  left_but_hov_img: ['url(/dbc-online/left-but-hover.svg)'],
  sep_bg: ['linear-gradient(to bottom,transparent 0%, #bcbcbc30 35% 85%, transparent 100%)'],
  sep_hov_bg: ['linear-gradient(to bottom,transparent 0%, #7d7d7d30 35% 85%, transparent 100%)'],
  button_bg: ['#dddddd40'],
  mes_pseudo_hov_bg: ['#f3e9e9'],


  left_sc_th_bg: ['#3a3a3a', '#3e3e43'],

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
  "dbc_tree_active",
  "dbc_panel_separator",
  "dbc_state_collapse",
  "dbc_state_expand",
  "dbc_state_none",
  "dbc_node_document",
  "dbc_node_message_pseudo",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <div class="${clss.dbc_node_document} ${clss.dbc_state_expand} ${clss.dbc_tree_active}">
    <s>
      <b class="dbc_state_click"></b>
      <h2 class="dbc_showcase_click">
        <s></s>
        <div></div>
      </h2>
    </s>
    <span>
      <div class="${clss.dbc_node_message_pseudo} ${clss.dbc_state_collapse} ${clss.clssdbc_tree_active}">
          <s>
            <b class="dbc_state_click"></b>
            <h2 class="dbc_showcase_click">
              <s></s>
              <div></div>
            </h2>
          </s>
          <span></span>
      </div>
    </span>
  </div>
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

.${clss.ROOT_CLASS} div s h2
{
  display: block;
  font-weight: 500;
  overflow-wrap: normal;
  white-space: nowrap;
}

div[class*="dbc_state_"] > s
{
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 7px;
  user-select: none;
}

div.${clss.ROOT_CLASS} div > s + span
{
  padding-left: 10px;
  display: block;
}

div.${clss.ROOT_CLASS} div > s > h2 > s
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

.${clss.dbc_node_document}  > s > h2 > s
{
  background-image: ${vars.dbc_doc_icon.asVar()};
}

.${clss.NODE_MESSAGE} > s > h2 > s
{
  background-image: ${vars.dbc_mes_icon.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.dbc_node_message_pseudo} > s > h2 > s
{
  background-image: ${vars.dbc_mes_pseudo_icon.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.dbc_node_message_pseudo} div.${clss.NODE_SIGNAL} > s > h2 > s
{
  background-image: ${vars.dbc_sig_pseudo_icon.asVar()};
}

body div.${clss.ROOT_CLASS} .${clss.dbc_node_message_pseudo} s > h2 > div
{
  color: ${vars.mes_pseudo_list_col.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.dbc_node_message_pseudo} s h2:hover 
{
  background-color: ${vars.mes_pseudo_hov_bg.asVar()};
}

.${clss.NODE_GROUP} > s > h2 > s
{
  background-image: ${vars.dbc_group_icon.asVar()};
}

.${clss.NODE_SIGNAL} > s > h2 > s
{
  background-image: ${vars.dbc_sig_icon.asVar()};
}

div.${clss.ROOT_CLASS} div > s > h2 > div
{
  flex-shrink: 0;
  text-overflow: ellipsis;
  padding-right: 5px;
}

div.${clss.ROOT_CLASS} div.${clss.dbc_tree_active} > s > h2 > div
{
  color: ${vars.tree_act_col.asVar()};
  font-weight: 600;
  padding: 0px;
}

div.${clss.ROOT_CLASS} div s h2
{
  display: flex;
  align-items: center;
  font-size: 1.02em;
  flex-shrink: 0;
  margin-left: 7px;
}

div.${clss.ROOT_CLASS} div s h2:hover
{
  background-color: ${vars.left_name_hov.asVar()};
}

div.${clss.ROOT_CLASS} div s b
{
  display: flex;
  width: 15px;
  height: 15px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

div.${clss.ROOT_CLASS} div.${clss.dbc_state_none} > s b
{
  pointer-events: none;
  visibility: hidden;
}

div.${clss.ROOT_CLASS} div s b div
{
  display: block;
  width: 7px;
  height: 7px;
  border-bottom: 1px solid;
  border-left: 1px solid;
}

div.${clss.ROOT_CLASS} div.${clss.dbc_state_expand} > s b div
{
  transform: rotate(315deg);
}

div.${clss.ROOT_CLASS} div.${clss.dbc_state_collapse} > s b div
{
  transform: rotate(228deg);
}

div.${clss.ROOT_CLASS} div.${clss.dbc_node_message_pseudo} > s b div
{
  border-color: ${vars.mes_pseudo_list_bor.asVar()};
}

div.${clss.ROOT_CLASS} div.${clss.dbc_dbc_node_message_pseudo} s b:hover div
{
  border-color: ${vars.mes_pseudo_bor.asVar()};
  color: ${vars.mes_pseudo_bor.asVar()};
}

div.${clss.ROOT_CLASS} div s b:hover div
{
  border-color: ${vars.tree_list_bor.asVar()};
  color: ${vars.tree_list_col.asVar()};
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}