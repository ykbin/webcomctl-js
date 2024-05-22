import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';

const optimizeOptions = {
  plugins: [
    { name: 'removeDoctype', active: true },
    { name: 'removeComments', active: true },
    { name: 'cleanupNumericValues', params: { floatPrecision: 2 } },
    { name: 'convertColors', params: { names2hex: true, rgb2hex: true } },
    { name: 'removeMetadata', active: true },
    { name: 'removeTitle', active: true },
    { name: 'removeDesc', active: true },
  ]
};

export async function loadSvgAsCssUrlAsync(metaUrl, filename) {
  const currentFilename = fileURLToPath(metaUrl);
  const currentDirname = path.dirname(currentFilename);
  
  const filename = path.resolve(currentDirname, filename);
  const bytes = await readFile(filename, { encoding: 'utf8', flag: 'r' });
  const optimizeSvg = optimize(bytes, optimizeOptions);
  
  const svgUriData1 = 'data:image/svg+xml,' +  encodeURIComponent(optimizeSvg.data);
  const svgUriData2 = 'data:image/svg+xml;base64,' +  Buffer.from(optimizeSvg.data).toString('base64');

  const svgUriData = svgUriData1.length < svgUriData2.length ? svgUriData1 : svgUriData2;
  return `url("${svgUriData}")`;
}
