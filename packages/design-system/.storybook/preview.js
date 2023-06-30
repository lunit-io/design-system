import { ThemeProvider, CssBaseline, Box } from "@mui/material";

import theme from "../src/theme";

export const decorators = [
  (Story, context) => {
    const surface = context.globals.theme;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          className={surface}
          bgcolor={theme.palette.token.core.bg_01}
          color={theme.palette.token.core.text_normal}
          sx={{ p: 2 }}
        >
          <Story />
        </Box>
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    /**
     * Show full documentation for each property
     * https://storybook.js.org/docs/react/essentials/controls#show-full-documentation-for-each-property
     */
    expanded: true,
  },
  options: {
    storySort: {
      order: ["Getting Started", "Foundation", "Components"],
    },
  },
};

export const globalTypes = {
  theme: {
    title: "Base",
    description: "Global base for components",
    defaultValue: "light1",
    toolbar: {
      title: "Base",
      icon: "contrast",
      dynamicTitle: true,
      items: ["light1", "light2", "dark1", "dark2", "dark3", "dark4"],
    },
  },
};
