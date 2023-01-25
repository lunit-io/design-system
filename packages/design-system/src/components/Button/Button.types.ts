import type { ButtonProps as MuiButtonProps } from "@mui/material";

interface BaseButtonProps extends MuiButtonProps {
  // Add type for distinction only because only the style of the icon button is different
  hasIconOnly?: true;
}

interface ContainedButtonProps extends Omit<BaseButtonProps, "variant"> {
  kind?: "contained";
  color?: "primary" | "secondary" | "error";
}

interface GhostButtonProps extends Omit<BaseButtonProps, "variant"> {
  kind?: "ghost";
  color?: "primary" | "secondary" | "error";
}

interface OutlinedButtonProps extends Omit<BaseButtonProps, "variant"> {
  kind?: "outlined";
  color?: "primary";
}

export type ButtonProps =
  | ContainedButtonProps
  | GhostButtonProps
  | OutlinedButtonProps;
