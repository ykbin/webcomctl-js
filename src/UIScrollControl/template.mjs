export const NAME = 'Scroll';

export const CLASS = {
  ROOT: "uic-scroll-root",
  BAR: "uic-scroll-bar",
  THUMB: "uic-scroll-thumb",
};

export const HTML = `
<div class="${CLASS.ROOT}">
  <h3></h3>
  <div class="${CLASS.BAR}">
    <div class="${CLASS.THUMB}"></div>
  </div>
</div>
`;

export const CSS = `
:root
{
  --uic-scroll-ttlbg: #eaf5ff;
  --uic-scroll-scrlbg: #dfdfdf29;
  --uic-scroll-sthmbg1: darkgray;
  --uic-scroll-sthmbg2: #959595;
}

[data-theme="dark"]
{
  --uic-scroll-ttlbg: #21242b;
  --uic-scroll-scrlbg: #1d1d1d;
  --uic-scroll-sthmbg1: #454545;
  --uic-scroll-sthmbg2: #565656;
}

.${CLASS.ROOT}
{
  height: 100%;
  width: 10px;
  border: none;
  overflow: visible;
}

.${CLASS.ROOT} > h3
{
  display: block;
  height: 25px;
  background-color: var(--uic-scroll-ttlbg);
  padding: 0px;
}

.${CLASS.ROOT} > div
{
  width: 10px;
  height: calc(100% - 25px);
  background-color: var(--uic-scroll-scrlbg);
}

.${CLASS.ROOT} > div > div
{
  display: block;
  position: relative;
  width: inherit;
  border-radius: 10px;
  background-color: var(--uic-scroll-sthmbg1);
}

.${CLASS.ROOT} > div > div:hover
{
  background-color: var(--uic-scroll-sthmbg2);
}

@media (width < 830px)
{ 
  div.${CLASS.ROOT}
  {
    position: sticky;
    right: 0px;
  }
}
`;
