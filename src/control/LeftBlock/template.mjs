import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('LeftBlock', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`;

export const CSS = `
.${ROOT_CLASS}
{
  display: flex;
  align-items: center;
  height: 100%;
}
`;
