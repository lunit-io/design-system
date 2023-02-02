import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import type { ColorToken } from "@/foundation/colors/types";
import type { TextFieldProps, TextFieldSize } from "./TextField.types";

type BaseTextFieldProps = Omit<TextFieldProps, "size"> & {
  textFieldSize: TextFieldSize;
};

const commonStyle = ({ token }: { token: ColorToken }) => ({
  "& .MuiOutlinedInput-root": {
    height: "100%",
    "& fieldset": {
      border: "none",
    },
    "&.Mui-error fieldset": {
      border: `1px solid ${token.component.textfield_border_error}`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${token.core.focused}`,
    },
    "&.Mui-disabled fieldset": {
      opacity: 0.38,
    },
    background: token.component.textfield_bg,
    overflow: "hidden",
    color: token.core.text_normal,
  },
  "& .MuiFormHelperText-root": {
    color: token.core.text_medium,
    "&.Mui-error": {
      color: token.core.text_error,
    },
    margin: 0,
    marginTop: "4px",
    paddingLeft: "4px",
  },
  "& input, textarea": {
    textOverflow: "ellipsis",
    "&::placeholder": {
      color: token.core.text_medium,
      opacity: 1,
    },
  },
});

const sizeStyle = ({ size }: Pick<TextFieldProps, "size">) => ({
  ...(size === "small" && {
    "& input, textarea": {
      padding: "4px 12px",
      fontSize: "14px",
    },
  }),
  ...(size === "medium" && {
    "& input, textarea": {
      padding: "8px 16px",
      fontSize: "14px",
    },
  }),
  ...(size === "large" && {
    "& input, textarea": {
      padding: "10px 16px",
      fontSize: "16px",
    },
  }),
});

const BaseTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) => prop !== "textFieldSize",
})<BaseTextFieldProps>(
  ({
    theme: {
      palette: { token },
    },
    textFieldSize,
  }) => ({
    ...commonStyle({ token }),
    ...sizeStyle({ size: textFieldSize }),
  })
);

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
