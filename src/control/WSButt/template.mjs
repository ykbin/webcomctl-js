import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('BUTTON', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "ACTIVE_CLASS",
  "BLOCKING_CLASS",
]);

const vars = mk.newCSSVariableMap({
  nav_but_bg: [ 'white', 'rgb(23, 23, 26)' ],
  nav_but_bort: [ '#f3f0f0', '#c2c2c240' ],
  nav_but_borb: [ '#f3f0f0', '#c2c2c240' ],
  nav_but_borl: [ '#e2e2e2', '#c2c2c240' ],
  nav_but_bs: [ '-5px 0 5px -5px #cfcfcf', '-5px 0 5px -5px #cfcfcf' ],
  nav_but_hov: [ 'radial-gradient(#e1e1e1, white 70%)', 'radial-gradient(#3d3d3d, rgb(23, 23, 26) 70%)' ],
  wsock_params: [ 'url(/websocket/info.svg)', 'url(/websocket/info_dark.svg)' ],
});

mk.newHTML('ROOT_HTML', `
<div id="wsock-rpanel-button" class="${clss.ROOT_CLASS} ${clss.BLOCKING_CLASS}">
  <div></div>
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
  background-color: ${vars.nav_but_bg.asVar()};
  padding: 20px 5px 20px 5px;
  box-shadow: ${vars.nav_but_bs.asVar()};
  border-top: 1px solid ${vars.nav_but_bort.asVar()};
  border-bottom: 1px solid ${vars.nav_but_borb.asVar()};
  border-left: 1px solid ${vars.nav_but_borl.asVar()};
  border-start-start-radius: 5px;
  border-end-start-radius: 5px;
}

/*.${clss.BLOCKING_CLASS} > div
{
  pointer-events: none;
}*/

.${clss.ROOT_CLASS}.${clss.ACTIVE_CLASS}
{
  position: relative;
  left: 1px;
  padding: 20px 6px 20px 5px;
}

.${clss.ROOT_CLASS} > div
{
  height: 25px;
  width: 25px;
  border-radius: 10px;
  margin-bottom: 5px;
  background-image: ${vars.wsock_params.asVar()};
  background-size: contain;
  background-position: center;
}

.${clss.ROOT_CLASS}:hover
{
  background: ${vars.nav_but_hov.asVar()};
}

@media (device-width < 550px)
{
  .${clss.ROOT_CLASS}
  {
    padding: 30px 12px 30px 10px;
    margin-top: 230px;
  }
  .${clss.ROOT_CLASS} > div
  {
    height: 60px;
    width: 60px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
