const glob = require("glob");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: glob.sync("./src/components/*/index.tsx").reduce(
    function (obj, el) {
      const filePattern = /^.\/src\/components\/([a-zA-Z0-9_-]+)\/index.tsx/;
      const [_, name] = el.match(filePattern);
      obj[name] = el;
      return obj;
    },
    { main: "./src/components/index.ts" }
  ),
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === "main" ? "index.js" : "[name]/index.js";
    },
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "commonjs-static",
    },
    clean: true,
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".svg"],
  },
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
  externals: [nodeExternals()],
};
