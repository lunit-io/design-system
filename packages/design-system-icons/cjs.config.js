const glob = require("glob");
const path = require("path");

const base = require("./webpack.base");

module.exports = {
  ...base,
  entry: glob.sync("./generated/*/index.tsx").reduce(
    function (obj, el) {
      const name = el.substring(12 /* ./generated/ */, el.lastIndexOf("/"));
      obj[name] = el;
      return obj;
    },
    {
      main: "./generated/index.ts",
    }
  ),
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === "main" ? "index.js" : "[name]/index.js";
    },
    path: path.resolve(__dirname, "dist/cjs"),
    library: {
      type: "commonjs2",
    },
  },
};
