import {
  Alert as MuiAlert,
  AlertTitle as MuiAlertTitle,
  styled,
} from "@mui/material";
import type { AlertProps } from "./Alert.types";
import {
  getBorderColor,
  getBackgroundColor,
  getIconColor,
} from "./Alert.utils";

export const StyledAlert = styled(MuiAlert)<AlertProps>(
  ({ severity, theme }) => ({
    "&.MuiAlert-root": {
      display: "flex",
      padding: "12px",
      borderRadius: "8px",
      border: `1px solid ${getBorderColor(theme, severity)}`,
      backgroundColor: getBackgroundColor(theme, severity),
      boxShadow: "none",
    },
    "& .MuiAlert-icon": {
      padding: "4px",
      marginRight: "0",
      fontSize: "20px",
      color: `${getIconColor(theme, severity)} !important`,
    },
    "& .MuiAlert-message": {
      width: "100%",
      minHeight: "28px",
      padding: "4px 0 0",
      margin: "0 8px 0 8px",
    },
    "& .MuiAlert-action": {
      margin: 0,
      padding: 0,
    },
    "& .MuiSvgIcon-root": {
      height: "20px",
      width: "20px",
    },
  })
);

export const StyledAlertTitle = styled(MuiAlertTitle)(({ theme }) => ({
  "&.MuiAlertTitle-root": {
    marginTop: 0,
    marginBottom: 8,
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "20px",
    color: theme.palette.token.core.text_normal,
  },
}));

export const StyledAlertChildren = styled("div")(({ theme }) => ({
  color: theme.palette.token.core.text_normal,
}));

export const StyledBottomAction = styled("div")({
  marginTop: "12px",
});
