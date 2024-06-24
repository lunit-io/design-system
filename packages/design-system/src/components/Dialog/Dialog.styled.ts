import { styled } from "@mui/material/styles";

import type { DialogBase } from "./Dialog";
import type { CSSObject } from "@mui/material/styles";

export interface DialogElementStyle {
  [key: string]: CSSObject;
}

export type DialogStyle = Pick<DialogBase, "size" | "type" | "nonModal">;

const DIALOG_WRAPPER_STYLE: DialogElementStyle = {
  small: {
    width: "320px",
    maxWidth: "320px",
  },
  medium: {
    width: "500px",
    maxWidth: "840px",
  },
  modal: {
    position: "relative",
  },
  nonModal: {
    position: "fixed",
    top: "30px",
    right: "30px",
  },
};

const DIALOG_TITLE_STYLE: DialogElementStyle = {
  small: {
    height: "52px",
    maxHeight: "100%",
    padding: "20px 20px 4px 20px",
  },
  medium: {
    height: "64px",
    maxHeight: "100%",
    padding: "30px 32px 6px 32px",
  },
};

const DIALOG_CONTENT_STYLE: DialogElementStyle = {
  small: {
    paddingInline: "20px calc(20px - 10px)",
    paddingTop: "8px",
    paddingBottom: "28px",
  },
  smallAction: {
    paddingInline: "20px calc(20px - 10px)",
    paddingBlock: "8px",
  },
  medium: {
    paddingInline: "32px calc(32px - 14px)",
    paddingTop: "16px",
    paddingBottom: "32px",
  },
  mediumAction: {
    paddingInline: "32px calc(32px - 14px)",
    paddingBlock: "16px",
  },
};

const DIALOG_ACTION_STYLE: DialogElementStyle = {
  small: {
    height: "64px",
    padding: "8px 20px 20px 20px",
  },
  medium: {
    height: "84px",
    padding: "16px 32px 32px 32px",
  },
};

export const StyledBackdrop = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(17, 17, 19, 0.7)",
  zIndex: 1000,
  display: "grid",
  placeItems: "center",
});

export const StyledDialog = styled("div")<DialogStyle>(
  ({ theme, size, nonModal, type }) => ({
    zIndex: 1001,
    maxHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    borderRadius: "10px",
    backgroundColor: theme.palette.lunit_token.core.bg_03,
    color: theme.palette.lunit_token.core.text_normal,

    ...DIALOG_WRAPPER_STYLE[size === "small" ? "small" : "medium"],
    ...DIALOG_WRAPPER_STYLE[nonModal ? "nonModal" : "modal"],

    "& #dialog-title": {
      ...DIALOG_TITLE_STYLE[size === "small" ? "small" : "medium"],
    },

    "& #dialog-content": {
      ...DIALOG_CONTENT_STYLE[
        size === "small" && type !== "passive"
          ? "smallAction"
          : size === "small"
          ? "small"
          : size === "medium" && type !== "passive"
          ? "mediumAction"
          : "medium"
      ],

      scrollbarGutter: "stable",
      "::-webkit-scrollbar": {
        width: size === "small" ? "10px" : "14px",
      },
      "::webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundClip: "padding-box",
        border: `2px solid transparent`,
        /**
         * Figma's border-radius is 6px, but actual border radius is 10px since padding 2px is added.
         */
        borderRadius: "10px",
        backgroundColor: theme.palette.lunit_token.component.scrollbars_bg,
      },
    },

    "& #dialog-action": {
      ...DIALOG_ACTION_STYLE[size === "small" ? "small" : "medium"],
    },
  })
);

export const StyledDialogTitle = styled("header")({
  display: "flex",
  width: "100%",
  flex: "0 0 auto",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "8px",
});

export const StyledDialogTitleIconWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  "& .MuiSvgIcon-root": {
    display: "flex",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    fontSize: "20px",
  },
});

export const StyledDialogContent = styled("div")(({ theme }) => ({
  ...theme.typography.body2_14_regular,
  flex: "1 1 auto",
  overflowY: "scroll",
}));
