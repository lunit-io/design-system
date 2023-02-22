const glob = require("glob");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const alias = require("./config/alias");

console.log(path.resolve(__dirname, "src"));

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  entry: glob.sync("./src/components/*/index.ts").reduce(
    function (obj, el) {
      const name = el.substring(6 /* ./src/ */, el.lastIndexOf("/"));
      obj[name] = el;
      return obj;
    },
    { main: "./src/index.ts" }
  ),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: (pathData) => {
      return pathData.chunk.name === "main" ? "index.js" : "[name]/index.js";
    },
    library: {
      type: "commonjs-static",
    },
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.build.json",
        },
      },
    ],
  },
  resolve: {
    alias,
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: [
    nodeExternals({
      modulesFromFile: true,
    }),
  ],
};
