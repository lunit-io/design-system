import { CHIP_COLORS } from "./consts";

import type {
  ChipProps as MuiChipProps,
  ChipTypeMap as MuiChipTypeMap,
} from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

type DesignSystemChipKind = "outlined" | "contained";
type DesignSystemAndMuiContainedChipKind = "filled" | "contained";
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
  // either kind or variant
  kind?: DesignSystemChipKind;
  variant?: "outlined" | DesignSystemAndMuiContainedChipKind;
  // mui variant = outlined | "filled" | undefined
  color?: ChipColor;
}

export interface OutlinedChipProps extends BaseChipProps {
  kind?: "outlined";
  variant?: "outlined";
  onClick?: never;
  onDelete?: never;
}

export interface BaseContainedChipProps
  extends BaseChipProps,
    Omit<
      MuiChipProps,
      "color" | "size" | "avatar" | "deleteIcon" | "icon" | "variant"
    > {
  kind?: "contained";
  variant?: DesignSystemAndMuiContainedChipKind;
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

export type ChipTypeMap<
  P = {},
  D extends React.ElementType = MuiChipTypeMap["defaultComponent"]
> = {
  props: P & ChipProps;
  defaultComponent: D;
};

export type ChipType = OverridableComponent<ChipTypeMap>;
