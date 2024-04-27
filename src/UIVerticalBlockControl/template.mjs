export const NAME = 'VerticalBlock';

export const CLASS = {
  ROOT: "uic-vrtblk-root",
  PORT: "uic-vrtblk-port",
};

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
  min-height: 670px;
  overflow: hidden;
}
`;
