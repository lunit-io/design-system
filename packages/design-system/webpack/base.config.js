const nodeExternals = require("webpack-node-externals");
const alias = require("../config/alias");

module.exports = {
  mode: "production",
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".svg"],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
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
    extensions: [".tsx", ".ts"],
  },
  externals: [
    nodeExternals({
      modulesFromFile: true,
    }),
  ],
};
