import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('DocEmpty', import.meta.url);

const PORT_CLASS = mk.newClassName("PORT_CLASS");

mk.newHTML('ROOT_HTML', `
<!DOCTYPE html>
<html>
  <head></head>
  <body class="${PORT_CLASS}"></body>
</html>
`);

mk.newCSS('CSS', `
`);

export function buildComponent()
{
  return mk.buildComponent();
}
