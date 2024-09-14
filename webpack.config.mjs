import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {

  const config = {
    target: 'web',
    entry: {
      CntButtBRed: './src/control/CntButtBRed/index.mjs',
      CntSmUploadButton: './src/control/CntSmUploadButton/index.mjs',
    },
    mode: 'production',
    resolveLoader: {
      alias: {
        'module-loader': path.resolve(__dirname, 'src/loader/ModuleLoader.mjs'),
        'uictmplt-loader': path.resolve(__dirname, 'src/loader/UICTemplateLoader.mjs'),
      },
    },
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
    externals: {
      "webnetq-js": "webnetq-js",
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
