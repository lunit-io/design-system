import { deepmerge } from "@mui/utils";
import { ComponentsOverrides, createTheme } from "@mui/material";
import {
  foundationCssBaseline,
  palette,
  typography,
  typographyDefaultProps,
  spacing,
} from "./foundation";
import { componentsCssBaseline } from "./components";

const theme = createTheme({
  typography,
  palette,
  spacing,
  components: {
    MuiCssBaseline: deepmerge(foundationCssBaseline, componentsCssBaseline),
    MuiPaper: {
      styleOverrides: {
        // css-in-js이기 때문에 MuiPaper-root class에만 추가해도
        // Paper 컴포넌트를 쓰는 모든 스타일에서 명시도 역전이 발생하지 않음
        root: {
          boxShadow: "var(--elevation-shadow)",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          boxShadow: "var(--elevation-shadow)",
        },
      },
    },
    MuiTypography: {
      defaultProps: typographyDefaultProps,
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    // @todo add any MUI components theme exported from ./components/index.ts
  },
});

export default theme;
