export const NAME = 'Body';

export const CLASS = {
  ROOT: "uic-body-root",
  PORT: "uic-body-root",
};

export const HTML = `
<body class="${CLASS.ROOT}"></body>
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
