import type {
  ButtonProps as MuiButtonProps,
  ButtonTypeMap as MuiButtonTypeMap,
} from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

/**
 * TODO: Omit 을 사용할 경우 component prop 타입 추론이 안되는 이슈 발생
 * https://github.com/lunit-io/design-system/pull/133#discussion_r1354277785
 * */
export interface BaseButtonProps extends Omit<MuiButtonProps, "variant"> {
  icon?: React.ReactNode;
  variant?: "contained" | "outlined" | "text" | "ghost";
}

export interface ContainedButtonProps extends BaseButtonProps {
  kind?: "contained";
  variant?: "contained";
  color?: "primary" | "secondary" | "error";
}

export interface GhostButtonProps extends BaseButtonProps {
  kind?: "ghost";
  variant?: "text" | "ghost";
  color?: "primary" | "secondary" | "error";
}

export interface OutlinedButtonProps extends BaseButtonProps {
  kind?: "outlined";
  variant?: "outlined";
  color?: "primary" | "secondary";
}

export type ButtonProps =
  | ContainedButtonProps
  | GhostButtonProps
  | OutlinedButtonProps;

export type ButtonTypeMap<
  P = {},
  D extends React.ElementType = MuiButtonTypeMap["defaultComponent"]
> = {
  props: P & ButtonProps;
  defaultComponent: D;
};

export type ButtonType = OverridableComponent<ButtonTypeMap>;
