import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('SwitchBlock', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");
export const NTH1_CLASS = mk.newClassName("Nth1");
export const NTH2_CLASS = mk.newClassName("Nth2");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${PORT_CLASS} ${NTH1_CLASS}"></div>
`;

export const CSS = `
.${ROOT_CLASS}
{
  flex-grow: 1;
  height: 100%;
  width: inherit;
}

.${NTH1_CLASS} > *:nth-child(2),
.${NTH2_CLASS} > *:first-child
{
  display: none;
}

.${NTH2_CLASS}
{
  overflow-x: hidden;
}
`;
