const pathHelpers = require("path");

// Expect `__dirname` to be `/`.
const ROOT_PATH = __dirname;
const TARGET_PATH = pathHelpers.join(ROOT_PATH, "./target/");
const SRC_PATH = pathHelpers.join(ROOT_PATH, "./src/");

const ENTRY_FILENAME = "index.js";
const OUTPUT_FILENAME = "index.js";

const config = {
  devtool: "source-map",
  mode: "production",
  entry: pathHelpers.resolve(SRC_PATH, ENTRY_FILENAME),
  output: {
    path: TARGET_PATH,
    filename: OUTPUT_FILENAME
  }
};

module.exports = config;
