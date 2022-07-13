import { deepmerge } from "@mui/utils";
import { createTheme } from "@mui/material/styles";
import { foundationCssBaseline, palette, typography } from "./foundation";
import { componentsCssBaseline } from "./components";
import typoOptions from "./foundation/Typography";

const theme = createTheme({
  typography: typoOptions,
  palette,
  components: {
    MuiCssBaseline: deepmerge(foundationCssBaseline, componentsCssBaseline),
    // @todo add any MUI components theme exported from ./components/index.ts
  },
});

export default theme;
