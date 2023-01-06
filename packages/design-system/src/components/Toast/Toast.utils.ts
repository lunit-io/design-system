import theme from "@/theme";
import type { AlertColor } from "@mui/material";

export const getIconColor = (severity: AlertColor | undefined) => {
  switch (severity) {
    case "info":
      return theme.palette.token.core.icon_info_02;
    case "warning":
      return theme.palette.token.core.icon_warning_02;
    case "error":
      return theme.palette.token.core.icon_error_02;
    default:
      return theme.palette.token.core.icon_sucess_02;
  }
};
