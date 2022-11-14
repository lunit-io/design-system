import { Chip as MuiChip, styled } from "@mui/material";
import { CHIP_COLORS } from "./consts";

import type { StyledChipProps } from "./Chip.types";

export const StyledOutlinedChip = styled(MuiChip, {
  shouldForwardProp: (prop) => !["color"].includes(prop.toString()),
})<StyledChipProps>(({ theme, color }) => ({
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
})<StyledChipProps>(({ theme, color }) => ({
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
  "&:hover": {
    /**
     * need to be fixed in color system
     */
    // backgroundColor: theme.palette.token.core.hover,
    opacity: 0.6,
  },
  "& .MuiSvgIcon-root": {
    height: "16px",
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
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
}));
