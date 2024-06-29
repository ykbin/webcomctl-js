import ControlMaker from '../../lib/ControlMaker.mjs';

const maker = new ControlMaker('DocEmpty', import.meta.url);

export const NAME = maker.name;

export const ROOT_CLASS = maker.newClassName("Root");
export const PORT_CLASS = ROOT_CLASS;

export const ROOT_HTML = `
<!DOCTYPE html>
<html>
  <head></head>
  <body class="${ROOT_CLASS}"></body>
</html>
`;

export const CSS = `
`;
