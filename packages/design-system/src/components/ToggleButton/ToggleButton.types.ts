import type { ToggleButtonProps as MuiToggleButtonProps } from "@mui/material";

interface ContainedToggleButtonProps
  extends Omit<MuiToggleButtonProps, "variant"> {
  kind?: "contained";
  color?: "primary" | "secondary" | "error";
}

interface GhostToggleButtonProps extends Omit<MuiToggleButtonProps, "variant"> {
  kind?: "ghost";
  color?: "primary" | "secondary" | "error";
}

interface OutlinedToggleButtonProps
  extends Omit<MuiToggleButtonProps, "variant"> {
  kind?: "outlined";
  color?: "primary";
}

type ToggleButtonBaseProps =
  | ContainedToggleButtonProps
  | GhostToggleButtonProps
  | OutlinedToggleButtonProps;

export type ToggleButtonProps = ToggleButtonBaseProps & {
  selectedColor: "primary" | "secondary";
};
