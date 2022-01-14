const pathHelpers = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const config = {
    mode: "production",

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    // BEGIN DEFAULTS
                    // https://cs.github.com/webpack/webpack/blob/753fdea847fafe2f1a7e1cb2324e5f7cafa63c83/lib/config/defaults.js#L1127
                    compress: {
                        passes: 2,
                    },
                    // END DEFAULTS

                    mangle: false,
                    output: {
                        beautify: true,
                    },
                },
            }),
        ],
    },

    // mode: "development",
    // optimization: {
    //   usedExports: true,
    // },
    // // Prevent eval(…)
    // devtool: "source-map",

    entry: pathHelpers.join(__dirname, "./src/index.js"),
    output: {
        path: pathHelpers.join(__dirname, "./target"),
        filename: "webpack.js",
    },
};

module.exports = config;
