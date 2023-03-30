import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import type { ColorToken } from "@/foundation/colors/types";
import type { Typography } from "@mui/material/styles/createTypography";
import type { TextFieldProps, TextFieldSize } from "./TextField.types";

type BaseTextFieldProps = Omit<TextFieldProps, "size"> & {
  textFieldSize: TextFieldSize;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
};

interface GetTextFieldPaddingBySizeParams {
  multiline?: boolean;
  size: TextFieldSize;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
}

const getSinglelineTextFieldPaddingByIconAndSize = ({
  size,
  hasLeftIcon,
  hasRightIcon,
}: Pick<
  GetTextFieldPaddingBySizeParams,
  "size" | "hasLeftIcon" | "hasRightIcon"
>) => {
  switch (size) {
    case "small":
      return `4px ${hasRightIcon ? "8px" : "12px"} 4px ${
        hasLeftIcon ? "8px" : "12px"
      }}`;
    case "medium":
      return `8px ${hasRightIcon ? "12px" : "16px"} 8px ${
        hasLeftIcon ? "12px" : "16px"
      }}`;
    case "large":
      return `10px ${hasRightIcon ? "12px" : "16px"} 10px ${
        hasLeftIcon ? "12px" : "16px"
      }}`;
  }
};

const getMultilineTextFieldPaddingByIconAndSize = ({
  size,
}: Pick<GetTextFieldPaddingBySizeParams, "size">) => {
  switch (size) {
    case "small":
      return "4px 4px 4px 12px";
    case "medium":
      return "8px 4px 8px 16px";
    case "large":
      return "10px 4px 10px 16px";
  }
};

const getTextFieldPaddingBySize = ({
  size,
  multiline,
  hasLeftIcon,
  hasRightIcon,
}: GetTextFieldPaddingBySizeParams) => {
  return multiline
    ? getMultilineTextFieldPaddingByIconAndSize({ size })
    : getSinglelineTextFieldPaddingByIconAndSize({
        size,
        hasLeftIcon,
        hasRightIcon,
      });
};

const commonStyle = ({ token }: { token: ColorToken }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    width: "100%",

    "& fieldset": {
      border: "none",
    },
    "&.Mui-error fieldset": {
      border: `1px solid ${token.component.textfield_border_error}`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${token.core.focused}`,
    },
    "&.Mui-disabled": {
      opacity: 0.38,
      "&:hover::before": {
        backgroundColor: token.component.textfield_bg,
      },
    },
    "& input, textarea": {
      padding: 0,
      textOverflow: "ellipsis",
      "&::placeholder": {
        color: token.core.text_medium,
        opacity: 1,
        WebkitTextFillColor: token.core.text_medium,
      },
    },
    "& textarea": {
      height: "100% !important",
      overflowY: "scroll !important",
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "6px",
        backgroundColor: token.component.scrollbars_bg,
      },
    },
    background: token.component.textfield_bg,
    overflow: "hidden",
    color: token.core.text_normal,
    "&:hover": {
      position: "relative",
      zIndex: 0,
      backgroundColor: token.component.textfield_bg,
    },
    "&:hover::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      backgroundColor: token.core.hover,
    },
    "&.Mui-focused": {
      "&:hover::before": {
        backgroundColor: token.component.textfield_bg,
      },
    },
  },
  "& .MuiFormHelperText-root": {
    "&.Mui-disabled": {
      opacity: 0.38,
    },
    "&.Mui-error": {
      color: token.core.text_error,
    },
  },
});

const sizeStyle = ({
  token,
  textFieldSize,
  hasLeftIcon,
  hasRightIcon,
  typography,
  multiline,
}: Pick<
  BaseTextFieldProps,
  "textFieldSize" | "hasLeftIcon" | "hasRightIcon" | "multiline"
> & { token: ColorToken; typography: Typography }) => ({
  ...(textFieldSize === "small" && {
    "& .MuiInputBase-root": {
      padding: getTextFieldPaddingBySize({
        size: textFieldSize,
        hasLeftIcon,
        hasRightIcon,
        multiline,
      }),
      "& input, textarea": {
        ...typography.body2_14_regular,
      },
      "& input": {
        height: "20px",
      },
      "& textarea": {
        minHeight: "92px",
        paddingRight: "2px",
      },
    },
    "& .MuiFormHelperText-root": {
      ...typography.body2_14_regular,
      color: token.core.text_medium,
      margin: 0,
      marginTop: "4px",
      paddingLeft: "4px",

      "&.Mui-disabled": {
        color: token.core.text_medium,
        opacity: 0.38,
      },
      "&.Mui-error": {
        color: token.core.text_error,
      },
    },
  }),
  ...(textFieldSize === "medium" && {
    "& .MuiInputBase-root": {
      padding: getTextFieldPaddingBySize({
        size: textFieldSize,
        hasLeftIcon,
        hasRightIcon,
        multiline,
      }),
      "& input, textarea": {
        ...typography.body2_14_regular,
      },
      "& input": {
        height: "20px",
      },
      "& textarea": {
        minHeight: "84px",
        paddingRight: "6px",
      },
    },
    "& .MuiFormHelperText-root": {
      ...typography.body2_14_regular,
      color: token.core.text_medium,
      margin: 0,
      marginTop: "4px",
      paddingLeft: "4px",

      "&.Mui-disabled": {
        color: token.core.text_medium,
        opacity: 0.38,
      },
      "&.Mui-error": {
        color: token.core.text_error,
      },
    },
  }),
  ...(textFieldSize === "large" && {
    "& .MuiInputBase-root": {
      padding: getTextFieldPaddingBySize({
        size: textFieldSize,
        hasLeftIcon,
        hasRightIcon,
        multiline,
      }),
      "& input, textarea": {
        ...typography.body1_16_regular,
      },
      "& input": {
        height: "24px",
      },
      "& textarea": {
        minHeight: "80px",
        paddingRight: "6px",
      },
    },
    "& .MuiFormHelperText-root": {
      ...typography.body1_16_regular,
      color: token.core.text_medium,
      margin: 0,
      marginTop: "4px",
      paddingLeft: "4px",

      "&.Mui-disabled": {
        color: token.core.text_medium,
        opacity: 0.38,
      },
      "&.Mui-error": {
        color: token.core.text_error,
      },
    },
  }),
});

const BaseTextField = styled(MuiTextField, {
  shouldForwardProp: (prop: string) =>
    ![
      "leftIconSx",
      "rightIconSx",
      "leftIcon",
      "rightIcon",
      "textFieldSize",
      "hasLeftIcon",
      "hasRightIcon",
      "onLeftIconClick",
      "onRightIconClick",
    ].includes(prop),
})<BaseTextFieldProps>(
  ({
    theme: {
      typography,
      palette: { token },
    },
    multiline,
    textFieldSize,
    hasLeftIcon,
    hasRightIcon,
  }) => ({
    ...commonStyle({ token }),
    ...sizeStyle({
      token,
      textFieldSize,
      hasLeftIcon,
      hasRightIcon,
      typography,
      multiline,
    }),
  })
);

const IconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "28px",
  minHeight: "28px",
  margin: "-4px 0",

  "& svg": {
    width: "20px",
    height: "20px",
    color: theme.palette.token.core.text_normal,
  },
}));

export { BaseTextField, IconWrapper };
