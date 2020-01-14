const pathHelpers = require("path");

// Expect `__dirname` to be `/config/target/`.
const ROOT_PATH = __dirname;
const TARGET_PATH = pathHelpers.join(ROOT_PATH, "./target/");
const SRC_PATH = pathHelpers.join(ROOT_PATH, "./src/");

const ENTRY_FILENAME = "index.js";
const OUTPUT_FILENAME = "index.js";

const config = {
  mode: "development",
  devtool: "source-map",
  optimization: {
    usedExports: true
  },
  // mode: "production",
  entry: pathHelpers.resolve(SRC_PATH, ENTRY_FILENAME),
  output: {
    path: TARGET_PATH,
    filename: OUTPUT_FILENAME
  },
  resolve: {
    alias: {
      "fp-ts/lib": "fp-ts/es6",
      // TODO: toggle foo
      "io-ts-types/lib": "io-ts-types/es6"
    }
  }
};

module.exports = config;
