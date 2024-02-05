import { ThemeProvider, CssBaseline, Box, createTheme } from "@mui/material";

import theme from "../src/theme";

export const decorators = [
  (Story, context) => {
    const surface = context.globals.theme;

    // MUI component의 기본 text 컬러가 dark1 테마로 설정되어 있으나,
    // modal과 같이 dom을 새로 생성하는 MUI 컴포넌트의 기본 배경색이 흰색이라 글자색이 보이지 않는 문제가 있어서
    // storybook 내 MUI component의 가독성을 위해 text 컬러를 light1 컬러로 재지정
    const custom_theme = createTheme(theme, {
      palette: {
        text: {
          primary: "#111113", // core.text_normal.light1
          secondary: "#626264", // core.text_medium.ligh1
        },
      },
    });

    return (
      <ThemeProvider theme={custom_theme}>
        <CssBaseline />
        <Box
          className={surface}
          bgcolor={theme.palette.lunit_token.core.bg_01}
          color={theme.palette.lunit_token.core.text_normal}
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
      items: ["light1", "light2", "dark1", "dark2"],
    },
  },
};
