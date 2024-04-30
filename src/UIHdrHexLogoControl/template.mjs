export const NAME = 'HdrHexLogo';

export const CLASS = {
  ROOT: "uic-hdrhex-root",
};

export const HTML = `
<div class="${CLASS.ROOT}">
  <h3></h3>
  <h2></h2>
</div>
`;

export const CSS = `
:root
{
  --uic-hdrhex-fimg: url(favicon1.svg);
  --uic-hdrhex-himg: url(header1.svg);
}

[data-theme="dark"]
{
  --uic-hdrhex-fimg: url(favicon2.svg);
  --uic-hdrhex-himg: url(header2.svg);
}

.${CLASS.ROOT} h2,
.${CLASS.ROOT} h3
{
  margin: 0px;
  padding: 0px;
  font-size: 1em;
  font-weight: 400;
}

.${CLASS.ROOT}
{
  display: flex;
  height: 33px;
}

.${CLASS.ROOT} > h3
{
  height: 100%;
  width: 56px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: var(--uic-hdrhex-fimg);
  margin-right: 7px;
  flex-shrink: 0;
}

.${CLASS.ROOT} > h2
{
  height: 100%;
  width: 106px;
  background-size: 180px;
  background-position-y: center;
  background-position-x: left;
  background-repeat: no-repeat;
  background-image: var(--uic-hdrhex-himg);
  margin-right: 15px;
  flex-shrink: 0;
}

@media (device-width < 550px)
{
  .${CLASS.ROOT}
  {
    height: 130px;
  }
  .${CLASS.ROOT} > h3
  {
    display: none;
  }
  .${CLASS.ROOT} > h2
  {
    width: 210px;
    background-size: 360px;
  }
}
`;
