import { Alert, Box, styled } from "@mui/material";
import { getIconColor } from "./Toast.utils";



export const StyledToast = styled(Alert)(({ theme, severity }) => {
  return {
    'div[class*="MuiAlert"]':{
      display: "flex",
      alignItems: "center",
    },
    '&.MuiAlert-root': {
      color: theme.palette.token.core.text_normal,
      backgroundColor: theme.palette.token.core.bg_03,
      padding: "8px 16px 8px 16px",
      margin: 0,
      boxShadow: "none"
    },
    "& .MuiAlert-icon": {
      height: "36px",
      marginRight: "16px",
      fontSize: 20,
      color: `${getIconColor(severity)}`,
      "& .MuiSvgIcon-root": {
        height: "14px",
        width: "14px",
      },
    },
    "& .MuiAlert-message": {
      minHeight: "28px",
      padding: "8px 0 8px 0",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
    "& .MuiAlert-action": {
      height: "36px",
      padding: "0 0px 0 28px",
      marginRight: 0,
      "& .MuiButtonBase-root":{
        color: theme.palette.token.core.link_primary,
        marginRight: "20px",
      },
      "& .MuiSvgIcon-root": {
        color: theme.palette.token.core.text_normal
      }
    }
  }
})



export const StyledToastElevation = styled(Box)(() => ({
  borderRadius: "8px",
}));
