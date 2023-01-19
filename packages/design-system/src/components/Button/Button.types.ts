import type { ButtonProps as MuiButtonProps } from "@mui/material";

interface ContainedButtonProps extends Omit<MuiButtonProps, "variant"> {
  kind?: "contained";
  color?: "primary" | "secondary" | "error";
}

interface GhostButtonProps extends Omit<MuiButtonProps, "variant"> {
  kind?: "ghost";
  color?: "primary" | "secondary" | "error";
}

interface OutlinedButtonProps extends Omit<MuiButtonProps, "variant"> {
  kind?: "outlined";
  color?: "primary";
}

export type ButtonProps =
  | ContainedButtonProps
  | GhostButtonProps
  | OutlinedButtonProps;
