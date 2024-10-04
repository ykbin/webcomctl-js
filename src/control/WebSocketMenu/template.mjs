import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('WEBSOCKET', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "BUTTON_CLASS",
  "BLOCKING_CLASS",
  "RPANEL_PARAMS_INIT",
  "RPANEL_PARAMS_SHOW",
  "RPANEL_PARAMS_HIDE",
]);

const vars = mk.newCSSVariableMap({
  nav_but_bg: [ 'white', 'rgb(23, 23, 26)' ],
  nav_but_bort: [ '#f3f0f0', '#c2c2c240' ],
  nav_but_borb: [ '#f3f0f0', '#c2c2c240' ],
  nav_but_borl: [ '#e2e2e2', '#c2c2c240' ],
  nav_but_bs: [ '-5px 0 5px -5px #cfcfcf', '-5px 0 5px -5px #cfcfcf' ],
  nav_but_hov: [ 'radial-gradient(#e1e1e1, white 70%)', 'radial-gradient(#3d3d3d, rgb(23, 23, 26) 70%)' ],
  wsock_rpanel_bor: [ '#f3f0f0', ' #c2c2c240' ],
  wsock_params: [ 'url(/websocket/info.svg)', 'url(/websocket/info_dark.svg)' ],
});

mk.newHTML('ROOT_HTML', `
  <div id="wsock-rpanel-params-state" class="${clss.ROOT_CLASS} ${clss.RPANEL_PARAMS_INIT}">
    <nav class="${clss.BUTTON_CLASS} ${clss.BLOCKING_CLASS}">
      <div id="wsock-rpanel-button" class="">
        <div></div>
      </div>
    </nav>
    <div>
      <span id="wsock-rpanel-vlist"></span>
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

div.${clss.RPANEL_PARAMS_INIT} > div  > span > div,
.${clss.RPANEL_PARAMS_HIDE} > div > span > div h5
{
  display: none;
}

div.${clss.RPANEL_PARAMS_SHOW}
{
  display: flex;
  width: auto;
}

.${clss.ROOT_CLASS}
{
  position: sticky;
  top: 0;
  z-index: 1;
}

.${clss.ROOT_CLASS} > div
{
  display: flex;
  flex-direction: row-reverse;
}

nav.${clss.BUTTON_CLASS}
{
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  height: inherit;
  width: 0px;
}

nav.${clss.BUTTON_CLASS} > div
{
  background-color: ${vars.nav_but_bg.asVar()};
  margin-top: 115px;
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

nav.${clss.BUTTON_CLASS} > div.active
{
  position: relative;
  left: 1px;
  padding: 20px 6px 20px 5px;
}

nav.${clss.BUTTON_CLASS} > div > div
{
  height: 25px;
  width: 25px;
  border-radius: 10px;
  margin-bottom: 5px;
  background-image: ${vars.wsock_params.asVar()};
  background-size: contain;
  background-position: center;
}

nav.${clss.BUTTON_CLASS} > div:hover
{
  background: ${vars.nav_but_hov.asVar()};
}

.${clss.RPANEL_PARAMS_SHOW}
{
  border-left: 1px solid ${vars.wsock_rpanel_bor.asVar()};
}

.${clss.ROOT_CLASS} > div > span
{
  display: block;
  height: initial;
  padding-top: 5px;
  flex-shrink: 0;
  overflow: hidden;
  background-color: ${vars.nav_but_bg.asVar()};
}

.${clss.ROOT_CLASS} > div  > span > div
{
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0px 10px 0px 20px;
}

.${clss.ROOT_CLASS} > span > div:last-child
{
  margin-bottom: 0px;
}

.${clss.ROOT_CLASS} > div > span > div h5
{
  width: 100px;
}

.${clss.ROOT_CLASS} > div > span > div span
{
  padding-left: 5px;
}

.${clss.RPANEL_PARAMS_HIDE} > div  > span > div
{
  animation-name: message-value;
  animation-fill-mode: forwards;
  animation-duration: 250ms;
  animation-iteration-count: 1;
}

@keyframes message-value
{
  0%
  {
    width: 200px;
    visibility: visible;
  }
  25%
  {
    width: 150px;
    visibility: hidden;
  }
  50%
  {
    width: 100px;
    visibility: hidden;
  }
  75%
  {
    width: 50px;
    visibility: hidden;
  }
  99%
  {
    width: 0px;
    visibility: hidden;
  }
  100%
  {
    display: none;
    width: 0px;
    visibility: hidden;
  }
}

.${clss.RPANEL_PARAMS_SHOW} > div  > span > div
{
  animation-name: message-value-back;
  animation-fill-mode: forwards;
  animation-duration: 250ms;
  animation-iteration-count: 1;
}

@keyframes message-value-back
{
  0%
  {
    display: none;
    visibility: hidden;
    width: 0px;
  }
  1%
  {
    width: 0px;
    visibility: hidden;
  }
  25%
  {
    width: 50px;
    visibility: hidden;
  }
  50%
  {
    width: 100px;
    visibility: hidden;
  }
  75%
  {
    width: 150px;
    visibility: hidden;
  }
  100%
  {
    width: 200px;
    visibility: visible;
  }
}

@keyframes message-value-back-mob
{
  0%
  {
    display: none;
    visibility: hidden;
    width: 0px;
  }
  1%
  {
    width: 0px;
    visibility: hidden;
  }
  25%
  {
    width: 50px;
    visibility: hidden;
  }
  50%
  {
    width: 100px;
    visibility: hidden;
  }
  75%
  {
    width: 200px;
    visibility: hidden;
  }
  100%
  {
    width: 400px;
    visibility: visible;
  }
}

@keyframes message-value-mob
{
  0%
  {
    width: 400px;
    visibility: visible;
  }
  25%
  {
    width: 200px;
    visibility: hidden;
  }
  50%
  {
    width: 100px;
    visibility: hidden;
  }
  75%
  {
    width: 50px;
    visibility: hidden;
  }
  99%
  {
    width: 0px;
    visibility: hidden;
  }
  100%
  {
    display: none;
    width: 0px;
    visibility: hidden;
  }
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  div.${clss.ROOT_CLASS}
  {
    display: flex;
    justify-content: flex-end;
    width: 0px;
    margin-top: 40px;
  }
  div.${clss.ROOT_CLASS} > div
  {
    height: calc(100% - 55px);
    padding: 40px 0px 0px 0px;
    top: 140px;
    margin-top: 53px;
  }
  .${clss.RPANEL-PARAMS_INIT} > div
  {
    background: var(--rpanel-init-col);
  }
  .${clss.ROOT_CLASS} > div > span
  {
    padding-top: 20px;
  }
  div.${clss.RPANEL_PARAMS_SHOW} > div > span > div
  {
    animation-name: message-value-back-mob;
  }
  div.${clss.RPANEL_PARAMS_HIDE} > div > span > div
  {
    animation-name: message-value-mob;
  }
  nav.${clss.BUTTON_CLASS} > div
  {
    padding: 30px 12px 30px 10px;
    margin-top: 230px;
  }
  nav.${clss.BUTTON_CLASS} > div > div
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
