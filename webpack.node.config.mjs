import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {

  const config = {
    target: 'node',
    entry: {
      CntButtBRed: './src/control/CntButtBRed/template.mjs',
      CntSmUploadButton: './src/control/CntSmUploadButton/template.mjs',
    },
    mode: 'production',
    output: {
      chunkFormat: 'module',
      library: {
        type: 'module',
      },
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].mjs',
      clean: true,
    },
    experiments: {
      outputModule: true,
    },
  };

  if (argv.mode === 'development') {
    config.mode = argv.mode;
    config.devtool = 'source-map';
    config.output.sourceMapFilename = '[name].map';
    process.env.WEBMAKE_BUILD_TYPE = 'Debug';
  }

  return config;
}
