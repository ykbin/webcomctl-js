import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('DonotLoad', import.meta.url);

const DONOT_IMG = await mk.loadSvgAsCssUrl('./donot_load.svg');
const vars = mk.newCSSVariableMap({
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "text"
]);

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <img src="${DONOT_IMG}">
  <div class="${clss.text}">
    <div>Sorry, your</div>
    <div>file didn't</div>
    <div>load</div>
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

.${clss.ROOT_CLASS}
{
  display: flex;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}

.${clss.ROOT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${clss.ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: #b5b5b5c7;
  border-radius: 10px;
}

.${clss.ROOT_CLASS}::-webkit-scrollbar-track,
.${clss.ROOT_CLASS}::-webkit-scrollbar-corner
{
  background-color: transparent;
}

.${clss.ROOT_CLASS} img
{
  width: 323px;
}

.${clss.text}
{
  width: 640px;
  font-size: 105px;
  color: gray;
  font-family: monospace;
  flex-shrink: 0;
}

@media (device-width < 550px)
{
  .${clss.ROOT_CLASS}
  {
    align-items: center;
    flex-direction: column;
  }
  .${clss.ROOT_CLASS} img
  {
    width: 461px;
  }
  .${clss.text}
  {
    width: auto;
    font-size: 150px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}