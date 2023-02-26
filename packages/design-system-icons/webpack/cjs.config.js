const glob = require("fast-glob");
const path = require("path");

const base = require("./base.config");

module.exports = {
  ...base,
  entry: glob.sync("./src/generated/*/index.tsx").reduce(
    function (obj, el) {
      const name = el.substring(16 /* ./src/generated/ */, el.lastIndexOf("/"));
      obj[name] = el;
      return obj;
    },
    {
      main: "./src/generated/index.ts",
    }
  ),
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === "main" ? "index.js" : "[name]/index.js";
    },
    path: path.resolve(__dirname, "../dist/cjs"),
    library: {
      type: "commonjs2",
    },
  },
};
