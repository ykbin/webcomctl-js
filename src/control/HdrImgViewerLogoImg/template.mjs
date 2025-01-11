import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('HdrImgViewerLogoImg', import.meta.url);

const width = 225;
const height = 225;

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
  height: 100%;
  width: 40px;
  margin: 0 7px 0 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  background-image: ${vars.favicon.asVar()};
  flex-shrink: 0;
  padding: 0;
  font-size: 1em;
  font-weight: 400;
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
