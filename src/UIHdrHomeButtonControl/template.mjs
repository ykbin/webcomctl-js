export const NAME = 'HdrHomeButton';

export const CLASS = {
  ROOT: "uic-hdrhm-root",
};

export const HTML = `
<a class="${CLASS.ROOT}" href="\${ENV:HOST_URL}" draggable="false">
  <div></div>
  <span class="notranslate" translate="no">Home</span>
</a>
`;

export const CSS = `
:root
{
  --uic-hdrhm-home: url(home_default.svg);
  --uic-hdrhm-himg: url(home_hover.svg);
  --uic-hdrhm-dclr: #6a6a6a;
  --uic-hdrhm-hclr: black;
  --uic-hdrhm-gr: #dddddd40;
  --uic-hdrhm-bdr: transparent;
}

.${CLASS.ROOT}
{
  display: flex;
  align-items: center;
  width: min-content;
  height: min-content;
  color: var(--uic-hdrhm-dclr);
  cursor: pointer;
  flex-shrink: 0;
  user-select: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: serif;
}

.${CLASS.ROOT}:hover
{
  color: var(--uic-hdrhm-hclr);
  background-color: var(--uic-hdrhm-gr);
  border-radius: 5px;
  transition: background-color 0.2s;
}

.${CLASS.ROOT}:hover > div
{
  background-image: var(--uic-hdrhm-himg);
}

.${CLASS.ROOT} > div
{
  width: 40px;
  height: 30px;
  background-image: var(--uic-hdrhm-home);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: 4px solid var(--uic-hdrhm-bdr);
  flex-shrink: 0;
  box-sizing: border-box;
}

.${CLASS.ROOT} > span
{
  display: flex;
  align-items: center;
  font-size: 28px;
  margin: 0px 7px 0px 5px;
  flex-shrink: 0;
}

@media (device-width < 550px)
{
  .${CLASS.ROOT} > div
  {
    width: 60px;
    height: 55px;
  }
  .${CLASS.ROOT} > span
  {
    font-size: 60px;
  }
}
`;
