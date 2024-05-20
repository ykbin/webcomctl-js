import { COMMON_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';
import { TOOLBAR_FONT_FAMALY } from '../lib/WickedTheme.mjs';

export const NAME = 'PageTab';

export const CLASS = {
  ROOT: "uic-pagtab-root",
  TEXT: "uic-pagtab-name",
  CLOSE: "uic-pagtab-close",
  FOCUS: "uic-pagtab-active",
};

const VAR = {
  DEFXIMG: 'url(X.svg)',
  HOVXCLR: '#80808042',
  DEFBRDCLR: 'transparent',
  FOCBRDCLR: '#03a8e2f0',
}

export const HTML = `
<s class="${CLASS.ROOT}"></s>
`;

export const ITEM_HTML = `
<div class="${CLASS.FOCUS}" draggable="true">
  <span class="${CLASS.TEXT}"></span>
  <div class="${CLASS.CLOSE}" title="Close"><div></div></div>
</div>
`;

export const CSS = `
:root
{
  --uic-pagtab-act-bg: #f3f3f3;
  --uic-pagtab-hov: #e0e3e7;
  --uic-pagtab-col: #a7a7a7;
  --uic-pagtab-bg: #ebebeb;
  --uic-pagtab-act-col: black;
}

[data-theme="dark"]
{
  --uic-pagtab-act-bg: #252525;
  --uic-pagtab-hov: #313131;
  --uic-pagtab-col: #ffffff9e;
  --uic-pagtab-bg: #242424e6;
  --uic-pagtab-act-col: #c8c8c8;
}

.${CLASS.ROOT}
{
  display: flex;
  width: 100%;
  height: 30px;
  padding: 0px 10px;
  font-size: 13px;
  letter-spacing: 2px;
  flex-shrink: 0;
  user-select: none;
  font-family: ${TOOLBAR_FONT_FAMALY};
  text-decoration: none;
  box-sizing: border-box;
}

.${CLASS.ROOT} > *
{
  box-sizing: border-box;
}

.${CLASS.ROOT} > div
{
  display: grid;
  grid-template-columns: 1fr 25px;
  align-items: center;
  padding-left: 10px;
  height: inherit;
  width: 130px;
  max-width: 130px;
  background-color: var(--uic-pagtab-bg);
  color: var(--uic-pagtab-col);
  border-top-width: 1px;
  border-style: solid;
  border-color: ${VAR.DEFBRDCLR};
  border-bottom: none;
  border-left: none;
  border-right: none;
}

div.${CLASS.FOCUS}
{
  color: var(--uic-pagtab-act-col);
  border-color: ${VAR.FOCBRDCLR};
  background-color: var(--uic-pagtab-act-bg);
  transition: border-color 0.350s;
  z-index: 2;
}

.${CLASS.ROOT} > div:hover
{
  background-color: var(--uic-pagtab-hov);
}

.${CLASS.ROOT} > div + div
{
  margin-left: 1px;
}

.${CLASS.ROOT} > div > span
{
  height: initial;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.${CLASS.ROOT} > div > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: initial;
  height: 17px;
  border-radius: 6px;
  margin: 0 4px;
}

.${CLASS.ROOT} > div > div > div
{
  width: 10px;
  height: 10px;
  background-image: ${VAR.DEFXIMG};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.${CLASS.ROOT} > div > div:hover
{
  background-color: ${VAR.HOVXCLR};
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT}
  {
    height: 50px;
    font-size: 28px;
  }

  .${CLASS.ROOT} > div
  {
    grid-template-columns: 1fr 40px;
    min-width: 230px;
  }

  .${CLASS.ROOT} > div > div > div
  {
    width: 20px;
    height: 20px;
  }
}
`;