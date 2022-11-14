import { CHIP_COLORS } from "./consts";

type ColorKeys = keyof typeof CHIP_COLORS;
export type ChipColor = typeof CHIP_COLORS[ColorKeys];

type ColorKeys = keyof typeof CHIP_COLORS;
type ChipColor = typeof CHIP_COLORS[ColorKeys];

export type ChipThumbnail = "logo" | "avatar" | React.ReactElement;
export interface BaseChipProps {
  text: string;
  clickable: boolean;
  color?: ChipColor;
}
export interface ContainedChipProps extends BaseChipProps {
  clickable: true;
  onClick: () => void;
  onDelete?: () => void;
  thumbnail?: ChipThumbnail;
}

export interface OutlinedChipProps extends BaseChipProps {
  clickable: false;
}

export type ChipProps = ContainedChipProps | OutlinedChipProps;

export interface StyledChipProps extends MuiChipProps {
  color: BaseChipProps["color"];
}
