import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('SplitterBlock', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");
export const NONE_CLASS = mk.newClassName("None");
export const RIGHT_CLASS = mk.newClassName("Right");
export const LEFT_CLASS = mk.newClassName("Left");
export const TOP_CLASS = mk.newClassName("Top");
export const BOTTOM_CLASS = mk.newClassName("Bottom");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div class="${PORT_CLASS}"></div>
  <span class="${NONE_CLASS}"><div></div></span>
</div>
`;

export const CSS = `
:root
{
  --uic-spltblk-bor: #e6e6e6;
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-spltblk-bor: #3c3c3c;
}

.${ROOT_CLASS}
{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid var(--uic-spltblk-borde);
}

.${PORT_CLASS}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.${ROOT_CLASS} > span
{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
}

.${ROOT_CLASS} > span > div
{
  flex-shrink: 0;
  background-color: blue;
}

.${BOTTOM_CLASS} > div,
.${TOP_CLASS} > div
{
  width: 100%;
  height: 5px;
}

.${TOP_CLASS}
{
  top: 0;
  width: 100%;
  height: 0;
}

.${BOTTOM_CLASS}
{
  bottom: 0;
  width: 100%;
  height: 0;
}

.${RIGHT_CLASS}
{
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
}

.${LEFT_CLASS} > div,
.${RIGHT_CLASS} > div
{
  width: 5px;
  height: 100%;
}

.${LEFT_CLASS}
{
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
}
`;
