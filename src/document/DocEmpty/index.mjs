export * as TEMPLATE from './template.mjs';
import { NAME, ROOT_HTML, ROOT_CLASS, PORT_CLASS, CSS } from 'module-loader!./template.mjs';

export { NAME, ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS };
export const template = {
  NAME, HTML: ROOT_HTML, CSS,
};

export default class UIDocEmptyDocument {
};
