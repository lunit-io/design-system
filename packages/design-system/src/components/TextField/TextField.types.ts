import type { BaseTextFieldProps } from "@mui/material/TextField";

export interface TextFieldProps
  extends Omit<BaseTextFieldProps, "variant" | "focused"> {
  /**
   * The design system TextField variable is outlined fixed.
   */
  variant: "outlined";
}

export interface SingleTextFieldProps
  extends Omit<TextFieldProps, "multiline" | "rows"> {}

export interface MultiTextFieldProps extends TextFieldProps {
  /**
   * @default 1
   */
  rows: number | string;
}
