const pathHelpers = require("path");

// Expect `__dirname` to be `/config/target/`.
const ROOT_PATH = __dirname;
const TARGET_PATH = pathHelpers.join(ROOT_PATH, "./target/");
const SRC_PATH = pathHelpers.join(ROOT_PATH, "./src/");

const ENTRY_FILENAME = "index.js";
const OUTPUT_FILENAME = "index.js";

const RESOLVED_EXTENSIONS = [
  // start defaults
  ".js",
  ".json",
  // end defaults
  ".ts",
  ".tsx"
];

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
    extensions: RESOLVED_EXTENSIONS
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  }
};

module.exports = config;
