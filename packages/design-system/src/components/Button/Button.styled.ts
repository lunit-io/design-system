import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import { ColorToken } from "@/foundation/colors/types";
import { PADDING_OF_FOCUS, OUTLINED_BORDER_WIDTH } from "./const";
import { getButtonPaddingBySizeAndKind } from "./utils/getButtonPaddingBySizeAndKind";
import { getIconButtonPaddingBySizeAndKind } from "./utils/getIconButtonPaddingBySizeAndKind";
import getHoverStyle from "./utils/getHoverStyle";

import type { ButtonProps } from "./Button.types";
import type { ToggleButtonProps } from "../ToggleButton/ToggleButton.types";
import type { Typography } from "@mui/material/styles/createTypography";

type KindStyleParams = Pick<ButtonProps, "kind" | "color"> & {
  lunit_token: ColorToken;
};

type CustomButtonProps = ButtonProps & { hasIconOnly: boolean };

type sizeStyleParams = Pick<
  CustomButtonProps,
  "size" | "hasIconOnly" | "kind"
> &
  Pick<ToggleButtonProps, "selected"> & { typography: Typography };

const borderRadius = "8px";

export const sizeStyle = ({
  size,
  kind,
  hasIconOnly,
  typography,
  selected = false,
}: sizeStyleParams) => ({
  ...(size === "small" && {
    ...typography.button2,
    padding: `${
      hasIconOnly
        ? getIconButtonPaddingBySizeAndKind({ kind, size, selected })
        : getButtonPaddingBySizeAndKind({ kind, size, selected })
    }`,
    minWidth: "28px",
    height: "28px",
  }),
  ...(size === "medium" && {
    ...typography.button2,
    padding: `${
      hasIconOnly
        ? getIconButtonPaddingBySizeAndKind({ kind, size, selected })
        : getButtonPaddingBySizeAndKind({ kind, size, selected })
    }`,
    minWidth: "36px",
    height: "36px",
  }),
  ...(size === "large" && {
    ...typography.button1,
    padding: `${
      hasIconOnly
        ? getIconButtonPaddingBySizeAndKind({ kind, size, selected })
        : getButtonPaddingBySizeAndKind({ kind, size, selected })
    }`,
    minWidth: "44px",
    height: "44px",
  }),
});

export const kindStyle = ({ kind, color, lunit_token }: KindStyleParams) => ({
  // kind: container
  ...(kind === "contained" &&
    color === "primary" && {
      color: lunit_token.component.btn_primary_text_2,
      backgroundColor: lunit_token.component.btn_primary_bg,
      "&:hover": getHoverStyle(lunit_token.component.btn_primary_bg),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: lunit_token.component.btn_primary_text_2,
      },
    }),
  ...(kind === "contained" &&
    color === "secondary" && {
      color: lunit_token.component.btn_secondary_text,
      backgroundColor: lunit_token.component.btn_secondary_bg,
      "&:hover": getHoverStyle(lunit_token.component.btn_secondary_bg),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: lunit_token.component.btn_secondary_text,
      },
    }),
  ...(kind === "contained" &&
    color === "error" && {
      color: lunit_token.component.btn_primary_text_2,
      backgroundColor: lunit_token.component.btn_error_bg,
      "&:hover": getHoverStyle(lunit_token.component.btn_error_bg),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: lunit_token.component.btn_primary_text_2,
      },
    }),
  // kind: ghost
  ...(kind === "ghost" &&
    color === "primary" && {
      color: lunit_token.component.btn_primary_text_1,
      border: "none",
      "&:hover": getHoverStyle("none"),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: lunit_token.component.btn_primary_text_1,
      },
    }),
  ...(kind === "ghost" &&
    color === "secondary" && {
      color: lunit_token.component.btn_secondary_text,
      border: "none",
      "&:hover": getHoverStyle("none"),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: lunit_token.component.btn_secondary_text,
      },
    }),
  ...(kind === "ghost" &&
    color === "error" && {
      color: lunit_token.component.btn_error_text,
      "&:hover": getHoverStyle("none"),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: lunit_token.component.btn_error_text,
      },
    }),
  // kind: outlined
  ...(kind === "outlined" &&
    color === "primary" && {
      color: lunit_token.component.btn_primary_text_1,
      border: `${OUTLINED_BORDER_WIDTH}px solid ${lunit_token.component.btn_primary_border}`,
      "&:hover": getHoverStyle("none"),
      "&:hover:before": {
        content: "''",
        position: "absolute",
        left: "-1px",
        top: "-1px",
        width: "calc(100% + 2px)",
        height: "calc(100% + 2px)",
        zIndex: -1,
        backgroundColor: lunit_token.core.hover,
        borderRadius,
      },
      "&.Mui-disabled": {
        opacity: 0.38,
        color: lunit_token.component.btn_primary_text_1,
      },
    }),
  ...(kind === "outlined" &&
    color === "secondary" && {
      color: lunit_token.component.btn_secondary_text,
      border: `${OUTLINED_BORDER_WIDTH}px solid ${lunit_token.core.border_medium}`,
      "&:hover": getHoverStyle("none"),
      "&:hover:before": {
        content: "''",
        position: "absolute",
        left: "-1px",
        top: "-1px",
        width: "calc(100% + 2px)",
        height: "calc(100% + 2px)",
        zIndex: -1,
        backgroundColor: lunit_token.core.hover,
        borderRadius,
      },
      "&.Mui-disabled": {
        opacity: 0.38,
        color: lunit_token.component.btn_secondary_text,
      },
    }),
});

export const commonStyle = ({ lunit_token }: { lunit_token: ColorToken }) =>
  ({
    fontWeight: "500",
    borderRadius,
    textTransform: "initial",
    "&.Mui-focusVisible": {
      "&::after": {
        position: "absolute",
        width: `calc(100% + ${PADDING_OF_FOCUS}px)`,
        height: `calc(100% + ${PADDING_OF_FOCUS}px)`,
        content: '""',
        borderRadius: "11px",
        border: `1px solid ${lunit_token.core.focused}`,
        boxSizing: "border-box",
      },
    },
    "&:hover:before": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      backgroundColor: lunit_token.core.hover,
      borderRadius,
    },
  } as const);

export const iconStyle = ({
  size,
  hasIconOnly,
}: Pick<CustomButtonProps, "size" | "hasIconOnly">) => ({
  "& .MuiButton-startIcon": {
    margin: 0,
    marginRight: hasIconOnly ? "0px" : size === "large" ? "8px" : "4px",

    "*:nth-of-type(1)": {
      fontSize: "20px",
    },
  },
});

export const CustomButton = styled(MuiButton, {
  shouldForwardProp: (prop: string) => {
    return !["kind", "hasIconOnly", "variant"].includes(prop);
  },
})<CustomButtonProps>(
  ({
    theme: {
      typography,
      palette: { lunit_token },
    },
    kind,
    size,
    color,
    hasIconOnly,
  }) => ({
    ...commonStyle({ lunit_token }),
    ...iconStyle({ size, hasIconOnly }),
    ...sizeStyle({ size, kind, hasIconOnly, typography }),
    ...kindStyle({ kind, color, lunit_token }),
  })
);
