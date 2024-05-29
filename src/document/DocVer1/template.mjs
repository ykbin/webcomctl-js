import { Setting } from 'webnetq-js';
import { representClassNames } from '../../lib/CSSHelper.mjs';

export const NAME = 'DocVer1';

export const CLASS = representClassNames({
  ROOT: "uic-docv1-root",
  PORT: "uic-docv1-root",
});

export const HTML = `
<!DOCTYPE html>
<html data-${Setting.DATA_KEY}="${Setting.LIGHT_VAL}">
  <head></head>
  <body class="${CLASS.ROOT}"></body>
</html>
`;

export const CSS = `
.${CLASS.ROOT}
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
