const glob = require("fast-glob");
const path = require("path");

const base = require("./base.config");

module.exports = {
  ...base,
  // overwrite all component bundles excepts the root index.js
  entry: glob.sync("./src/generated/*/index.tsx").reduce(function (obj, el) {
    const name = el.substring(16 /* ./src/generated/ */, el.lastIndexOf("/"));
    obj[name] = el;
    return obj;
  }, {}),
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "../dist"),
    library: {
      type: "module",
    },
  },
};
