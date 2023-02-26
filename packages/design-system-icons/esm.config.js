const glob = require("glob");
const path = require("path");

const base = require("./webpack.base");

module.exports = {
  ...base,
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
};
