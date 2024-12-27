import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('ImgFailContent', import.meta.url);

const DONOT_IMG = await mk.loadSvgAsCssUrl('./donot_load.svg');
const vars = mk.newCSSVariableMap({
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "text"
]);

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS}">
    <div class="${clss.text}">
      <span></span>
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
  align-items: center;
  justify-content: center;
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

.${clss.text} > span
{
  grid-row: 1 / 3;
  display: block;
  width: 85px;
  height: 95px;
  margin-right: 5px;
  background-image: ${DONOT_IMG};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.${clss.text}
{
  display: grid;
  grid-template-columns: auto auto;
  align-items: end;
  font-size: 25px;
  color: #978888;
  font-family: system-ui;
  flex-shrink: 0;
}

@media (device-width < 550px)
{
  .${clss.ROOT_CLASS}
  {
    align-items: center;
    flex-direction: column;
  }
  .${clss.ROOT_CLASS} span
  {
    width: 121px;
    height: 135px;
  }
  .${clss.text}
  {
    font-size: 36px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}