import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../src/theme";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

export const decorators = [
  (Story) => {
    return (
      <EmotionThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </EmotionThemeProvider>
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
    expanded: true,
  },
  options: {
    storySort: {
      order: ["Getting Started", "Foundation", "Components"],
    },
  },
};
