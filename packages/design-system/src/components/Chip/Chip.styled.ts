import { Chip as MuiChip, styled } from "@mui/material";
import { CHIP_COLORS } from "./consts";

import type { StyledChipProps } from "./Chip.types";

export const StyledOutlinedChip = styled(MuiChip, {
  shouldForwardProp: (prop) => !["color"].includes(prop.toString()),
})<StyledChipProps>(({ theme, color }) => ({
  "&.MuiChip-root": {
    height: "22px",
  },
  "& .MuiChip-label": {
    height: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14.32px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: 0,
    marginInline: "8px",
  },
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
})<StyledChipProps>(({ theme, color, thumbnail, onDelete }) => ({
  "&.MuiChip-root": {
    height: "22px",
  },
  "& .MuiChip-label": {
    height: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14.32px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: 0,
    marginLeft: thumbnail ? "4px" : "8px",
    marginRight: onDelete ? "4px" : "8px",
  },
  "& .MuiChip-deleteIcon": {
    marginLeft: 0,
    marginRight: "3px",
  },
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
  },
  "& .MuiSvgIcon-root": {
    height: "16px",
    width: "16px",
    marginTop: 3,
    marginBottom: 3,
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
  "& .MuiChip-icon": {
    marginLeft: "3px",
    marginRight: 0,
  },
}));
