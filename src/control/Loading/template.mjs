import ControlMaker from '../../lib/ControlMaker.mjs';

import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('Loading', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");
export const SHOW_CLASS = mk.newClassName("Show");

const MAIN_IMG = await mk.loadSvgAsCssUrl('./file-upload.svg');
const BGROUND_COLOR = '#1e1e1e91';

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div></div>
</div>
`;

export const CSS = `
.${ROOT_CLASS}
{
  display: none;
}

.${SHOW_CLASS}
{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 555px;
  z-index: 3;
  background-color: ${BGROUND_COLOR};
}

.${SHOW_CLASS} > div
{
  width: 100%;
  height: 100%;
  max-width: 160px;
  min-width: 160px;
  background-image: ${MAIN_IMG};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${SHOW_CLASS} > div
  {
    width: 320px;
    height: 320px;
  }
}
`;
