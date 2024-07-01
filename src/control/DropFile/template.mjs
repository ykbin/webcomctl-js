import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('DropFile', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");
export const SHOW_CLASS = mk.newClassName("Show");

const UPFILE_IMG = await mk.loadSvgAsCssUrl('./up-file.svg');
const BG_COLOR = '#1e1e1ecf';

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
  <div></div>
</div>
`;

export const CSS = `
.${ROOT_CLASS}:not(.${SHOW_CLASS})
{
  display: none;
}

.${ROOT_CLASS}
{
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  min-height: 555px;
  background-color: ${BG_COLOR};
  z-index: 3;
}

.${ROOT_CLASS} > div
{
  height: 100%;
  width: 100%;
  max-width: 500px;
  min-width: 500px;
  background-image: ${UPFILE_IMG};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
`;
