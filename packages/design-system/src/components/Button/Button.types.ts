import type { ButtonProps as MuiButtonProps } from "@mui/material";

interface BaseButtonProps extends Omit<MuiButtonProps, "variant"> {
  icon?: React.ReactNode;
}

interface ContainedButtonProps extends BaseButtonProps {
  kind?: "contained";
  color?: "primary" | "secondary" | "error";
}

interface GhostButtonProps extends BaseButtonProps {
  kind?: "ghost";
  color?: "primary" | "secondary" | "error";
}

interface OutlinedButtonProps extends BaseButtonProps {
  kind?: "outlined";
  color?: "primary" | "secondary";
}

export type ButtonProps =
  | ContainedButtonProps
  | GhostButtonProps
  | OutlinedButtonProps;
