import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import type { ColorToken } from "@/foundation/colors/types";
import type { Typography } from "@mui/material/styles/createTypography";
import type { TextFieldProps, TextFieldSize } from "./TextField.types";

type BaseTextFieldProps = Omit<TextFieldProps, "size"> & {
  textFieldSize: TextFieldSize;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  hasScroll?: boolean;
};

interface GetTextFieldPaddingBySizeParams {
  size: TextFieldSize;
  hasScroll?: boolean;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
}

const getTextFieldPaddingByScrollAndSize = ({
  size,
  hasScroll,
}: Pick<GetTextFieldPaddingBySizeParams, "size" | "hasScroll">) => {
  switch (size) {
    case "small": {
      return `4px ${hasScroll ? "4px" : "12px"} 4px 12px`;
    }
    case "medium": {
      return `8px ${hasScroll ? "4px" : "16px"} 8px 16px`;
    }
    case "large": {
      return `10px ${hasScroll ? "4px" : "16px"} 10px 16px`;
    }
  }
};

const getTextFieldPaddingByIconAndSize = ({
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

const getTextFieldPaddingBySize = ({
  size,
  hasScroll,
  hasLeftIcon,
  hasRightIcon,
}: GetTextFieldPaddingBySizeParams) => {
  return hasScroll
    ? getTextFieldPaddingByScrollAndSize({ size, hasScroll })
    : getTextFieldPaddingByIconAndSize({
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
      padding: "0 !important",
      textOverflow: "ellipsis",
      "&::placeholder": {
        color: token.core.text_medium,
        opacity: 1,
        WebkitTextFillColor: token.core.text_medium,
      },
    },
    "& textarea": {
      height: "100% !important",
      overflow: "auto !important",
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
  hasScroll,
}: Pick<
  BaseTextFieldProps,
  "textFieldSize" | "hasLeftIcon" | "hasRightIcon" | "hasScroll"
> & { token: ColorToken; typography: Typography }) => ({
  ...(textFieldSize === "small" && {
    "& .MuiInputBase-root": {
      padding: getTextFieldPaddingBySize({
        size: textFieldSize,
        hasLeftIcon,
        hasRightIcon,
        hasScroll,
      }),
      "& input, textarea": {
        ...typography.body2_14_regular,
      },
      "& input": {
        height: "20px",
      },
      "& textarea": {
        /**
         * If there is scrolling, the right padding will be different.
         * However, the total length shouldn't change,
         * so we adjust the padding right value as shown below.
         */
        paddingRight: hasScroll ? "8px" : "0px",
        minHeight: "92px",
        height: "100%",
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
        hasScroll,
      }),
      "& input, textarea": {
        ...typography.body2_14_regular,
      },
      "& input": {
        height: "20px",
      },
      "& textarea": {
        paddingRight: hasScroll ? "12px" : "0px",
        minHeight: "84px",
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
        hasScroll,
      }),
      "& input, textarea": {
        ...typography.body1_16_regular,
      },
      "& input": {
        height: "24px",
      },
      "& textarea": {
        paddingRight: hasScroll ? "12px" : "0px",
        minHeight: "80px",
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
      "hasScroll",
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
    hasScroll,
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
      hasScroll,
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
