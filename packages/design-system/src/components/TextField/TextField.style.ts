import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const BaseTextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme.palette.token.core.focused}`,
    },
    // TODO: Hover border 색상 확인 필요 디자인과 다른 색상으로 나옴
    // "&:hover fieldset": {
    //   backgroundColor: theme.palette.token.core.hover,
    // },

    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px 10px",
    background: theme.palette.token.component.textfield_bg,
    overflow: "hidden",
    color: theme.palette.token.core.text_normal,
  },

  "& input, textarea": {
    padding: 0,
    "&::placeholder": {
      color: theme.palette.token.core.text_medium,
    },
  },
}));

export { BaseTextField };
