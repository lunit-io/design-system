import theme from "@/theme";
import { AlertColor } from "@mui/material";

export const ALERT_COLORS = {
  INFO: "info",
  ERROR: "error",
  WARNING: "warning",
  SUCCESS: "success",
} as const;

export const getAccentColor = (severity: AlertColor | undefined) => {
  console.log("severity :", severity);
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
