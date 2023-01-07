import { Components, Theme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import paletteOptions, { createColorCssBaseline } from "./colors";
import typographyOptions, { createTypographyCssBaseline } from "./Typography";
import { createElevationCssBaseline, elevationOptions } from "./Elevation";

export const foundationCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: deepmerge(
    deepmerge(createTypographyCssBaseline(), createColorCssBaseline()),
    createElevationCssBaseline()
  ),
};

export const typography = typographyOptions;

export const palette = paletteOptions;

export const elevation = elevationOptions;

export { spacing } from "./spacing";
