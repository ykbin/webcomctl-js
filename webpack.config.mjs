import path from "node:path";
import fs from "node:fs";
import url from "node:url";

import webpack from "webpack";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function readJSON(filename) {
  const content = await fs.promises.readFile(filename, "utf8");
  return JSON.parse(content);
}

export default async (env, argv) => {
  const isDevelopment = (argv.mode === "development");
  const mode = isDevelopment ? "development" : "production";
  const tsconfig = isDevelopment ? "tsconfig.dev.json" : "tsconfig.json";
  const sourceDir = path.resolve(__dirname, "src");

  const pkg = await readJSON(path.join(__dirname, "package.json"));
  const globalVariables = {
    PROJECT_NAME: pkg.name || "",
    PROJECT_VERSION: pkg.version || "",
    PROJECT_DESCRIPTION: pkg.description || "",
    PROJECT_HOMEPAGE_URL: pkg.homepage || "",
    WEBMAKE_BUILD_TYPE: 'Debug',
  };

  for (const [key, val] of Object.entries(globalVariables))
    globalVariables[key] = JSON.stringify(val);

  const externals = {};
  for (const iter of Object.keys(pkg.dependencies || {}))
    externals[iter] = iter;

  const config = {
    mode,
    target: "web",
    entry: "./src/index.ts",
    devtool: isDevelopment ? "inline-source-map" : undefined, // "source-map",
    resolveLoader: {
      alias: {
        "node-loader": path.join(__dirname, "./src/loader/NodeLoader.mjs"),
      },
    },
    resolve: {
      extensions: [ ".ts", ".tsx", ".mjs", ".js" ],
      alias: {
        "@": sourceDir,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: path.join(__dirname, "node_modules"),
          use: [
            {
              loader: "ts-loader",
              options: {
                configFile: path.join(__dirname, tsconfig),
              }
            }
          ],
        },
        {
          test: /\.node\.ts$/, // .nld.ts
          exclude: path.join(__dirname, "node_modules"),
          use: [
            {
              loader: "node-loader",
              options: {
              },
            }
          ],
        },
        {
          test: /\.svg$/i,
          use: "raw-loader",
        },
      ],
    },
    output: {
      chunkFormat: "module",
      library: {
        type: "module",
      },
      module: true,
      iife: false,
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.mjs",
      clean: true,
    },
    optimization: {
        minimize: false,
    },
    experiments: {
      outputModule: true,
    },
    externals,
    plugins: [
      new webpack.DefinePlugin(globalVariables),
    ],
  };

  if (argv.config_document) {
    config.entry = path.resolve(__dirname, "src", "document", argv.config_document, "index.ts");
    config.output.path = path.resolve(__dirname, "dist", "document");
    config.output.filename = argv.config_document + ".mjs",
    config.output.clean = false;
  }
  else if (argv.config_control) {
    config.entry = path.resolve(__dirname, "src", "control", argv.config_control, "index.ts");
    config.output.path = path.resolve(__dirname, "dist", "control");
    config.output.filename = argv.config_control + ".mjs",
    config.output.clean = false;
  }

  return config;
}
