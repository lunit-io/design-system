import { Components, Theme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import paletteOptions, { createColorCssBaseline } from "./colors";
import typographyOptions, {
  createTypographyCssBaseline,
  typographyDefaultProps,
} from "./Typography";

export const foundationCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: deepmerge(
    createTypographyCssBaseline(),
    createColorCssBaseline()
  ),
};

export const typography = typographyOptions;

export { typographyDefaultProps };

export const palette = paletteOptions;

export { spacing } from "./spacing";
