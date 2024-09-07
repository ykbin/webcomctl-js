import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('DragDropToView', import.meta.url);

const ROOT_CLASS = mk.newClassName("ROOT_CLASS");
const PORT_CLASS = mk.newClassName("PORT_CLASS");

mk.newHTML('ROOT_HTML', `
<div class="${ROOT_CLASS} ${PORT_CLASS}"></div>
`);

mk.newCSS('CSS', `
.${ROOT_CLASS}
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
