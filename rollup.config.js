import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "target/rollup.js",
    format: "cjs"
  },
  plugins: [resolve()]
};
