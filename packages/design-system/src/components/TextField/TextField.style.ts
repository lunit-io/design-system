import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const BaseTextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    height: "100%",
    "& fieldset": {
      border: "none",
    },
    "&.Mui-error fieldset": {
      border: `1px solid ${theme.palette.token.component.textfield_border_error}`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme.palette.token.core.focused}`,
    },
    "&.Mui-disabled fieldset": {
      opacity: 0.38,
    },
    background: theme.palette.token.component.textfield_bg,
    overflow: "hidden",
    color: theme.palette.token.core.text_normal,
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.token.core.text_medium,
    "&.Mui-error": {
      color: theme.palette.token.core.text_error,
    },
    margin: 0,
    marginTop: "4px",
    paddingLeft: "4px",
  },
  "& input, textarea": {
    textOverflow: "ellipsis",
    padding: "5px 10px",
    "&::placeholder": {
      color: theme.palette.token.core.text_medium,
      opacity: 1,
    },
  },
}));

const IconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  width: "28px",
  height: "28px",

  "& svg": {
    width: "20px",
    height: "20px",
    color: theme.palette.token.core.icon_normal,
  },
}));

export { BaseTextField, IconWrapper };
