import ControlMaker from '../../lib/ControlMaker.mjs';

import { UIC_BLUE_SQUARE_BACKGROUND } from '../../lib/WickedTheme.mjs';
import { UIC_BLUE_SQUARE_BORDER } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('Console', import.meta.url);

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
]);

mk.newHTML('ROOT_HTML', `
<div class="${clss.ROOT_CLASS}">
    <span>
      <div contenteditable="false">C:\Users\Sergey\OneDrive\Desktop\test &nbsp;<span contenteditable="true"></span></div>
    </span>
  </div>
`);

mk.newCSS('CSS', `

.${clss.ROOT_CLASS}
{
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  font-family: monospace;
  word-break: break-all;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > span
{
  display: flex;
  align-items: center;
  width: auto;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} > span > div 
{
  height: auto;
  width: 100%;
}

.${clss.ROOT_CLASS} > span > div > span
{
  display: inline;
  width: 100%;
  outline: none;
  border: none;
  caret-color: white;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
