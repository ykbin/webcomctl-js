import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_ATTR_NAME, DARKMODE_DEFAULT_VALUE } from '../../lib/DarkMode.mjs';

const mk = new ControlMaker('DocVer1', import.meta.url);

export const NAME = mk.name;

export const ROOT_CLASS = mk.makeClassName("Root");
export const PORT_CLASS = ROOT_CLASS;

export const ROOT_HTML = `
<!DOCTYPE html>
<html ${DARKMODE_ATTR_NAME}="${DARKMODE_DEFAULT_VALUE}">
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
