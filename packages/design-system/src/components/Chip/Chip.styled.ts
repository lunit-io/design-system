import { Chip as MuiChip, styled } from "@mui/material";
import { CHIP_COLORS, COMMON_STYLES } from "./consts";

import type { ChipProps } from "@mui/material";

export const StyledOutlinedChip = styled(MuiChip, {
  shouldForwardProp: (prop) => !["color"].includes(prop.toString()),
})<ChipProps>(({ theme, color }) => ({
  ...COMMON_STYLES,

  color:
    color === CHIP_COLORS.PRIMARY
      ? theme.palette.token.component.chip_primary
      : color === CHIP_COLORS.SECONDARY
      ? theme.palette.token.component.chip_secondary
      : color === CHIP_COLORS.ERROR
      ? theme.palette.token.component.chip_error
      : color === CHIP_COLORS.WARNING
      ? theme.palette.token.component.chip_warning
      : color === CHIP_COLORS.SUCCESS
      ? theme.palette.token.component.chip_success
      : theme.palette.token.component.chip_primary,
  borderColor:
    color === CHIP_COLORS.PRIMARY
      ? theme.palette.token.component.chip_primary
      : color === CHIP_COLORS.SECONDARY
      ? theme.palette.token.component.chip_secondary
      : color === CHIP_COLORS.ERROR
      ? theme.palette.token.component.chip_error
      : color === CHIP_COLORS.WARNING
      ? theme.palette.token.component.chip_warning
      : color === CHIP_COLORS.SUCCESS
      ? theme.palette.token.component.chip_success
      : theme.palette.token.component.chip_primary,
}));

export const StyledContainedChip = styled(MuiChip, {
  shouldForwardProp: (prop) => !["color"].includes(prop.toString()),
})<ChipProps>(() => ({ theme, color }) => ({
  ...COMMON_STYLES,

  color: theme.palette.token.core.text_normal,
  backgroundColor:
    color === CHIP_COLORS.PRIMARY
      ? theme.palette.token.component.chip_primary_bg
      : color === CHIP_COLORS.SECONDARY
      ? theme.palette.token.component.chip_secondary_bg
      : color === CHIP_COLORS.ERROR
      ? theme.palette.token.component.chip_error_bg
      : color === CHIP_COLORS.WARNING
      ? theme.palette.token.component.chip_warning_bg
      : color === CHIP_COLORS.SUCCESS
      ? theme.palette.token.component.chip_success_bg
      : theme.palette.token.component.chip_primary_bg,

  "& .MuiSvgIcon-root": {
    marginBlock: "3px",
    marginLeft: "3px",
    marginRight: "4px",
    height: "16px",
    width: "16px",
    color:
      color === CHIP_COLORS.PRIMARY
        ? theme.palette.token.component.chip_primary
        : color === CHIP_COLORS.SECONDARY
        ? theme.palette.token.component.chip_secondary
        : color === CHIP_COLORS.ERROR
        ? theme.palette.token.component.chip_error
        : color === CHIP_COLORS.WARNING
        ? theme.palette.token.component.chip_warning
        : color === CHIP_COLORS.SUCCESS
        ? theme.palette.token.component.chip_success
        : theme.palette.token.component.chip_primary,
  },
  "& .MuiChip-avatar": {
    marginBlock: "3px",
    marginLeft: "4px",
    marginRight: "5px",
    height: "14px",
    width: "14px",
    fontSize: "11px",
    fontWeight: 500,
    lineHeight: "16px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    color: theme.palette.token.core.text_normal,
    // TODO: Currently, the color names of Figma and Design system's color component's name don't match
    // Need to be Fixed after the color system is completed
    backgroundColor:
      color === CHIP_COLORS.PRIMARY
        ? theme.palette.token.component.chip_primary
        : color === CHIP_COLORS.SECONDARY
        ? theme.palette.token.component.chip_secondary
        : color === CHIP_COLORS.ERROR
        ? theme.palette.token.component.chip_error
        : color === CHIP_COLORS.WARNING
        ? theme.palette.token.component.chip_warning
        : color === CHIP_COLORS.SUCCESS
        ? theme.palette.token.component.chip_success
        : theme.palette.token.component.chip_primary,
  },

  "& .MuiChip-deleteIcon": {
    marginLeft: "4px",
    marginRight: "3px",
  },
  "& .MuiChip-deleteIcon:hover": {
    // TODO: Below is a temporary color until the hover color is completed in our Design system
    color: theme.palette.token.core.hover,
  },
}));
