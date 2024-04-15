import { styled } from "@mui/material/styles";

import type { DialogPropsBase } from "./Dialog";
import type { CSSObject } from "@mui/material/styles";

export interface DialogElementStyle {
  [key: string]: CSSObject;
}

export type DialogStyle = Pick<DialogPropsBase, "isSmall" | "modalType">;

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
    boxShadow:
      "0px 12px 24px 8px rgba(0, 0, 0, 0.12), 0px 12px 44px 3px rgba(0, 0, 0, 0.18)",
  },
  nonModal: {
    position: "fixed",
    top: "30px",
    right: "30px",
    boxShadow:
      "0px 12px 24px 8px rgba(0, 0, 0, 0.36), 0px 12px 44px 3px rgba(0, 0, 0, 0.48)",
  },
};

const DIALOG_TITLE_STYLE: DialogElementStyle = {
  small: {
    height: "52px",
    maxHeight: "100%",
    padding: "20px 20px 8px 20px",
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
    paddingBottom: "28px",
  },
  smallAction: {
    paddingInline: "20px calc(20px - 10px)",
    paddingBottom: "8px",
  },
  medium: {
    paddingInline: "32px calc(32px - 14px)",
    paddingBottom: "32px",
  },
  mediumAction: {
    paddingInline: "32px calc(32px - 14px)",
    paddingBottom: "16px",
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
  ({ theme, isSmall, modalType }) => ({
    zIndex: 1001,
    maxHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    borderRadius: "10px",
    backgroundColor: theme.palette.lunit_token.core.bg_03,
    color: theme.palette.lunit_token.core.text_normal,

    ...DIALOG_WRAPPER_STYLE[isSmall ? "small" : "medium"],
    ...DIALOG_WRAPPER_STYLE[modalType === "nonModal" ? "nonModal" : "modal"],

    "& #dialog-title": {
      ...DIALOG_TITLE_STYLE[isSmall ? "small" : "medium"],
    },

    "& #dialog-content": {
      ...DIALOG_CONTENT_STYLE[
        isSmall && modalType !== "passive"
          ? "smallAction"
          : isSmall
          ? "small"
          : !isSmall && modalType !== "passive"
          ? "mediumAction"
          : "medium"
      ],

      scrollbarGutter: "stable",
      "::-webkit-scrollbar": {
        width: isSmall ? "10px" : "14px",
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
      ...DIALOG_ACTION_STYLE[isSmall ? "small" : "medium"],
    },
  })
);
