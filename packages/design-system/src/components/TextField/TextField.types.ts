import type { BaseTextFieldProps } from "@mui/material/TextField";

export interface TextFieldProps
  extends Omit<BaseTextFieldProps, "variant" | "focused" | 'helperText'> {
  /**
   * The design system TextField variable is outlined fixed.
   */
  variant: "outlined";

  helperText?: string;

  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;

  handleLeftIconClick?: () => void;
  handleRightIconClick?: () => void;
}

export interface SingleTextFieldProps
  extends Omit<TextFieldProps, "multiline" | "rows"> {}

export interface MultiTextFieldProps extends TextFieldProps {
  /**
   * @default 1
   */
  rows: number | string;
}
