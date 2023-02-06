import type { SxProps } from "@mui/material";

import type { BaseTextFieldProps } from "../TextField";

export interface SearchProps extends BaseTextFieldProps {
  searchIcon?: JSX.Element;
  resetIcon?: JSX.Element;
  searchIconSx?: SxProps;
  resetIconSx?: SxProps;

  handleResetIconClick?: () => void;
}
