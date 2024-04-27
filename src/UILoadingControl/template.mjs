export const NAME = 'Loading';

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
:root
{
  --uic-loading-bg: #1e1e1e91;
  --uic-loading-img: url(file-upload.svg);
}

.${CLASS.ROOT}
{
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  min-height: 555px;
  background-color: var(--uic-loading-bg);
}

.${CLASS.SHOW}
{
  display: flex;
  align-items: center;
  justify-content: center;
}

.${CLASS.SHOW} > div
{
  width: 160px;
  height: 160px;
  background-image: var(--uic-loading-img);
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
