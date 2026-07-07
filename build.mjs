import path from "node:path";
import fs from "node:fs";
import url from "node:url";

import webpack from "webpack";

async function webpackBuild(config) {
  const compiler = webpack(config);

  const stats = await new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      else if (stats.hasErrors()) reject(new Error(stats.toString()));
      else resolve(stats);
    });
  });

  await new Promise((resolve) => compiler.close(resolve));
  return stats;
}

const configUrl = url.pathToFileURL(path.resolve("./webpack.config.mjs"));
const configModule = await import(configUrl);

const argv = { env: {} };
if (process.env.npm_lifecycle_event === "build:dbg") {
  process.env.WEBMAKE_BUILD_TYPE = 'Debug';
  argv.mode = "development";
}

let clean = true;
for (const iter of await fs.promises.readdir("./src/document")) {
  const config = await configModule.default(argv.env, { ...argv, config_document: iter });
  config.output.clean = clean;
  const stats = await webpackBuild(config);
  console.log("--------------------------------------------------------------------------------");
  console.log("[document] build", path.relative(".", config.entry));
  console.log(stats.toString({ colors: true }));
  clean = false;
}

for (const iter of await fs.promises.readdir("./src/control")) {
  const config = await configModule.default(argv.env, { ...argv, config_control: iter });
  config.output.clean = clean;
  const stats = await webpackBuild(config);
  console.log("--------------------------------------------------------------------------------");
  console.log("[control] build", path.relative(".", config.entry));
  console.log(stats.toString({ colors: true }));
  clean = false;
}
