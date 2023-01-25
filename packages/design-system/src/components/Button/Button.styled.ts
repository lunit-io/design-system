import { ColorToken } from "@/foundation/colors/types";
import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./Button.types";

type KindStyleParams = Pick<ButtonProps, "kind" | "color"> & {
  token: ColorToken;
};

const sizeStyle = ({ size }: Pick<ButtonProps, "size">) => ({
  ...(size === "small" && { padding: "4px 8px", minWidth: "28px" }),
  ...(size === "medium" && { padding: "8px 12px", minWidth: "36px" }),
  ...(size === "large" && { padding: "10px 12px", minWidth: "44px" }),
});

const kindStyle = ({ kind, color, token }: KindStyleParams) => ({
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
        color: token.component.btn_ghost_error_text,
      },
    }),
  // kind: outlined
  ...(kind === "outlined" &&
    color === "primary" && {
      color: token.component.btn_outlined_primary_text,
      border: `1px solid ${token.component.btn_outlined_primary_border}`,
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.06)", // TODO: color util function 추가 후 변경
      },
      "&.Mui-disabled": {
        opacity: 0.38,
        color: token.component.btn_outlined_primary_text,
      },
    }),
});

const commonStyle = {
  fontWeight: "500",
  borderRadius: "8px",
  textTransform: "initial",
} as const;

export const CustomButton = styled(MuiButton, {
  shouldForwardProp: (prop: string) => {
    return !["kind", "size", "color"].includes(prop);
  },
})<ButtonProps>(
  ({
    theme: {
      palette: { token },
    },
    kind,
    size,
    color,
  }) => ({
    ...commonStyle,
    ...sizeStyle({ size }),
    ...kindStyle({ kind, color, token }),
  })
);
