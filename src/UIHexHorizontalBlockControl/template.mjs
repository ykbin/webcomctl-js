export const NAME = 'HexHorizontalBlock';

export const CLASS = {
  ROOT: "uic-hexhrzblk-root",
  PORT: "uic-hexhrzblk-port",
};

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}">
</div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  display: flex;
  height: 100%;
  padding: 20px 20px 5px 20px;
  user-select: auto;
}
`;
