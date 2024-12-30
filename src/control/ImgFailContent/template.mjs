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
    <div>
      <div>
        <span></span>
        <div class="${clss.text}">
          <div>Sorry, your</div>
          <div>file didn't</div>
          <div>load</div>
        </div>
      </div>
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

.${clss.ROOT_CLASS} > div > div
{
  display: flex;
  align-items: flex-start;
  background-color: #fbfbfb;
  box-shadow: 0px 0px 4px 1px #89898945;
}

.${clss.ROOT_CLASS} span
{
  display: block;
  width: 65px;
  height: 75px;
  margin-right: 5px;
  margin-top: 5px;
  background-image: ${DONOT_IMG};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.${clss.text}
{
  height: max-content;
  font-size: 25px;
  color: #8f8f8f;
  font-family: system-ui;
  flex-shrink: 0;
}

@media (device-width < 550px)
{
  .${clss.ROOT_CLASS} span
  {
    width: 130px;
    height: 150px;
  }
  .${clss.text}
  {
    font-size: 50px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}