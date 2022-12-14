import {
  Alert as MuiAlert,
  AlertTitle as MuiAlertTitle,
  styled,
} from "@mui/material";
import { StyledAlertProps } from "./Alert.types";
import { getAccentColor } from "./consts";

export const StyledAlertTitle = styled(MuiAlertTitle)(({ theme }) => ({
  "&.MuiAlertTitle-root": {
    fontsize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
    color: theme.palette.token.core.text_normal,
  },
}));

export const StyledAlert = styled(MuiAlert)<StyledAlertProps>(
  ({ severity }) => ({
    "&.MuiAlert-root": {
      padding: "16px",
      minWidth: "320px",
      border: `1px solid ${getAccentColor(severity)}`,
    },
    "& .MuiAlert-icon": {
      fontSize: 20,
      padding: 0,
      marginRight: "16px",
    },
    "& .MuiAlert-message": {
      padding: 0,
    },
    "& .MuiSvgIcon-root": {
      height: "20px",
      width: "20px",
    },
  })
);
