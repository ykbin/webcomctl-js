export const NAME = 'DocVer1';

export const CLASS = {
  ROOT: "uic-docv1-root",
  PORT: "uic-docv1-root",
};

export const HTML = `
<!DOCTYPE html>
<html data-theme="light">
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
