export const NAME = 'DragDropToView';

export const CLASS = {
  ROOT: 'uic-ddrop2v-root',
  PORT: 'uic-ddrop2v-port',
};

export const HTML = `
<div class="${CLASS.ROOT} ${CLASS.PORT}"></div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
`;
