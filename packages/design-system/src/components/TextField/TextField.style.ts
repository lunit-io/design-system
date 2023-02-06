import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import type { ColorToken } from "@/foundation/colors/types";
import type { TextFieldProps, TextFieldSize } from "./TextField.types";

type BaseTextFieldProps = Omit<TextFieldProps, "size"> & {
  textFieldSize: TextFieldSize;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
};

interface GetTextFieldPaddingBySizeParams {
  size: TextFieldSize;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
}

const getTextFieldPaddingBySize = ({
  size,
  hasLeftIcon,
  hasRightIcon,
}: GetTextFieldPaddingBySizeParams) => {
  switch (size) {
    case "small":
      return `0px ${hasRightIcon ? "6px" : "12px"} 0px ${
        hasLeftIcon ? "6px" : "12px"
      }}`;
    case "medium":
      return `0px ${hasRightIcon ? "10px" : "16px"} 0px ${
        hasLeftIcon ? "10px" : "16px"
      }}`;
    case "large":
      return `0px ${hasRightIcon ? "10px" : "16px"} 0px ${
        hasLeftIcon ? "10px" : "16px"
      }}`;
  }
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

const sizeStyle = ({
  textFieldSize,
  hasLeftIcon,
  hasRightIcon,
}: Pick<
  BaseTextFieldProps,
  "textFieldSize" | "hasLeftIcon" | "hasRightIcon"
>) => ({
  ...(textFieldSize === "small" && {
    "& .MuiInputBase-root": {
      padding: getTextFieldPaddingBySize({
        size: textFieldSize,
        hasLeftIcon,
        hasRightIcon,
      }),
    },
    "& input, textarea": {
      padding: "4px 0px",
      fontSize: "14px",
    },
    "& input": {
      height: "20px",
    },
    "& textarea": {
      minHeight: "92px",
    },
  }),
  ...(textFieldSize === "medium" && {
    "& .MuiInputBase-root": {
      padding: getTextFieldPaddingBySize({
        size: textFieldSize,
        hasLeftIcon,
        hasRightIcon,
      }),
    },
    "& input, textarea": {
      padding: "8px 0px",
      fontSize: "14px",
    },
    "& input": {
      height: "20px",
    },
    "& textarea": {
      minHeight: "84px",
    },
  }),
  ...(textFieldSize === "large" && {
    "& .MuiInputBase-root": {
      padding: getTextFieldPaddingBySize({
        size: textFieldSize,
        hasLeftIcon,
        hasRightIcon,
      }),
    },
    "& input, textarea": {
      padding: "10px 0px",
      fontSize: "16px",
    },
    "& input": {
      height: "24px",
    },
    "& textarea": {
      minHeight: "80px",
    },
  }),
});

const BaseTextField = styled(MuiTextField, {
  shouldForwardProp: (prop: string) =>
    ![
      "leftIcon",
      "rightIcon",
      "textFieldSize",
      "hasLeftIcon",
      "hasRightIcon",
      "handleLeftIconClick",
      "handleRightIconClick",
    ].includes(prop),
})<BaseTextFieldProps>(
  ({
    theme: {
      palette: { token },
    },
    textFieldSize,
    hasLeftIcon,
    hasRightIcon,
  }) => ({
    ...commonStyle({ token }),
    ...sizeStyle({ textFieldSize, hasLeftIcon, hasRightIcon }),
  })
);

const IconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  minHeight: "28px",
  marginRight: "2px",

  "& svg": {
    width: "20px",
    height: "20px",
    color: theme.palette.token.core.text_normal,
  },
}));

export { BaseTextField, IconWrapper };