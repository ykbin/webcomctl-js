import { representClassNames } from '../lib/CSSHelper.mjs';

export const NAME = 'DebugPanel';

export const CLASS = representClassNames({
  ROOT: "uic-dbgbtns-root",
});

export const HTML = `
<div class="${CLASS.ROOT}"></div>
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

.${CLASS.ROOT}
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

.${CLASS.ROOT} *
{
  box-sizing: border-box;
}

.${CLASS.ROOT} > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  min-width: 90px;
  margin-bottom: 5px;
  color: white;
  background-color: var(--uic-dbgbtns-but);
  cursor: pointer;
}

.${CLASS.ROOT} > div:hover
{
  background-color: #417cc8;
}
`;
