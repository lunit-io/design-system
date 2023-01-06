import { Alert, styled } from "@mui/material";
import { getIconColor } from "./Toast.utils";



export const StyledAlert = styled(Alert)(({ theme, severity }) => {
  return {
    'div[class*="MuiAlert"]':{
      display: "flex",
      alignItems: "center",
    },
    '&.MuiAlert-root': {
      color: theme.palette.token.core.text_normal,
      backgroundColor: theme.palette.token.core.bg_03,
      borderRadius: '8px',
      padding: "8px 16px 8px 16px",
      boxShadow: "0px 12px 24px 8px rgba(0, 0, 0, 0.12), 0px 12px 44px 3px rgba(0, 0, 0, 0.18)"
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
      padding: "0 64px 0 28px",
      marginRight: 0,
      "& .MuiButtonBase-root":{
        color: theme.palette.token.core.link_primary,
      }
    }
  }
})
