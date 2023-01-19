import { Chip as MuiChip, styled } from "@mui/material";
import { CHIP_COLORS, COMMON_STYLES } from "./consts";

import type { ChipProps } from "@mui/material";

export const StyledOutlinedChip = styled(MuiChip, {
  shouldForwardProp: (prop) => !["color"].includes(prop.toString()),
})<ChipProps>(({ theme, color }) => ({
  ...COMMON_STYLES,

  color:
    color === CHIP_COLORS.PRIMARY
      ? theme.palette.token.component.chip_primary_text
      : color === CHIP_COLORS.SECONDARY
      ? theme.palette.token.component.chip_secondary_text
      : color === CHIP_COLORS.ERROR
      ? theme.palette.token.component.chip_error_text
      : color === CHIP_COLORS.WARNING
      ? theme.palette.token.component.chip_warning_text
      : color === CHIP_COLORS.SUCCESS
      ? theme.palette.token.component.chip_success_text
      : theme.palette.token.component.chip_primary_text,
  borderColor:
    color === CHIP_COLORS.PRIMARY
      ? theme.palette.token.component.chip_primary_text
      : color === CHIP_COLORS.SECONDARY
      ? theme.palette.token.component.chip_secondary_text
      : color === CHIP_COLORS.ERROR
      ? theme.palette.token.component.chip_error_text
      : color === CHIP_COLORS.WARNING
      ? theme.palette.token.component.chip_warning_text
      : color === CHIP_COLORS.SUCCESS
      ? theme.palette.token.component.chip_success_text
      : theme.palette.token.component.chip_primary_text,
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
        ? theme.palette.token.component.chip_primary_text
        : color === CHIP_COLORS.SECONDARY
        ? theme.palette.token.component.chip_secondary_text
        : color === CHIP_COLORS.ERROR
        ? theme.palette.token.component.chip_error_text
        : color === CHIP_COLORS.WARNING
        ? theme.palette.token.component.chip_warning_text
        : color === CHIP_COLORS.SUCCESS
        ? theme.palette.token.component.chip_success_text
        : theme.palette.token.component.chip_primary_text,
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
    // TODO: Currently, the color names of Figma and Design system's color component's name don't match
    // Need to be Fixed after the color system is completed
    color:
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
    backgroundColor:
      color === CHIP_COLORS.PRIMARY
        ? theme.palette.token.component.chip_primary_text
        : color === CHIP_COLORS.SECONDARY
        ? theme.palette.token.component.chip_secondary_text
        : color === CHIP_COLORS.ERROR
        ? theme.palette.token.component.chip_error_text
        : color === CHIP_COLORS.WARNING
        ? theme.palette.token.component.chip_warning_text
        : color === CHIP_COLORS.SUCCESS
        ? theme.palette.token.component.chip_success_text
        : theme.palette.token.component.chip_primary_text,
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
