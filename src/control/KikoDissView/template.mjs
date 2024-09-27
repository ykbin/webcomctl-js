import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('KikoDissView', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  viewbg: [ 'rgb(172 172 172 / 80%)' ],
  imgbg: [ '#f3f3f3' ],
});

mk.newHTML('ROOT_HTML', `

<div id="img-viewer" class="${clss.ROOT_CLASS}" style="display: none">
  <span>
    <div><div></div></div>
    <img draggable="false" src="">
    <div><div></div></div>
  </span>
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

.${clss.ROOT_CLASS} > span
{
  min-width: 660px;
}

.${clss.ROOT_CLASS}
{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${vars.viewbg.asVar()};
  overflow: auto;
}

.${clss.ROOT_CLASS} > span
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 510px;
  padding: 30px;
  cursor: pointer;
}

.${clss.ROOT_CLASS} > span > img
{
  cursor: default;
}

.${clss.ROOT_CLASS} > span > div
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > span > div > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  transform: rotate(45deg);
  border-bottom: 2px solid;
  border-left: 2px solid;
}

.${clss.ROOT_CLASS} > span > div + img + div > div
{
  border-top: 2px solid;
  border-right: 2px solid;
  border-bottom: none;
  border-left: none;
}

.${clss.ROOT_CLASS} > span > img
{
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  border: 2px solid;
  border-color: ${vars.imgbg.asVar()};
  user-select: none;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > span > img
{
  max-width: calc(100% - 220px);
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
