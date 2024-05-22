export const NAME = 'DropBlock';

const VAR = {
  RC_BORDER: '#0985b7',
  RC_BACKGROUND: 'rgb(5 79 171 / 60%)',
  SCTHUMB_BACKGROUND: '#b5b5b5c7',
};

export const CLASS = {
  ROOT: "uic-drpblk-root",
  PORT: "uic-drpblk-port",
  NONE: "uic-drpblk-none",
  INSET: "uic-drpblk-inset",
  LEFT: "uic-drpblk-left",
  RIGHT: "uic-drpblk-right",
  TOP: "uic-drpblk-top",
  BOTTOM: "uic-drpblk-bottom",
};

export const HTML = `
<div class="${CLASS.ROOT}">
  <div class="${CLASS.PORT}"></div>
  <span class="${CLASS.NONE}">
    <div></div>
  </span>
</div>
`;

export const CSS = `

.${CLASS.ROOT}
{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.${CLASS.ROOT} > span
{
  position: absolute;
  top: 0;
  display: block;
  height: 100%;
  width: 100%;
}

.${CLASS.ROOT} > span > div
{
  position: absolute;
  border: 1px solid ${VAR.RC_BORDER};
  border-radius: 3px;
  background-color: ${VAR.RC_BACKGROUND};
  box-sizing: border-box;
}

span.${CLASS.NONE}
{
  display: none;
}

.${CLASS.INSET} > div
{
  height: 100%;
  width: 100%;
}

.${CLASS.LEFT} > div
{
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
}

.${CLASS.RIGHT} > div
{
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
}

.${CLASS.TOP} > div
{
  top: 0;
  height: 50%;
  width: 100%;
}

.${CLASS.BOTTOM} > div
{
  bottom: 0;
  height: 50%;
  width: 100%;
}

.${CLASS.PORT}
{
  width: 100%;
  height: 100%;
}
`;
