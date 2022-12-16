import theme from "@/theme";
import { AlertColor } from "@mui/material";

export const getBackgroundColor = (severity: AlertColor | undefined) => {
  switch (severity) {
    case "info":
      return theme.palette.token.component.alert_info_bg;
    case "warning":
      return theme.palette.token.component.alert_warning_bg;
    case "error":
      return theme.palette.token.component.alert_error_bg;
    default:
      return theme.palette.token.component.alert_success_bg;
  }
};

export const getBorderColor = (severity: AlertColor | undefined) => {
  switch (severity) {
    case "info":
      return theme.palette.token.component.alert_info_border;
    case "warning":
      return theme.palette.token.component.alert_warning_border;
    case "error":
      return theme.palette.token.component.alert_error_border;
    default:
      return theme.palette.token.component.alert_success_border;
  }
};

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
