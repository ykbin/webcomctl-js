import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('WEBSOCKET', import.meta.url);
export const PORT_CLASS = mk.newClassName("PORT_CLASS");

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "RPANEL_PARAMS_INIT",
  "RPANEL_PARAMS_SHOW",
  "RPANEL_PARAMS_HIDE",
]);

const vars = mk.newCSSVariableMap({
  nav_but_bg: [ 'white', 'rgb(23, 23, 26)' ],
  wsock_rpanel_bor: [ '#f3f0f0', ' #c2c2c240' ],
});

mk.newHTML('ROOT_HTML', `
  <div id="wsock-rpanel-params-state" class="${clss.ROOT_CLASS} ${clss.RPANEL_PARAMS_INIT}">
    <div>
      <span id="wsock-rpanel-vlist"><div class="${PORT_CLASS}"></div></span>
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

@media (device-width < 550px)
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
  .${clss.RPANEL_PARAMS_INIT} > div
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
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
