const glob = require("fast-glob");
const path = require("path");

const base = require("./base.config");

module.exports = {
  ...base,
  entry: glob.sync("./src/components/*/index.ts").reduce(
    function (obj, el) {
      const name = el.substring(6 /* ./src/ */, el.lastIndexOf("/"));
      obj[name] = el;
      return obj;
    },
    { main: "./src/index.ts" }
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
