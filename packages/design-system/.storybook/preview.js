import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import theme from "../src/theme";

export const decorators = [
  (Story, context) => {
    const surface = context.globals.theme;

    return (
      <EmotionThemeProvider theme={theme}>
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
  },
  options: {
    storySort: {
      order: ["Getting Started", "Foundation", "Components"],
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light1',
    toolbar: {
      icon: 'circlehollow',
      dynamicTitle: true,
      showName: true,
      items: ["light1", "light2", "dark1", "dark2", "dark3", "dark4"],
    },
  },
};
