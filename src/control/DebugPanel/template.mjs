import ControlMaker from '../../lib/ControlMaker.mjs';

const maker = new ControlMaker('DebugPanel', import.meta.url);

export const NAME = maker.name;

export const ROOT_CLASS = maker.makeClassName("Root");
export const LIST_CLASS = maker.makeClassName("List");
export const TEXT_CLASS = maker.makeClassName("Text");

export const ROOT_HTML = `
<div class="${ROOT_CLASS} ${LIST_CLASS}"></div>
`;

export const ITEM_HTML = `
<div class="${TEXT_CLASS}"></div>
`;

export const CSS = `
:root
{
  --uic-dbgbtns-bor: #d0dbe9;
  --uic-dbgbtns-bg: #fdfdfd;
  --uic-dbgbtns-but: #488ee9;
  --uic-dbgbtns-buthov: #417cc8;
}

[data-theme="dark"]
{
  --uic-dbgbtns-bor: #35383c;
  --uic-dbgbtns-bg: rgb(43 43 45);
  --uic-dbgbtns-but: #2d5b96;
  --uic-dbgbtns-buthov: #3a6ba9;
}

.${ROOT_CLASS}
{
  position: fixed;
  bottom: 2px;
  left: 2px;
  width: auto;
  height: auto;
  padding: 5px 5px 0px 5px;
  border: 1px solid var(--uic-dbgbtns-bor);
  border-radius: 2px;
  background-color: var(--uic-dbgbtns-bg);
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  cursor: default;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  min-width: 90px;
  padding: 0 2px;
  margin-bottom: 5px;
  color: white;
  background-color: var(--uic-dbgbtns-but);
  cursor: pointer;
}

.${ROOT_CLASS} > div:hover
{
  background-color: #417cc8;
}
`;
