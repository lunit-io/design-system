import { BaseTextFieldProps } from "../TextField";

export interface SearchProps extends BaseTextFieldProps {
  searchIcon?: JSX.Element;
  resetIcon?: JSX.Element;

  handleResetIconClick?: () => void;
}
