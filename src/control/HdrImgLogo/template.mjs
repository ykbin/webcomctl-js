import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('HdrImgLogo', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  favicon: [
    await mk.loadSvgAsCssUrl('./favicon1.svg'),
    await mk.loadSvgAsCssUrl('./favicon2.svg'),
  ],
  header: [
    await mk.loadSvgAsCssUrl('./header1.svg'),
    await mk.loadSvgAsCssUrl('./header2.svg'),
  ],
});

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
  <h3></h3>
  <h2></h2>
</div>
`);

mk.newHTML('CSS', `
:root
{
  ${vars.toString(0)};
}

${DARKMODE_SELECTOR_VALUE}
{
  ${vars.toString(1)};
}

.${clss.ROOT_CLASS} h2,
.${clss.ROOT_CLASS} h3
{
  margin: 0px;
  padding: 0px;
  font-size: 1em;
  font-weight: 400;
}

.${clss.ROOT_CLASS}
{
  display: flex;
  height: 33px;
}

.${clss.ROOT_CLASS} > h3
{
  height: 100%;
  width: 40px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  background-size: contain;
  background-image: ${vars.favicon.asVar()};
  margin-right: 7px;
  flex-shrink: 0;
}

.${clss.ROOT_CLASS} > h2
{
  height: 100%;
  width: 180px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${vars.header.asVar()};
  margin-right: 15px;
  flex-shrink: 0;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    height: 130px;
  }
  .${clss.ROOT_CLASS} > h3
  {
    display: none;
  }
  .${clss.ROOT_CLASS} > h2
  {
    width: 270px;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
