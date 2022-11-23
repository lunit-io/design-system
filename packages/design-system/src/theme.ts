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
  },
});

export default theme;
