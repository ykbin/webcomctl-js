export const NAME = 'MainBlock';

const VAR = {
  SCTHBG: '#b5b5b5c7',
  SCTRBG: 'transparent',
};

export const CLASS = {
  ROOT: "uic-mainblk-root",
  PORT: "uic-mainblk-port",
};

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export const CSS = `
.${CLASS.ROOT}::-webkit-scrollbar
{
  width: 10px;
  height: 10px;
}

.${CLASS.ROOT}::-webkit-scrollbar-thumb
{
  background-color: ${VAR.SCTHBG};
  border-radius: 10px;
}

.${CLASS.ROOT}::-webkit-scrollbar-track,
.${CLASS.ROOT}::-webkit-scrollbar-corner
{
  background-color: ${VAR.SCTRBG};
}

.${CLASS.ROOT}
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${CLASS.ROOT} > *
{
  min-width: 685px;
}
`;
