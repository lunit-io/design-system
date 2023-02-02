import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

import { ColorToken } from "@/foundation/colors/types";
import { PADDING_OF_FOCUS, OUTLINED_BORDER_WIDTH } from "./const";
import { getButtonPaddingBySizeAndKind } from "./utils/getButtonPaddingBySizeAndKind";
import { getIconButtonPaddingBySizeAndKind } from "./utils/getIconButtonPaddingBySizeAndKind";

import type { ButtonProps } from "./Button.types";
import { ToggleButtonProps } from "../ToggleButton/ToggleButton.types";

type KindStyleParams = Pick<ButtonProps, "kind" | "color"> & {
  token: ColorToken;
};

type CustomButtonProps = ButtonProps & { hasIconOnly: boolean };

export const sizeStyle = ({
  size,
  kind,
  hasIconOnly,
  selected = false,
}: Pick<CustomButtonProps, "size" | "hasIconOnly" | "kind"> &
  Pick<ToggleButtonProps, "selected">) => ({
  ...(size === "small" && {
    padding: `${
      hasIconOnly
        ? getIconButtonPaddingBySizeAndKind({ kind, size, selected })
        : getButtonPaddingBySizeAndKind({ kind, size, selected })
    }`,
    minWidth: "28px",
    minHeight: "28px",
  }),
  ...(size === "medium" && {
    padding: `${
      hasIconOnly
        ? getIconButtonPaddingBySizeAndKind({ kind, size, selected })
        : getButtonPaddingBySizeAndKind({ kind, size, selected })
    }`,
    minWidth: "36px",
    minHeight: "36px",
  }),
  ...(size === "large" && {
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
      "&:hover": {
        backgroundColor: token.component.btn_contained_primary_bg,
      },
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
      "&:hover": {
        backgroundColor: token.component.btn_contained_secondary_bg,
      },
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
      "&:hover": {
        backgroundColor: token.component.btn_contained_error_bg,
      },
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
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.06)",
      },
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
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.06)",
      },
      "&.Mui-disabled": {
        opacity: 0.38,
        border: "none",
        color: token.component.btn_ghost_secondary_text,
      },
    }),
  ...(kind === "ghost" &&
    color === "error" && {
      color: token.component.btn_ghost_error_text,
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.06)",
      },
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
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.06)", // TODO: color util function 추가 후 변경
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
    borderRadius: "8px",
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
      palette: { token },
    },
    kind,
    size,
    color,
    hasIconOnly,
  }) => ({
    ...commonStyle({ token }),
    ...iconStyle({ size, hasIconOnly }),
    ...sizeStyle({ size, kind, hasIconOnly }),
    ...kindStyle({ kind, color, token }),
  })
);
