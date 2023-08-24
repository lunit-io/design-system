import type { AlertColor, Theme } from "@mui/material";

export const getIconColor = (
  theme: Theme,
  severity: AlertColor | undefined
) => {
  switch (severity) {
    case "info":
      return theme.palette.lunit_token.core.icon_info_02;
    case "warning":
      return theme.palette.lunit_token.core.icon_warning_02;
    case "error":
      return theme.palette.lunit_token.core.icon_error_02;
    default:
      return theme.palette.lunit_token.core.icon_success_02;
  }
};
