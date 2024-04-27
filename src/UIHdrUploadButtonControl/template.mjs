export const NAME = 'HdrUploadButton';

export const CLASS = {
  ROOT: "uic-hdrupl-root",
  HIDDEN: "uic-hdrupl-hidden",
};

export const HTML = `
<label class="${CLASS.ROOT} ${CLASS.HIDDEN} notranslate" translate="no">
  <span></span>Upload
  <!--<input type="file">-->
</label>
`;

export const CSS = `
:root
{
  --uic-hdrupl-dimg: url(search_default.svg);
  --uic-hdrupl-himg: url(search_hover.svg);
  --uic-hdrupl-dclr: #6a6a6a;
  --uic-hdrupl-hclr: black;
  --uic-hdrupl-bg: #dddddd40;
}

.${CLASS.ROOT} > input
{
  display: none;
}

.${CLASS.HIDDEN}
{
  visibility: hidden;
}

.${CLASS.ROOT}
{
  display: flex;
  align-items: center;
  width: min-content;
  height: min-content;
  margin: 0px 5px;
  padding: 0px 5px;
  color: var(--uic-hdrupl-dclr);
  font-size: 28px;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  font-family: serif;
}

.${CLASS.ROOT} > span
{
  display: block;
  width: 30px;
  height: 25px;
  margin-right: 10px;
  background-image: var(--uic-hdrupl-dimg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.${CLASS.ROOT}:hover 
{
  color: var(--uic-hdrupl-hclr);
  background-color: var(--uic-hdrupl-bg);
  border-radius: 5px;
  transition: background-color 0.2s;
}

.${CLASS.ROOT}:hover span 
{
  background-image: var(--uic-hdrupl-himg);
}

@media (device-width < 550px)
{
  .${CLASS.ROOT} > span
  {
    width: 60px;
    height: 55px;
  }
  .${CLASS.ROOT}
  {
    font-size: 60px;
  }
}
`;
