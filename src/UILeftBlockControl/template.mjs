export const NAME = 'LeftBlock';

export const CLASS = {
  ROOT: "uic-lftblk-root",
  PORT: "uic-lftblk-port",
};

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  display: flex;
  align-items: center;
  height: 100%;
}
`;
