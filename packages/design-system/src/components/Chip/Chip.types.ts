import { CHIP_COLORS } from "./consts";

import type { ChipProps as MuiChipProps } from "@mui/material";

type ColorKeys = keyof typeof CHIP_COLORS;
export type ChipColor = (typeof CHIP_COLORS)[ColorKeys];
export type ChipThumbnail = string | JSX.Element;

/**
 * Mui Chip's variant is 'kind' in our design system
 */
export interface BaseChipProps<C extends React.ElementType>
  extends Pick<
    MuiChipProps<C, { component?: C }>,
    "label" | "sx" | "style" | "classes" | "component"
  > {
  kind?: "outlined" | "contained";
  color?: ChipColor;
}

export interface OutlinedChipProps<C extends React.ElementType>
  extends BaseChipProps<C> {
  kind?: "outlined";
  onClick?: never;
  onDelete?: never;
}

export interface BaseContainedChipProps<C extends React.ElementType>
  extends Omit<
    BaseChipProps<C>,
    "size" | "variant" | "avatar" | "deleteIcon" | "icon"
  > {
  kind?: "contained";
  thumbnail?: ChipThumbnail;
  onClick?: () => void;
}

export interface ReadOnlyContainedChipProps<C extends React.ElementType>
  extends BaseContainedChipProps<C> {
  onClick?: never;
  onDelete?: never;
}

export interface EnableContainedChipProps<C extends React.ElementType>
  extends BaseContainedChipProps<C> {
  onClick: () => void;
  onDelete?: never;
}

export interface DeletableContainedChipProps<C extends React.ElementType>
  extends BaseContainedChipProps<C> {
  onClick?: never;
  onDelete: () => void;
}

export type ContainedChipProps<C extends React.ElementType> =
  | EnableContainedChipProps<C>
  | ReadOnlyContainedChipProps<C>
  | DeletableContainedChipProps<C>;

export type ChipProps<C extends React.ElementType> =
  | OutlinedChipProps<C>
  | ContainedChipProps<C>;
