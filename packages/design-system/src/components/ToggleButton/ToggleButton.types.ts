import type { ToggleButtonProps as MuiToggleButtonProps } from "@mui/material";

export interface ToggleButtonBaseProps
  extends Omit<MuiToggleButtonProps, "variant"> {
  selectedColor?: "primary" | "secondary";
  icon?: React.ReactNode;
}
export interface ContainedToggleButtonProps extends ToggleButtonBaseProps {
  kind?: "contained";
  color?: "primary" | "secondary";
}

export interface GhostToggleButtonProps extends ToggleButtonBaseProps {
  kind?: "ghost";
  color?: "primary" | "secondary";
}

export interface OutlinedToggleButtonProps extends ToggleButtonBaseProps {
  kind?: "outlined";
  color?: "primary";
}

export type ToggleButtonProps =
  | ContainedToggleButtonProps
  | GhostToggleButtonProps
  | OutlinedToggleButtonProps;
