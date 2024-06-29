import { NAME, ROOT_HTML, ROOT_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, ROOT_HTML };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UIDocEmptyDocument {
};
