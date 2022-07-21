import { Components, Theme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import paletteOptions, { createColorCssBaseline } from "./colors";
import typographyOptions, { createTypographyCssBaseline } from "./Typography";

export const foundationCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: deepmerge(
    createTypographyCssBaseline(),
    createColorCssBaseline()
  ),
};

export const typography = typographyOptions;

export const palette = paletteOptions;

export * from "./spacing";
