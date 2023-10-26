import type { ButtonProps as MuiButtonProps } from "@mui/material";

/**
 * TODO: Omit 을 사용할 경우 component prop 타입 추론이 안되는 이슈 발생
 * https://github.com/lunit-io/design-system/pull/133#discussion_r1354277785
 * */
type BaseButtonProps<C extends React.ElementType> = Omit<
  MuiButtonProps<C, { component?: C }>,
  "variant"
> & { icon?: React.ReactNode; component?: C };

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
