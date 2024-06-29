import { Setting } from 'webnetq-js';
import ControlMaker from '../../lib/ControlMaker.mjs';

const maker = new ControlMaker('DocVer1', import.meta.url);

export const NAME = maker.name;

export const ROOT_CLASS = maker.makeClassName("Root");
export const PORT_CLASS = ROOT_CLASS;

export const ROOT_HTML = `
<!DOCTYPE html>
<html data-${Setting.DATA_KEY}="${Setting.LIGHT_VAL}">
  <head></head>
  <body class="${ROOT_CLASS}"></body>
</html>
`;

export const CSS = `
.${ROOT_CLASS}
{
  position: fixed;
  cursor: default;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
}
`;
