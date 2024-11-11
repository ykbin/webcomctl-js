import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { TOOLBAR_FONT_SANS } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('FlyingButtons', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "ACTIV_CLASS",
]);

const vars = mk.newCSSVariableMap({
  menuBg: [ '#f3f3f3', '#252525' ],
  menuCol: [ 'black', '#b8b4b4' ],
  pullOutBor: [ '#dedede', '#323232' ],
  menuTitleCol: [ '#272626', '#9b9b9b' ],
});

const CLOSE_HOV_COL = '#80808042';

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS} ${clss.ACTIV_CLASS}">
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

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${clss.ROOT_CLASS}
{
  position: absolute;
  bottom: 50%;
  right: 10px;
  display: flex;
  height: 0;
  width: 0;
}

.${clss.ROOT_CLASS} > div
{
  height: 20px;
  width: 20px;
  background-color: blueviolet;
  overflow: hidden;
}

.${clss.ACTIV_CLASS}
{
  justify-content: flex-end;
  align-items: flex-end;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
