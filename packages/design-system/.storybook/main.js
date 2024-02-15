const path = require("path");
const alias = require("../config/alias");
const { getBranchName, getChromaticBranchName } = require("./branch");
module.exports = {
  stories: [
    "./Welcome/Welcome.stories.tsx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  refs: {
    "design-system-icons": {
      title: "Lunit Design System Icons",
      url: "https://64b4f32d63020d515460103f-nhxqywufcq.chromatic.com/",
      expanded: false,
    },
    "design-system-logo": {
      title: "Lunit Design System Logo",
      url: "https://64b4d554d4cabd071c377a49-zzkrprgqdh.chromatic.com/",
      expanded: false,
    },
  },
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
    };
    return config;
  },
  docs: {
    autodocs: false,
  },
};
