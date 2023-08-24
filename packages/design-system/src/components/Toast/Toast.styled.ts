import { Alert, styled } from "@mui/material";
import { getIconColor } from "./Toast.utils";

export const StyledToast = styled(Alert)(({ theme, severity }) => {
  return {
    'div[class*="MuiAlert"]': {
      display: "flex",
      alignItems: "center",
    },
    "&.MuiAlert-root": {
      padding: "8px 16px 8px 16px",
      margin: 0,
      color: theme.palette.lunit_token.core.text_normal,
      backgroundColor: theme.palette.lunit_token.core.bg_03,
      borderRadius: "8px",
    },
    "& .MuiAlert-icon": {
      height: "36px",
      marginRight: "16px",
      fontSize: 20,
      color: `${getIconColor(theme, severity)}`,
      "& .MuiSvgIcon-root": {
        height: "16px",
        width: "16px",
      },
    },
    "& .MuiAlert-message": {
      // max length of toast message is 400px
      maxWidth: "400px",
      minHeight: "28px",
      padding: "8px 0 8px 0",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      "& .Toast-message": {
        display: "block",
      },
    },
    "& .MuiAlert-action": {
      alignSelf: "flex-start",
      minHeight: "36px",
      marginRight: "0px",
      padding: 0,
      "& .MuiSvgIcon-root": {
        color: theme.palette.lunit_token.core.text_normal,
      },
    },
  };
});
