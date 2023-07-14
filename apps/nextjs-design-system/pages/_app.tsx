import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { theme } from "@lunit/design-system";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

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
