import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('RightSideProperties', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "ANIME",
  "SHOW",
]);

const vars = mk.newCSSVariableMap({
  nav_but_bg: [ 'white', 'rgb(23, 23, 26)' ],
  wsock_rpanel_bor: [ '#f3f0f0', ' #c2c2c240' ],
});

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <div>
      <span><div class="${clss.PORT_CLASS}"></div></span>
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

.${clss.PORT_CLASS}
{
  display: none;
}

.${clss.ROOT_CLASS}.${clss.SHOW} > div  > span > div,
.${clss.ROOT_CLASS}.${clss.HIDE} > div  > span > div,
.${clss.ROOT_CLASS}.${clss.ANIME}.${clss.SHOW} > div  > span > div,
.${clss.ROOT_CLASS}.${clss.ANIME} > div  > span > div
{
  display: flex;
}

div.${clss.SHOW}
{
  display: flex;
  width: auto;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS}
{
  position: sticky;
  top: 0;
  z-index: 1;
  overflow: hidden;
}

.${clss.ROOT_CLASS} > div
{
  display: flex;
  flex-direction: row-reverse;
}

.${clss.SHOW}
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
  align-items: center;
  width: 200px;
  padding: 0px 10px 0px 20px;
  overflow: hidden;
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

.${clss.ANIME} > div  > span
{
  /*animation-name: message-value;
  animation-fill-mode: forwards;
  animation-duration: 250ms;
  animation-iteration-count: 1;*/
  width: 0;
  transition: width 0.3s;
}

@keyframes message-value
{
  0%
  {
    width: 100%;
    padding: 0px 10px 0px 20px;
    visibility: visible;
  }
  25%
  {
    width: 75%;
    padding: 0px 7px 0px 15px;
    visibility: hidden;
  }
  50%
  {
    width: 50%;
    padding: 0px 5px 0px 10px;
    visibility: hidden;
  }
  75%
  {
    width: 25%;
    padding: 0px 3px 0px 5px;
    visibility: hidden;
  }
  99%
  {
    width: 0;
    padding: 0;
    visibility: hidden;
  }
  100%
  {
    display: none;
    width: 0;
    padding: 0;
    visibility: hidden;
  }
}

.${clss.ANIME}.${clss.SHOW} > div  > span
{
  /*animation-name: message-value-back;
  animation-fill-mode: forwards;
  animation-duration: 250ms;
  animation-iteration-count: 1;*/
  width: 200px;
  transition: width 0.3s;
}

@keyframes message-value-back
{
  0%
  {
    display: none;
    width: 0;
    padding: 0;
    visibility: hidden;
  }
  1%
  {
    width: 0;
    padding: 0;
    visibility: hidden;
  }
  25%
  {
    width: 25%;
    padding: 0px 3px 0px 5px;
    visibility: hidden;
  }
  50%
  {
    width: 50%;
    padding: 0px 5px 0px 10px;
    visibility: hidden;
  }
  75%
  {
    width: 75%;
    padding: 0px 7px 0px 15px;
    visibility: hidden;
  }
  100%
  {
    width: 100%;
    padding: 0px 10px 0px 20px;
    visibility: visible;
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
  .${clss.ROOT_CLASS} > div > span
  {
    padding-top: 20px;
  }
  div.${clss.ROOT_CLASS} > div  > span > div
  {

  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
