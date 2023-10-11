import type { ButtonProps as MuiButtonProps } from "@mui/material";

type BaseButtonProps<C extends React.ElementType> = Omit<
  MuiButtonProps<C, { component?: C }>,
  "variant"
> & { icon?: React.ReactNode };

type ContainedButtonProps<C extends React.ElementType> = BaseButtonProps<C> & {
  kind?: "contained";
  color?: "primary" | "secondary" | "error";
};

type GhostButtonProps<C extends React.ElementType> = BaseButtonProps<C> & {
  kind?: "ghost";
  color?: "primary" | "secondary" | "error";
};

type OutlinedButtonProps<C extends React.ElementType> = BaseButtonProps<C> & {
  kind?: "outlined";
  color?: "primary" | "secondary";
};

export type ButtonProps<C extends React.ElementType> =
  | ContainedButtonProps<C>
  | GhostButtonProps<C>
  | OutlinedButtonProps<C>;
