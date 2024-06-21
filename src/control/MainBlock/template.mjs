import { representClassNames } from '../../lib/CSSHelper.mjs';

export const NAME = 'MainBlock';

const VAR = {
  SCTHBG: '#b5b5b5c7',
  SCTRBG: 'transparent',
};

export const CLASS = representClassNames({
  ROOT: "uic-mainblk-root",
  PORT: "uic-mainblk-port",
});

export const HTML = `
<div class="${CLASS.ROOT}">
  <div class="${CLASS.PORT}"></div>
</div>
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
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${CLASS.ROOT} > div
{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 685px;
}
`;