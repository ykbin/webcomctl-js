import { UIC_CONTENT_BACKGROUND_COLOR } from '../lib/WickedTheme.mjs';
import { UIC_CONTENT_BACKGROUND_COLOR_DARK } from '../lib/WickedTheme.mjs';

export const NAME = 'ImageContent';

export const CLASS = {
  ROOT: "uic-imgcnt-root",
  CONTENT: "uic-imgcnt-content",
};

export const HTML = `
<div class="${CLASS.ROOT}" draggable="false">
  <img class="${CLASS.CONTENT}"/>
</div>
`;

export const CSS = `
:root
{
  --uic-imgcnt-bg: ${ UIC_CONTENT_BACKGROUND_COLOR };
}

[data-theme="dark"]
{
  --uic-imgcnt-bg: ${ UIC_CONTENT_BACKGROUND_COLOR_DARK };
}

.${CLASS.ROOT}
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  background-color: var(--uic-imgcnt-bg);
}

.${CLASS.ROOT} img
{
  height: auto;
  width: auto;
  max-width: calc(100% - 80px);
  max-height: calc(100% - 80px);
  border: 1px solid;
  border-color: #f3f3f3;
  box-sizing: border-box;
}
`;
