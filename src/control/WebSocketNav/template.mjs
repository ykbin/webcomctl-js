import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('WebsocketNav', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "signal_state_off",
  "signal_state_on",
  "signal_state_text",
  "connect_btn_on",
  "connect_btn_off",
]);

const vars = mk.newCSSVariableMap({
  inp_pla_col: [ '#b3b3b3', '#b3b3b3' ],
  inp_ms_inp_pla_col: [ '#b3b3b3', '#b3b3b3' ],
  wsock_nav_col_hov: [ '#aaa8a821', 'rgb(23, 23, 26)' ],
  wsock_nav_bg: [ 'linear-gradient(to bottom, white 0% 76%, transparent)', ' linear-gradient(to bottom, rgb(23, 23, 26) 0% 76%, transparent' ],
  wsock_nav_bg2: [ 'white', 'rgb(23, 23, 26)' ],
  wsock_nav_bs: [ '-4px 0px 5px -5px rgba(0, 0, 0, 0), -4px 0px 5px -5px rgba(23, 23, 26, 0)', '-4px 0px 5px -5px rgb(0 0 0), -4px 0px 5px -5px rgb(23 23 26 / 60%)' ],
  wsock_nav_bs2: [ '#bababa8c', '#bababa21'],
  wsock_nav_bor:[ '#ccc', '#454545' ],
  wsock_nav_inp_bg: [ '#f4f4f4', '#515151' ],
  wsock_nav_inp_col: [ 'black', 'white' ],
  wsock_nav_inp_car: [ 'black', 'white' ],
  wsock_add_dis_bg: [ '#f4efef', '#6a484885' ],
  wsock_nav_bef_bg: [ '#f4f4f4', '#515151' ],
  wsock_add_dis_bef_bg: [ '#f4efef', '#6a484885' ],
  wsock_nav_inp: [ 'white', 'rgb(23, 23, 26)' ],
  wsock_nav_inp_hov_bg: [ '#f4f4f4', '#b8b8b840' ],
  wsock_nav_inp_hov_bs: [ '0 1px 0 rgba(100, 100, 100, 0)', '0 1px 0 rgb(100 100 100 / 35%)' ],
  wsock_nav_inp_act_bg: [ '#dedede', '#d3d3d340' ],
  wsock_nav_col: [ '#5e5e5e', ' #dcdcdc' ],
  inp_but_col: [ '#1877f2', 'rgb(23, 23, 26)' ],
  inp_but_col2: [ '#820101', 'rgb(23, 23, 26)' ],
  con_col: [ '#353535', '#dcdcdc' ],
  wsock_nav_but_bg: ['white', 'rgb(23, 23, 26)'],
  wsock_sig_off: ['radial-gradient(red 5% , #830000)', 'radial-gradient(red 5% , #830000)'],
  grad_gr5: [ 'radial-gradient(#00ba00 5% , #073d00)', 'radial-gradient(#00ba00 5% , #073d00)' ],
  grad_gr7: [ 'radial-gradient(#00ba00 7% , #073d00)', 'radial-gradient(#00ba00 7% , #073d00)' ],
  grad_gr9: [ 'radial-gradient(#00bd00 9% , #073d00)', 'radial-gradient(#00bd00 9% , #073d00)' ],
  grad_gr12: [ 'radial-gradient(#389f38 12% , #073d00)', 'radial-gradient(#389f38 12% , #073d00)' ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <div id="wsock-signal-state">
    <div class="${clss.signal_state_off}"></div>
    <span class="${clss.signal_state_text}">No connection</span>
  </div>
    
  <nav id="wsock-addresses-root">
    <span>
      <input id="wsock-addresses-input" type="text" placeholder="Address"/>
    </span>
    
    <div>
      <input id="wsock-connect-btn-root" class="${clss.connect_btn_on}" type="button" value="Connect"/>
    </div>
    
    <ul id="wsock-addresses-list"></ul>
  </nav>
    
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: sticky;
  top: 0px;
  height: 60px;
  padding-top: 5px;
  background: ${vars.wsock_nav_bg.asVar()};
  font-family: monospace;
  box-shadow: ${vars.wsock_nav_bs.asVar()};
  z-index: 1;
}

.${clss.ROOT_CLASS} > div
{
  position: absolute;
  display: flex;
  align-items: center;
  top: 26px;
  left: 20px;
  z-index: 1;
}

.${clss.ROOT_CLASS} > div > div
{
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.${clss.ROOT_CLASS} > div > span
{
  text-indent: 5px;
  color: ${vars.con_col.asVar()};
  font-weight: 900;
}

.${clss.ROOT_CLASS} > nav
{
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
  margin: 20px 0px 0px 0px;
  border: 1px solid ${vars.wsock_nav_bor.asVar()};
  border-radius: 18px;
  overflow: hidden;
  background-color: ${vars.wsock_nav_bg2.asVar()};
  box-shadow: 0px 2px 5px 0px ${vars.wsock_nav_bs2.asVar()};
  z-index: 1;
}

.${clss.ROOT_CLASS} > nav.wsock-addresses-show
{
  height: auto;
}

.${clss.ROOT_CLASS} > nav > span
{
  display: block;
  height: min-content;
  padding: 3px 0px;
  margin-left: 3px;
  border-start-start-radius: 20px;
  border-end-start-radius: 20px;
  position: relative;
}

.${clss.ROOT_CLASS} > nav.wsock-addresses-disabled > span > input[type="text"]
{
  background-color: ${vars.wsock_add_dis_bg.asVar()};
}

.${clss.ROOT_CLASS} > nav.wsock-addresses-disabled > span:before
{
  background-color: ${vars.wsock_add_dis_bef_bg.asVar()};
}

.${clss.ROOT_CLASS} > nav.wsock-addresses-disabled > span > input[type="text"]
{
  pointer-events: none;
}

.${clss.ROOT_CLASS} > nav > span > input[type="text"]
{
  height: 30px;
  width: 340px;
  padding-left: 15px;
  font-size: 1em;
  border-start-start-radius: 20px;
  border-end-start-radius: 20px;
  border: none;
  color: ${vars.wsock_nav_inp_col.asVar()};
  caret-color: ${vars.wsock_nav_inp_car.asVar()};
  font-family: monospace;
  background-color: ${vars.wsock_nav_inp_bg.asVar()};
}

.${clss.ROOT_CLASS} > nav > span:before
{
  content: ' ';
  display: block;
  width: 11px;
  height: 30px;
  position: absolute;
  background-color: ${vars.wsock_nav_bef_bg.asVar()};
  right: -11px;
  top: 3px;
}

input[type="text"]::placeholder
{
  color: ${vars.inp_pla_col.asVar()};
}

input[type="text"]::-ms-input-placeholder
{
  color: ${vars.wsock_nav_but_bg.asVar()};
}

.${clss.ROOT_CLASS} > nav > span > input[type="text"]:focus-visible
{
  outline: none;
}

.${clss.ROOT_CLASS} > nav > div
{
  padding: 0px 3px;
  border-radius: 20px;
  background-color: ${vars.wsock_nav_but_bg.asVar()};
  z-index: 1;
}

.${clss.ROOT_CLASS} > nav input[type="button"]
{
  height: 30px;
  width: 95px;
  font-size: 1em;
  border-radius: 15px;
  background-color: ${vars.wsock_nav_inp.asVar()};
}

.wsock-signal-state-off
{
  background: ${vars.wsock_sig_off.asVar()};
  background-size: 100%;
}

input[type="button"].wsock-connect-btn-on
{
  color: ${vars.inp_but_col.asVar()};
  border: 1px solid ${vars.inp_but_col.asVar()};
}

input[type="button"].wsock-connect-btn-off
{
  color: ${vars.inp_but_col2.asVar()};
  border: 1px solid ${vars.inp_but_col2.asVar()};
}

.${clss.ROOT_CLASS} input[type="button"]:hover
{
  background-color: ${vars.wsock_nav_inp_hov_bg.asVar()};
  box-shadow: ${vars.wsock_nav_inp_hov_bs.asVar()};
}

.${clss.ROOT_CLASS} input[type="button"]:active
{
  background-color: ${vars.wsock_nav_inp_act_bg.asVar()};
}

.${clss.ROOT_CLASS} > nav > ul
{
  grid-column: 1/3;
  display: none;
  padding: 0px;
  font-size: 0.95em;
  line-height: 20px;
  color: ${vars.wsock_nav_col.asVar()};
}

.${clss.ROOT_CLASS} > nav.wsock-addresses-show > ul
{
  display: block;
}

.${clss.ROOT_CLASS} > nav > ul > li
{
  padding: 3px 15px;
}

.${clss.ROOT_CLASS} > nav > ul > li:hover
{
  background-color: ${vars.wsock_nav_col_hov.asVar()};
}

.${clss.ROOT_CLASS} > nav > ul > li:last-child
{
  margin-bottom: 10px;
}

.${clss.signal_state_on}
{
  animation-name: gradient-green;
  animation-duration: 3s, 2s, 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-size: 100%;
}

@keyframes gradient-green
{
  0%
  {
    background: ${vars.grad_gr5.asVar()};
  }
  16%
  {
    background: ${vars.grad_gr7.asVar()};
  }
  32%
  {
    background: ${vars.grad_gr9.asVar()};
  }
  50%
  {
    background: ${vars.grad_gr12.asVar()};
  }
  66%
  {
    background: ${vars.grad_gr9.asVar()};
  }
  82%
  {
    background: ${vars.grad_gr7.asVar()};
  }
  100%
  {
    background: ${vars.grad_gr5.asVar()};
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
