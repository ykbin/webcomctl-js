import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('MainBlock', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");
export const PORT_CLASS = mk.newClassName("Port");

const SCTHBG_CLR = '#b5b5b5c7';
const SCTRBG_CLR = 'transparent';

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div class="${PORT_CLASS}"></div>
</div>
`;

export const CSS = `
.${ROOT_CLASS}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-thumb
{
  background-color: ${SCTHBG_CLR};
  border-radius: 10px;
}

.${ROOT_CLASS}::-webkit-scrollbar-track,
.${ROOT_CLASS}::-webkit-scrollbar-corner
{
  background-color: ${SCTRBG_CLR};
}

.${ROOT_CLASS}
{
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${ROOT_CLASS} > div
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 685px;
}
`;
