import type { OutlinedTextFieldProps } from "@mui/material/TextField";

export interface BaseTextFieldProps
  extends Omit<OutlinedTextFieldProps, "value" | "helperText" | "variant"> {
  /**
   * The design system TextField variable is outlined fixed.
   */
  variant?: "outlined";

  value?: string;
  helperText?: string;
}

export interface SingleTextFieldProps extends BaseTextFieldProps {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;

  handleLeftIconClick?: () => void;
  handleRightIconClick?: () => void;
}

export interface MultiTextFieldProps extends BaseTextFieldProps {
  /**
   * @default 1
   */
  rows: number | string;
}

export type TextFieldProps = SingleTextFieldProps | MultiTextFieldProps;
