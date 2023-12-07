import type { SxProps } from "@mui/material";
import type {
  TextFieldProps as MuiTextFieldProps,
  OutlinedTextFieldProps,
} from "@mui/material/TextField";

export type TextFieldSize = "small" | "medium" | "large";
export interface BaseTextFieldProps
  extends Omit<
    OutlinedTextFieldProps,
    "size" | "value" | "helperText" | "variant"
  > {
  /**
   * The design system TextField has only on kind, which is "contained"
    Below are all return same kind "contained"
    <TextField variant="outlined" />
    <TextField variant="contained" />
    <TextField variant="filled" />
    <TextField variant="standard" />
   */
  variant?: MuiTextFieldProps["variant"];
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
  leftIconSx?: SxProps;
  rightIconSx?: SxProps;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
}

export interface MultiTextFieldProps extends BaseTextFieldProps {
  rows?: number | string;
}

export type TextFieldProps = SingleTextFieldProps | MultiTextFieldProps;
