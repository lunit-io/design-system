import type { ToggleButtonProps as MuiToggleButtonProps } from "@mui/material";

interface ToggleButtonBaseProps extends MuiToggleButtonProps {
  selectedColor?: "primary" | "secondary";
  // Add type for distinction only because only the style of the icon button is different
  hasIconOnly?: boolean;
  icon?: React.ReactNode;
}
interface ContainedToggleButtonProps
  extends Omit<ToggleButtonBaseProps, "variant"> {
  kind?: "contained";
  color?: "primary" | "secondary";
}

interface GhostToggleButtonProps
  extends Omit<ToggleButtonBaseProps, "variant"> {
  kind?: "ghost";
  color?: "primary" | "secondary";
}

interface OutlinedToggleButtonProps
  extends Omit<ToggleButtonBaseProps, "variant"> {
  kind?: "outlined";
  color?: "primary";
}

export type ToggleButtonProps =
  | ContainedToggleButtonProps
  | GhostToggleButtonProps
  | OutlinedToggleButtonProps;
