import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('DocEmpty', import.meta.url);

const ROOT_CLASS = mk.newClassName("ROOT_CLASS");
const PORT_CLASS = mk.newClassName(ROOT_CLASS);

mk.newHTML('ROOT_HTML', `
<!DOCTYPE html>
<html>
  <head></head>
  <body class="${ROOT_CLASS}"></body>
</html>
`);

mk.newCSS('CSS', `
`);

export function buildComponent()
{
  return mk.buildComponent();
}
