import { ThemeProvider, CssBaseline, Box, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { DocsContainer } from "@storybook/blocks";

import { themeOptions } from "../src/theme";
import * as baseColor from "../src/foundation/colors/base";

function DocsProvider(props) {
  return (
    <ThemeProvider theme={custom_theme}>
      <CssBaseline />
      <Box
        className="light1"
        bgcolor={custom_theme.palette.lunit_token.core.bg_01}
        color={custom_theme.palette.lunit_token.core.text_normal}
        sx={{ p: 2 }}
      >
        <DocsContainer {...props} />
      </Box>
    </ThemeProvider>
  );
}

export const decorators = [
  (Story, context) => {
    const surface = context.globals.theme;

    // MUI component의 기본 text 컬러가 dark1 테마로 설정되어 있으나,
    // modal과 같이 dom을 새로 생성하는 MUI 컴포넌트의 기본 배경색이 흰색이라 글자색이 보이지 않는 문제가 있어서
    // storybook 내 MUI component의 가독성을 위해 MUI 기본 palette 컬러를 light1 컬러로 재지정
    const custom_theme = createTheme(
      deepmerge(themeOptions, {
        palette: {
          primary: {
            main: baseColor.lunit_teal[30], // component.btn_primary_bg.light1
          },
          secondary: {
            main: baseColor.grey[15], // component.btn_secondary_bg.light1
          },
          error: {
            main: baseColor.red[30], // component.btn_error_bg.light1
          },
          warning: {
            main: baseColor.orange[20], // component.chip_warning_bg.light1
          },
          info: {
            main: baseColor.blue[10], // component.alert_info_bg.light1 와 비슷한 색....
          },
          success: {
            main: baseColor.green[20], // component.chip_success_bg.light1
          },
          grey: baseColor.greyForMUI,
          text: {
            primary: baseColor.grey[95], // core.text_normal.light1
            secondary: baseColor.grey[60], // core.text_medium.light1
          },
        },
      })
    );

    return (
      <ThemeProvider theme={custom_theme}>
        <CssBaseline />
        <Box
          className={surface}
          bgcolor={custom_theme.palette.lunit_token.core.bg_01}
          color={custom_theme.palette.lunit_token.core.text_normal}
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
  docs: {
    container: DocsProvider,
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
