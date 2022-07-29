const path = require("path");
const alias = require("./config/alias");
const nodeExternals = require("webpack-node-externals");

console.log(path.resolve(__dirname, "src"));

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias,
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "design-system.js",
    library: {
      type: "commonjs-static",
    },
  },
  externals: [nodeExternals()],
};
