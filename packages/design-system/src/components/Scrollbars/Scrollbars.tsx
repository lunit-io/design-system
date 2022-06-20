import React from "react";
import { Box, Typography, CSSObject } from "@mui/material";
import sampleText from "./sampleText";

export enum Orientation {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
  BOTH = "both",
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export enum Size {
  SMALL = "small",
  LARGE = "large",
}

interface ScrollbarProps {
  /**
   * Where should the scrollbars appear?
   */
  orientation: Orientation;
  /**
   *
   */
  theme: Theme;
  /**
   * Scrollbar dimensions
   * (small = 6px)
   * (large = 10px)
   */
  size: Size;
  /**
   * Hide scrollbar when not hovering over element?
   */
  hidden: boolean;
}

/**
 * Material UI does **not** have a `scrollbar` component. This Storybook component/story is just a
 * prototype created to test the behavior and styling options. Please let me (Andrei) know if this
 * is correct or I should change anything. It's my first time using Storybook so I'm not sure if I
 * did this correctly.
 *
 * Here are questions and challenges to keep in mind:
 * 1. Is this Story OK? Is anything missing?
 * 1. Should the scrollbar **always** be `hidden`, or do we need both options? The `hidden` feature
 * might impact the spacing of other elements, because we need to leave empty space for the scrollbar.
 * 1. What is the logic for applying the `size`? Which elements will get which size? We need to
 * define this well and test edge cases.
 * 1. The `hidden` scrollbar creates some challenges when combined with the `horizontal` and `vertical`
 * `orientation`s. The way I implemented it, the element that has a scrollbar needs CSS for either
 * `padding-right` or `padding-bottom` to match the scrollbar `size` in pixels when the scrollbar is
 * not displayed. When the user `hover`s on the element, the `padding` disappears and is replaced
 * by the scrollbar that has the same pixel dimension. As far as I know, there aren't separate
 * settings for `vertical` or `horizontal` scrollbars. If we globally create the `padding-right` and
 * `padding-bottom`, they will be applied to all elements, even if they don't have a scrollbar. I'm
 * not sure how to detect **if** an element **needs** a scrollbar, and apply the correct `padding`
 * selectively.
 *
 * It was possible to implement all the design specs in this isolated Storybook example, but it
 * may be challenging to implement this in the actual Lunit Design System library. I think
 * `scrollbar` logic might need to be applied globally because it's not always possible to know if
 * an element needs a `scrollbar` or not.
 *
 * In MUI, Overriding browser defaults is done in:
 *   * themes.ts file in `theme.components.MuiCssBaseline.styleOverrides`.
 *
 */
export const Scrollbars = ({
  theme = Theme.LIGHT,
  size = Size.LARGE,
  hidden = false,
  orientation = Orientation.VERTICAL,
  ...props
}: ScrollbarProps) => {
  type themes = ScrollbarProps["theme"];
  type sizes = ScrollbarProps["size"];
  type orientations = ScrollbarProps["orientation"];

  const setPxDimension = (size: sizes) => `${size === Size.LARGE ? 10 : 6}px`;

  type paddingForOrientations = {
    [key in orientations]: string[];
  };

  const paddingFor: paddingForOrientations = {
    vertical: ["paddingRight"],
    horizontal: ["paddingBottom"],
    both: ["paddingRight", "paddingBottom"],
  };

  const generatePadding = (
    orientation: orientations,
    size: sizes,
    hidden: boolean,
    unset?: boolean
  ) => {
    const pxSize = hidden ? setPxDimension(size) : "0px";

    return paddingFor[orientation].reduce(
      (acc: any, ele: any) => ((acc[ele] = unset ? "unset" : pxSize), acc),
      {}
    );
  };

  const scrollbarLogic = (
    orientation: orientations,
    size: sizes,
    hidden: boolean
  ) => {
    return {
      ...generatePadding(orientation, size, hidden),
      ["&:hover"]: hidden
        ? {
            ...generatePadding(orientation, size, hidden, true),
            overflow: "auto",
          }
        : null,
    };
  };

  const scrollbarStyle = (size: sizes, hidden: boolean) => {
    const pxSize = setPxDimension(size);
    return {
      overflow: hidden ? "hidden" : "auto",
      "&::-webkit-scrollbar": { width: pxSize, height: pxSize },
    };
  };

  const scrollbarThumb = (theme: themes) => {
    type thumbThemes = {
      [key in themes]: CSSObject;
    };

    const thumb: thumbThemes = {
      light: { background: "#c6c6c8" },
      dark: { background: "#747477" },
    };
    const styles = {
      "&::-webkit-scrollbar-corner, &::-webkit-scrollbar-track, &::-webkit-scrollbar-track-piece":
        { background: "rgba(0,0,0,0)" },
      "&::-webkit-scrollbar-thumb": {
        ...thumb[theme],
        borderRadius: "6px",
        "&:hover": {
          background: theme === Theme.LIGHT ? "#afafb1" : "#99999b",
        },
        "&:active": {
          background: theme === Theme.LIGHT ? "#747477" : "#c6c6c8",
        },
      },
    };
    return styles;
  };

  return (
    <Box
      sx={{
        height: "120px",
        boxSizing: "border-box",
        border: "1px solid black",
        backgroundColor: theme === Theme.DARK ? "#1F1F21" : "unset",
        ...scrollbarStyle(size, hidden),
        ...scrollbarThumb(theme),
        ...scrollbarLogic(orientation, size, hidden),
      }}
    >
      <Typography
        sx={{
          width: orientation !== Orientation.VERTICAL ? "150%" : "unset",
          color: theme === Theme.DARK ? "#FAFAFB" : "#4E4E50",
        }}
      >
        {orientation === Orientation.HORIZONTAL
          ? sampleText.substring(0, 780)
          : sampleText}
      </Typography>
    </Box>
  );
};
