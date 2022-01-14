const pathHelpers = require("path");

const config = {
    mode: "production",
    entry: pathHelpers.join(__dirname, "./src/index.js"),
    output: {
        path: pathHelpers.join(__dirname, "./target"),
        filename: "webpack.js",
    },
};

module.exports = config;
