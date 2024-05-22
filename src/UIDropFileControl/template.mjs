export const NAME = 'DropFile';

export const CLASS = {
  ROOT: "uic-dropfile-root",
  SHOW: "uic-dropfile-show",
};

export const HTML = `
<s class="${CLASS.ROOT}">
  <div></div>
</s>
`;

export const CSS = `
:root
{
  --uic-dropfile-bg: #1e1e1ecf;
  --uic-dropfile-img: url(up-file.svg) ;
}

.${CLASS.ROOT}:not(.${CLASS.SHOW})
{
  display: none;
}

.${CLASS.ROOT}
{
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  min-height: 555px;
  background-color: var(--uic-dropfile-bg);
  z-index: 3;
}

.${CLASS.ROOT} > div
{
  height: 100%;
  width: 100%;
  max-width: 500px;
  background-image: var(--uic-dropfile-img);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
`;
