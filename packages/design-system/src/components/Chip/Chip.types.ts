import { CHIP_COLORS } from "./consts";

import type { ChipProps as MuiChipProps, SxProps } from "@mui/material";

type ColorKeys = keyof typeof CHIP_COLORS;
type ChipColor = typeof CHIP_COLORS[ColorKeys];

export type ChipThumbnail = "logo" | "avatar" | JSX.Element;

/**
 * Lunit Chip props do not inherits MuiChipProps
 * However, Lunit Chip props follows the rules of MuiChipProps
 */
export interface BaseChipProps {
  label: string;
  color?: ChipColor;
  /**
   * Use sx props only when you need to override the default styles
   */
  sx?: SxProps;
}

export interface ContainedChipProps extends BaseChipProps {
  clickable: true;
  onClick?: () => void;
  onDelete?: () => void;
  thumbnail?: ChipThumbnail;
}

export interface OutlinedChipProps extends BaseChipProps {
  clickable: false | undefined;
}

export type ChipProps = ContainedChipProps | OutlinedChipProps;

export interface StyledChipProps extends MuiChipProps {
  color: MuiChipProps["color"];
}
