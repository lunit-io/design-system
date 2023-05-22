import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "@lunit/design-system";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="light1">
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
