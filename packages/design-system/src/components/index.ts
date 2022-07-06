// re-export any MUI styleOverrides for components

import { Components, Theme } from "@mui/material";

export const componentsCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: {
    // @todo add any css baseline necessary for components
  },
};
