import { Components, Theme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import paletteOptions, { createColorCSSBaseline } from "./colors";
import typographyOptions, { createTypographyCSSBaseline } from "./Typography";

export const foundationCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: deepmerge(
    createTypographyCSSBaseline(),
    createColorCSSBaseline()
  ),
};

export const typography = typographyOptions;

export const palette = paletteOptions;
