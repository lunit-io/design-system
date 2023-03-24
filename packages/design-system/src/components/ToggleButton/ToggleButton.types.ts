import type { ToggleButtonProps as MuiToggleButtonProps } from "@mui/material";

interface ToggleButtonBaseProps extends Omit<MuiToggleButtonProps, "variant"> {
  selectedColor?: "primary" | "secondary";
  icon?: React.ReactNode;
}
interface ContainedToggleButtonProps extends ToggleButtonBaseProps {
  kind?: "contained";
  color?: "primary" | "secondary";
}

interface GhostToggleButtonProps extends ToggleButtonBaseProps {
  kind?: "ghost";
  color?: "primary" | "secondary";
}

interface OutlinedToggleButtonProps extends ToggleButtonBaseProps {
  kind?: "outlined";
  color?: "primary";
}

export type ToggleButtonProps =
  | ContainedToggleButtonProps
  | GhostToggleButtonProps
  | OutlinedToggleButtonProps;
