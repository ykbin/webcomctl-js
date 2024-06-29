import ControlMaker from '../../lib/ControlMaker.mjs';

import { UIC_BLUE_SQUARE_BACKGROUND } from '../../lib/WickedTheme.mjs';
import { UIC_BLUE_SQUARE_BORDER } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('DropBlock', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");
export const NONE_CLASS = mk.newClassName("None");
export const INSET_CLASS = mk.newClassName("Inset");
export const LEFT_CLASS = mk.newClassName("Left");
export const RIGHT_CLASS = mk.newClassName("Right");
export const TOP_CLASS = mk.newClassName("Top");
export const BOTTOM_CLASS = mk.newClassName("Bottom");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div class="${PORT_CLASS}"></div>
  <span class="${NONE_CLASS}">
    <div></div>
  </span>
</div>
`;

export const CSS = `

.${ROOT_CLASS}
{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${ROOT_CLASS} > span
{
  position: absolute;
  top: 0;
  display: block;
  height: 100%;
  width: 100%;
}

.${ROOT_CLASS} > span > div
{
  position: absolute;
  border: 1px solid ${UIC_BLUE_SQUARE_BORDER};
  border-radius: 3px;
  background-color:  ${UIC_BLUE_SQUARE_BACKGROUND};
  box-sizing: border-box;
}

span.${NONE_CLASS}
{
  display: none;
}

.${INSET_CLASS} > div
{
  height: 100%;
  width: 100%;
}

.${LEFT_CLASS} > div
{
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
}

.${RIGHT_CLASS} > div
{
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
}

.${TOP_CLASS} > div
{
  top: 0;
  height: 50%;
  width: 100%;
}

.${BOTTOM_CLASS} > div
{
  bottom: 0;
  height: 50%;
  width: 100%;
}

.${PORT_CLASS}
{
  width: 100%;
  height: 100%;
}
`;
