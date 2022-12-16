import {
  Alert as MuiAlert,
  AlertTitle as MuiAlertTitle,
  IconButton as MuiIconButton,
  styled,
} from "@mui/material";
import { StyledAlertProps } from "./Alert.types";
import { getBorderColor, getBackgroundColor, getIconColor } from "./consts";

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

export const StyledAlert = styled(MuiAlert)<StyledAlertProps>(
  ({ severity }) => ({
    "&.MuiAlert-root": {
      padding: "16px",
      minWidth: "320px",
      borderRadius: "8px",
      border: `1px solid ${getBorderColor(severity)}`,
      backgroundColor: getBackgroundColor(severity),
    },
    "& .MuiAlert-icon": {
      padding: 0,
      fontSize: 20,
      marginRight: "16px",
      color: `${getIconColor(severity)} !important`,
    },
    "& .MuiAlert-message": {
      padding: 0,
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

export const StyledBottomAction = styled("div")({
  marginTop: "12px",
});
