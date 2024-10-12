import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('Lamp', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "SIGNAL_STATE_OFF",
  "SIGNAL_STATE_ON",
  "SIGNAL_STATE_TEXT",
]);

const vars = mk.newCSSVariableMap({
  con_col: [ '#353535', '#dcdcdc' ],
  wsock_sig_off: ['radial-gradient(red 5% , #830000)', 'radial-gradient(red 5% , #830000)'],
  grad_gr5: [ 'radial-gradient(#00ba00 5% , #073d00)', 'radial-gradient(#00ba00 5% , #073d00)' ],
  grad_gr7: [ 'radial-gradient(#00ba00 7% , #073d00)', 'radial-gradient(#00ba00 7% , #073d00)' ],
  grad_gr9: [ 'radial-gradient(#00bd00 9% , #073d00)', 'radial-gradient(#00bd00 9% , #073d00)' ],
  grad_gr12: [ 'radial-gradient(#389f38 12% , #073d00)', 'radial-gradient(#389f38 12% , #073d00)' ],
});

mk.newHTML('ROOT_HTML', `
  <div id="wsock-signal-state" class="${clss.ROOT_CLASS}">
    <div class="${clss.SIGNAL_STATE_OFF}"></div>
    <span class="${clss.SIGNAL_STATE_TEXT}">No connection</span>
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
  position: absolute;
  display: flex;
  align-items: center;
  top: 26px;
  left: 20px;
  z-index: 1;
}

.${clss.ROOT_CLASS} > div
{
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.${clss.ROOT_CLASS} > span
{
  text-indent: 5px;
  color: ${vars.con_col.asVar()};
  font-weight: 900;
}

.${clss.SIGNAL_STATE_OFF}
{
  background: ${vars.wsock_sig_off.asVar()};
  background-size: 100%;
}

.${clss.SIGNAL_STATE_ON}
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
