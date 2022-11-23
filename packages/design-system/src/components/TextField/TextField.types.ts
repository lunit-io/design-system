import { SxProps } from "@mui/material";

export interface TextFieldProps {
  sx?: SxProps;
  isMultiline?: true;
  rows?: number;
}

export interface SingleTextFieldProps {
  sx?: SxProps;
}

export interface MultiTextFieldProps {
  sx?: SxProps;
  rows?: number;
}
