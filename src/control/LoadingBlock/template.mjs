import { representClassNames } from '../../lib/CSSHelper.mjs';
import { loadSvgAsCssUrlAsync } from '../../lib/SVG.mjs';

export const NAME = 'LoadingBlock';

const VAR = {
  BGCLR: '#061b4366',
  BGIMG: 'url(unloading.svg)',
};

export const CLASS = representClassNames({
  ROOT: 'uic-ldnblk-root',
  PORT: 'uic-ldnblk-port',
  UNLOAD: 'uic-ldnblk-unload',
});

export const HTML = `
<div class="${CLASS.ROOT}">
  <div class="${CLASS.PORT}"></div>
  <s class="${CLASS.UNLOAD}"><span></span></s>
</div>
`;

export const CSS = `
.${CLASS.ROOT},
.${CLASS.PORT}
{
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
}

.${CLASS.UNLOAD} > s
{
  text-decoration: none;
}

.${CLASS.ROOT} > s:not(.${CLASS.UNLOAD})
{
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 3;
  background-color: ${VAR.BGCLR};
}

.${CLASS.UNLOAD}
{
  display: none;
}

.${CLASS.ROOT} > s > span
{
  display: block;
  height: 100px;
  width: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${VAR.BGIMG};
}
`;
