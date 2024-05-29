import { representClassNames } from '../../lib/CSSHelper.mjs';

export const NAME = 'DocEmpty';

export const CLASS = representClassNames({
  ROOT: "uic-docemt-root",
  PORT: "uic-docemt-root",
});

export const HTML = `
<!DOCTYPE html>
<html>
  <head></head>
  <body class="${CLASS.ROOT}"></body>
</html>
`;

export const CSS = `
`;
