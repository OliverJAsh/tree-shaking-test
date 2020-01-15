const pathHelpers = require("path");
const resolve = require('@rollup/plugin-node-resolve')

export default {
  input: pathHelpers.join(__dirname, "./src/index.js"),
  output: {
    file: pathHelpers.join(__dirname, "./target/rollup.js"),
    format: "cjs"
  },
  plugins: [resolve()]
};
