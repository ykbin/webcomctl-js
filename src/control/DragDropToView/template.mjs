import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('DragDropToView', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = ROOT_CLASS;

export const ROOT_HTML = `
<div class="${ROOT_CLASS}"></div>
`;

export const CSS = `
.${ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
`;
