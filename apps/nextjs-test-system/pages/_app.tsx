import {
  ThemeProvider,
  CssBaseline,
  Container,
  createTheme,
} from "@mui/material";
import { deepmerge } from "@mui/utils";
import { themeOptions } from "@lunit/design-system";
import localFont from "next/font/local";

import "@/styles/globals.css";

import type { AppProps } from "next/app";

const pretendard = localFont({
  src: "./assets/PretendardVariable.woff2",
});
const theme = createTheme(
  deepmerge(themeOptions, {
    typography: {
      fontFamily: [
        pretendard.style.fontFamily,
        "Pretendard",
        "-apple-system",
        "BlinkMacSystemFont",
        "system-ui",
        "Roboto",
        "Helvetica Neue",
        "Segoe UI",
        "Apple SD Gothic Neo",
        "Noto Sans KR",
        "Malgun Gothic",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "sans-serif",
      ].join(","),
    },
  })
);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        className="dark1"
        component="main"
        maxWidth={false}
        disableGutters
        sx={{
          backgroundColor: theme.palette.token.core.bg_01,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
