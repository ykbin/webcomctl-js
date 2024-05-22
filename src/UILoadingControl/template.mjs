export const NAME = 'Loading';

const VAR = {
  BGROUND_COLOR: '#1e1e1e91',
  IMAGE_FILE: 'file-upload.svg',
};

export const CLASS = {
  ROOT: 'uic-loading-root',
  SHOW: 'uic-loading-show',
};

export const HTML = `
<div class="${CLASS.ROOT}">
  <div></div>
</div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  display: none;
}

.${CLASS.SHOW}
{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  min-height: 555px;
  z-index: 3;
  background-color: ${VAR.BGROUND_COLOR};
}

.${CLASS.SHOW} > div
{
  width: 100%;
  height: 100%;
  max-width: 160px;
  background-image: url(${VAR.IMAGE_FILE});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@media (device-width < 550px)
{
  .${CLASS.SHOW} > div
  {
    width: 320px;
    height: 320px;
  }
}
`;
