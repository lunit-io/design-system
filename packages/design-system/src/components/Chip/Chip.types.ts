import { CHIP_COLORS } from "./consts";

import type { ChipProps as MuiChipProps, SxProps } from "@mui/material";

type ColorKeys = keyof typeof CHIP_COLORS;
type ChipColor = typeof CHIP_COLORS[ColorKeys];

export type ChipThumbnail = "logo" | "avatar" | JSX.Element;

export interface BaseChipProps {
  label: string;
  /**
   * @default contained
   */
  style?: "outlined" | "contained";
  /**
   * @default primary
   */
  color?: ChipColor;
  /**
   * Use sx props only when you need to override the default styles
   */
  sx?: SxProps;
}

export interface ContainedChipProps extends BaseChipProps {
  onClick?: () => void;
  onDelete?: () => void;
  thumbnail?: ChipThumbnail;
}

export interface OutlinedChipProps extends BaseChipProps {}

export type ChipProps = ContainedChipProps | OutlinedChipProps;

export interface StyledChipProps extends MuiChipProps {
  color: MuiChipProps["color"];
  thumbnail?: ChipThumbnail;
  onDelete?: () => void;
}
