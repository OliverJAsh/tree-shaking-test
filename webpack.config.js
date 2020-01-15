const pathHelpers = require("path");
const TerserPlugin = require("terser-webpack-plugin");

// [1] Tree shaking

const config = {
  // We override the default (`eval-source-map`) so that the output code is not wrapped in eval.
  devtool: "source-map",
  mode: "development",
  optimization: {
    // [1] Step 1: drop references to unused exports, so they can be remove by dead code elimination.
    usedExports: true,
    sideEffects: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,

          compress: {
            defaults: false,

            // [1] Step 2: dead code elimination.
            dead_code: true,
            unused: true
          }
        }
      })
    ]
  },
  entry: pathHelpers.join(__dirname, "./src/index.js"),
  output: {
    path: pathHelpers.join(__dirname, "./target"),
    filename: "webpack.js"
  }
};

module.exports = config;
