import type { OutlinedTextFieldProps } from "@mui/material/TextField";

export type TextFieldSize = "small" | "medium" | "large";
export interface BaseTextFieldProps
  extends Omit<
    OutlinedTextFieldProps,
    "size" | "value" | "helperText" | "variant"
  > {
  /**
   * The design system TextField variable is outlined fixed.
   */
  variant: "outlined";
  value?: string;
  helperText?: string;

  /**
   * @default "small"
   */
  size?: TextFieldSize;
}

export interface SingleTextFieldProps extends BaseTextFieldProps {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  size: TextFieldSize;
  handleLeftIconClick?: () => void;
  handleRightIconClick?: () => void;
}

export interface MultiTextFieldProps extends BaseTextFieldProps {
  /**
   * @default 1
   */
  rows: number | string;
  size: TextFieldSize;
}

export type TextFieldProps = SingleTextFieldProps | MultiTextFieldProps;
