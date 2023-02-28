import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import { ColorToken } from "@/foundation/colors/types";
import { PADDING_OF_FOCUS, OUTLINED_BORDER_WIDTH } from "./const";
import { getButtonPaddingBySizeAndKind } from "./utils/getButtonPaddingBySizeAndKind";
import { getIconButtonPaddingBySizeAndKind } from "./utils/getIconButtonPaddingBySizeAndKind";

import type { ButtonProps } from "./Button.types";
import type { ToggleButtonProps } from "../ToggleButton/ToggleButton.types";
import type { Typography } from "@mui/material/styles/createTypography";

type KindStyleParams = Pick<ButtonProps, "kind" | "color"> & {
  token: ColorToken;
};

type CustomButtonProps = ButtonProps & { hasIconOnly: boolean };

type sizeStyleParams = Pick<
  CustomButtonProps,
  "size" | "hasIconOnly" | "kind"
> &
  Pick<ToggleButtonProps, "selected"> & { typography: Typography };

const borderRadius = "8px";

const hoverStyle = (backgroundColor: React.CSSProperties["color"]) => ({
  position: "relative",
  zIndex: 0,
  backgroundColor,
});

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
    minHeight: "28px",
  }),
  ...(size === "medium" && {
    ...typography.button2,
    padding: `${
      hasIconOnly
        ? getIconButtonPaddingBySizeAndKind({ kind, size, selected })
        : getButtonPaddingBySizeAndKind({ kind, size, selected })
    }`,
    minWidth: "36px",
    minHeight: "36px",
  }),
  ...(size === "large" && {
    ...typography.button1,
    padding: `${
      hasIconOnly
        ? getIconButtonPaddingBySizeAndKind({ kind, size, selected })
        : getButtonPaddingBySizeAndKind({ kind, size, selected })
    }`,
    minWidth: "44px",
    minHeight: "44px",
  }),
});

export const kindStyle = ({ kind, color, token }: KindStyleParams) => ({
  // kind: container
  ...(kind === "contained" &&
    color === "primary" && {
      color: token.component.btn_contained_primary_text,
      backgroundColor: token.component.btn_contained_primary_bg,
      "&:hover": hoverStyle(token.component.btn_contained_primary_bg),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: token.component.btn_contained_primary_text,
      },
    }),
  ...(kind === "contained" &&
    color === "secondary" && {
      color: token.component.btn_contained_secondary_text,

      backgroundColor: token.component.btn_contained_secondary_bg,
      "&:hover": hoverStyle(token.component.btn_contained_secondary_bg),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: token.component.btn_contained_secondary_text,
      },
    }),
  ...(kind === "contained" &&
    color === "error" && {
      color: token.component.btn_contained_error_text,
      backgroundColor: token.component.btn_contained_error_bg,
      "&:hover": hoverStyle(token.component.btn_contained_error_bg),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: token.component.btn_contained_error_text,
      },
    }),
  // kind: ghost
  ...(kind === "ghost" &&
    color === "primary" && {
      color: token.component.btn_ghost_primary_text,
      border: "none",
      "&:hover": hoverStyle("none"),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: token.component.btn_ghost_primary_text,
      },
    }),
  ...(kind === "ghost" &&
    color === "secondary" && {
      color: token.component.btn_ghost_secondary_text,
      border: "none",
      "&:hover": hoverStyle("none"),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: token.component.btn_ghost_secondary_text,
      },
    }),
  ...(kind === "ghost" &&
    color === "error" && {
      color: token.component.btn_ghost_error_text,
      "&:hover": hoverStyle("none"),
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: token.component.btn_ghost_error_text,
      },
    }),
  // kind: outlined
  ...(kind === "outlined" &&
    color === "primary" && {
      color: token.component.btn_outlined_primary_text,
      border: `${OUTLINED_BORDER_WIDTH}px solid ${token.component.btn_outlined_primary_border}`,
      "&:hover": hoverStyle("none"),
      "&:hover:before": {
        content: "''",
        position: "absolute",
        left: "-1px",
        top: "-1px",
        width: "calc(100% + 2px)",
        height: "calc(100% + 2px)",
        zIndex: -1,
        backgroundColor: token.core.hover,
        borderRadius,
      },
      "&.Mui-disabled": {
        opacity: 0.38,
        color: token.component.btn_outlined_primary_text,
      },
    }),
});

export const commonStyle = ({ token }: { token: ColorToken }) =>
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
        border: `1px solid ${token.core.focused}`,
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
      backgroundColor: token.core.hover,
      borderRadius,
    },
  } as const);

export const iconStyle = ({
  size,
  hasIconOnly,
}: Pick<CustomButtonProps, "size" | "hasIconOnly">) => ({
  "& .MuiButton-startIcon": {
    width: "20px",
    height: "20px",
    margin: 0,
    marginRight: hasIconOnly ? "0px" : size === "large" ? "8px" : "4px",

    // This style was added for Mui Button Svg Icon handling
    "*:nth-of-type(1)": {
      fontSize: "20px",
    },
  },
  svg: {
    width: "20px",
    height: "20px",
    margin: 0,
    marginRight: hasIconOnly ? "0px" : size === "large" ? "8px" : "4px",
  },
});

export const CustomButton = styled(MuiButton, {
  shouldForwardProp: (prop: string) => {
    return !["kind", "hasIconOnly"].includes(prop);
  },
})<CustomButtonProps>(
  ({
    theme: {
      typography,
      palette: { token },
    },
    kind,
    size,
    color,
    hasIconOnly,
  }) => ({
    ...commonStyle({ token }),
    ...iconStyle({ size, hasIconOnly }),
    ...sizeStyle({ size, kind, hasIconOnly, typography }),
    ...kindStyle({ kind, color, token }),
  })
);
