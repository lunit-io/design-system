import {
  Alert as MuiAlert,
  AlertTitle as MuiAlertTitle,
  IconButton as MuiIconButton,
  styled,
} from "@mui/material";
import { AlertProps } from "./Alert.types";
import {
  getBorderColor,
  getBackgroundColor,
  getIconColor,
} from "./Alert.utils.";

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

export const StyledAlert = styled(MuiAlert)<AlertProps>(
  ({ severity, width, isSnackbar }) => ({
    "&.MuiAlert-root": {
      display: "flex",
      width: width,
      padding: "15px",
      minWidth: "364px",
      maxWidth: isSnackbar ? "504px" : "10000px",
      borderRadius: "8px",
      border: `1px solid ${getBorderColor(severity)}`,
      backgroundColor: getBackgroundColor(severity),
      boxShadow: "none",
    },
    "& .MuiAlert-icon": {
      padding: "4px",
      fontSize: 20,
      marginRight: "16px",
      color: `${getIconColor(severity)} !important`,
    },
    "& .MuiAlert-message": {
      padding: "4px 0",
      width: "100%",
      minHeight: "28px",
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

export const StyledIconButton = styled(MuiIconButton)(({ theme }) => ({
  height: "28px",
  width: "28px",
  marginLeft: "16px",
  color: theme.palette.token.core.text_normal,
}));

export const StyledAlertChildren = styled("div")(({ theme }) => ({
  color: theme.palette.token.core.text_normal,
}));

export const StyledBottomAction = styled("div")({
  marginTop: "12px",
});
