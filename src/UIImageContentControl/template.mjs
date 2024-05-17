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
.${CLASS.ROOT}
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px 40px 0px 40px;
  border-radius: 10px;
  flex-shrink: 0;
}

.${CLASS.ROOT} img
{
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  border: 1px solid;
  border-color: #f3f3f3;
  background-color: #d6d6d6;
}
`;
