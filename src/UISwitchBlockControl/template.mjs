export const NAME = 'SwitchBlock';

export const CLASS = {
  ROOT: "uic-swtch-root",
  PORT: "uic-swtch-port",
  NTH1: 'uic-swtch-nth1',
  NTH2: 'uic-swtch-nth2',
};

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT} ${CLASS.NTH1}"></div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  height: 100%;
  width: inherit;
}

.${CLASS.NTH1} > div:nth-child(2),
.${CLASS.NTH2} > div:first-child
{
  display: none;
}

.${CLASS.NTH2}
{
  overflow-x: hidden;
}
`;
