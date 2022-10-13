import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../src/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </EmotionThemeProvider>
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
  },
  options: {
    storySort: {
      order: ["Getting Started", "Foundation", "Components"],
    },
  },
};
