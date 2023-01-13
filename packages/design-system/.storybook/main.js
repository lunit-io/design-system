const path = require("path");
const alias = require("../config/alias");
const { getBranchName, getChromaticBranchName } = require("./branch");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  features: {
    // https://github.com/mui-org/material-ui/issues/24282#issuecomment-967747802
    emotionAlias: false,
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  babel: async (options) => ({
    // Update your babel configuration here
    // presets: ["@babel/preset-env", "@babel/preset-react"],
    ...options,
  }),
  stories: [
    "./Welcome/Welcome.stories.tsx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          include: [path.resolve(__dirname, "../src")], // You can specify directories
        },

        loaderOptions: {
          prettierConfig: {
            printWidth: 80,
            singleQuote: false,
          },
        },
      },
    },
  ],
  env: (config) => ({
    ...config,
    BRANCH_NAME: process.env.BRANCH_NAME ?? getBranchName(),
    CHROMATIC_APP_ID:
      process.env.CHROMATIC_APP_ID ?? "62d7d1f2efc8a1e364b5e5e8",
    CHROMATIC_BRANCH_NAME:
      process.env.CHROMATIC_BRANCH_NAME ?? getChromaticBranchName(),
  }),
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    };
    return config;
  },
  docs: {
    autodocs: true,
  },
  managerEntries: [require.resolve("./manager")],
};
