import path from 'node:path';
import { fileURLToPath } from 'url';
import control from './control.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  path: __dirname,
  styleEntry: 'index.css',
  create: (document, id) => control.provider.create(document, id),
};
