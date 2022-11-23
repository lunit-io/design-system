import MuiInputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

const BaseTextField = styled(MuiInputUnstyled)(({ theme }) => ({
  "& input": {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "5px 10px",
    background: theme.palette.token.component.textfield_bg,
    overflow: "hidden",
  },
}));

export { BaseTextField };
