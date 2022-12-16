import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const BaseTextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
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
    padding: "5px 10px",
    background: theme.palette.token.component.textfield_bg,
    overflow: "hidden",
    color: theme.palette.token.core.text_normal,
  },
  "& .MuiFormHelperText-root": {
    "&.Mui-error": {
      color: theme.palette.token.core.text_error,
    },
    margin: 0,
    marginTop: "4px",
    paddingLeft: "4px",
  },
  "& input, textarea": {
    padding: 0,
    "&::placeholder": {
      color: theme.palette.token.core.text_medium,
    },
  },
}));

export { BaseTextField };
