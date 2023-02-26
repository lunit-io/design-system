const glob = require("glob");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  // bundle all components excepts the root index.tsx
  entry: glob.sync("./generated/*/index.tsx").reduce(function (obj, el) {
    const name = el.substring(12 /* ./generated/ */, el.lastIndexOf("/"));
    obj[name] = el;
    return obj;
  }, {}),
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module",
    },
  },
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
        include: path.resolve(__dirname, "generated"),
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.build.json",
        },
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  externals: [
    nodeExternals({
      modulesFromFile: true,
    }),
  ],
};
