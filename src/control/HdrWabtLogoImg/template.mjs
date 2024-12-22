import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('HdrWabtLogoFavicon', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

const vars = mk.newCSSVariableMap({
  favicon: [
    await mk.loadSvgAsCssUrl('./favicon1.svg'),
    await mk.loadSvgAsCssUrl('./favicon2.svg'),
  ],
});

mk.newHTML('ROOT_HTML', `
<h3 class="${clss.ROOT_CLASS}"></h3>
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

.${clss.ROOT_CLASS}
{
  height: 33px;
  width: 35px;
  margin-right: 7px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  background-position-x: left;
  background-image: ${vars.favicon.asVar()};
  flex-shrink: 0;
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;
}

@media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
{
  .${clss.ROOT_CLASS}
  {
    display: none;
  }
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
