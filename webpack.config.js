const pathHelpers = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          output: {
            beautify: true,
          },
        },
      }),
    ],
  },
  entry: pathHelpers.join(__dirname, "./src/index.js"),
  output: {
    path: pathHelpers.join(__dirname, "./target"),
    filename: "webpack.js",
  },
};

module.exports = config;
