import { CHIP_COLORS } from "./consts";

import type { ChipProps as MuiChipProps } from "@mui/material";

type ColorKeys = keyof typeof CHIP_COLORS;
export type ChipColor = (typeof CHIP_COLORS)[ColorKeys];
export type ChipThumbnail = string | JSX.Element;

/**
 * Mui Chip's variant is 'kind' in our design system
 */
export interface BaseChipProps
  extends Pick<
    MuiChipProps,
    "label" | "sx" | "style" | "classes" | "onDelete"
  > {
  kind?: "outlined" | "contained";
  color?: ChipColor;
}

export interface OutlinedChipProps extends BaseChipProps {
  kind?: "outlined";
  onClick?: never;
  onDelete?: never;
}

export interface BaseContainedChipProps
  extends BaseChipProps,
    Omit<
      MuiChipProps,
      "color" | "size" | "variant" | "avatar" | "deleteIcon" | "icon"
    > {
  kind?: "contained";
  thumbnail?: ChipThumbnail;
  onClick?: () => void;
}

export interface ReadOnlyContainedChipProps extends BaseContainedChipProps {
  onClick?: never;
  onDelete?: never;
}
export interface EnableContainedChipProps extends BaseContainedChipProps {
  onClick: () => void;
  onDelete?: never;
}
export interface DeletableContainedChipProps extends BaseContainedChipProps {
  onClick?: never;
  onDelete: () => void;
}

export type ContainedChipProps =
  | EnableContainedChipProps
  | ReadOnlyContainedChipProps
  | DeletableContainedChipProps;

export type ChipProps = OutlinedChipProps | ContainedChipProps;
