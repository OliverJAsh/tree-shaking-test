const pathHelpers = require("path");

export default {
  input: pathHelpers.join(__dirname, "./src/index.js"),
  output: {
    file: pathHelpers.join(__dirname, "./target/rollup.js"),
    format: "cjs"
  }
};
