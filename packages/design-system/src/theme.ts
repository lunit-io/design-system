import { deepmerge } from "@mui/utils";
import { createTheme } from "@mui/material";
import {
  foundationCssBaseline,
  palette,
  typography,
  spacing,
} from "./foundation";
import { componentsCssBaseline } from "./components";

const theme = createTheme({
  typography,
  palette,
  spacing,
  components: {
    MuiCssBaseline: deepmerge(foundationCssBaseline, componentsCssBaseline),
    // @todo add any MUI components theme exported from ./components/index.ts
  },
});

export default theme;
