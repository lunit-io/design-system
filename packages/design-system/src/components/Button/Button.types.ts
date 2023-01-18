import type { ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  kind?:
    | "contained1st"
    | "contained2nd"
    | "containedError"
    | "outlined1st"
    | "ghost1st"
    | "ghost2nd"
    | "ghostError";
}
