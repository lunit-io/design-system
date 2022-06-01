const path = require("path");
const alias = require("../config/alias");

module.exports = {
  features: {
    // https://github.com/mui-org/material-ui/issues/24282#issuecomment-967747802
    emotionAlias: false,
  },
  stories: [
    "./Welcome/Welcome.stories.tsx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          include: [path.resolve(__dirname, "../src")], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    };
    return config;
  },
};
