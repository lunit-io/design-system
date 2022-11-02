import { Box, Chip as MuiChip, styled } from "@mui/material";

export const ChipWrapper = styled(Box)(() => ({
  "& .MuiChip-root": {
    height: "22px",
  },
  "& .MuiChip-label": {
    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    paddingInline: "8px",
  },
}));

export const StyledOutlinedChip = styled(MuiChip)(({ theme, color }) => ({
  color:
    color === "primary"
      ? theme.palette.token.component.chip_primary_bg
      : color === "secondary"
      ? theme.palette.token.component.chip_secondary_bg
      : color === "error"
      ? theme.palette.token.component.chip_error_bg
      : color === "warning"
      ? theme.palette.token.component.chip_warning_bg
      : color === "success"
      ? theme.palette.token.component.chip_success_bg
      : theme.palette.token.component.chip_primary_bg,
  borderColor:
    color === "primary"
      ? theme.palette.token.component.chip_primary_bg
      : color === "secondary"
      ? theme.palette.token.component.chip_secondary_bg
      : color === "error"
      ? theme.palette.token.component.chip_error_bg
      : color === "warning"
      ? theme.palette.token.component.chip_warning_bg
      : color === "success"
      ? theme.palette.token.component.chip_success_bg
      : theme.palette.token.component.chip_primary_bg,
}));

export const StyledContainedChip = styled(MuiChip)(({ theme, color }) => ({
  color: theme.palette.token.core.text_normal,
  backgroundColor:
    color === "primary"
      ? theme.palette.token.component.chip_primary_bg
      : color === "secondary"
      ? theme.palette.token.component.chip_secondary_bg
      : color === "error"
      ? theme.palette.token.component.chip_error_bg
      : color === "warning"
      ? theme.palette.token.component.chip_warning_bg
      : color === "success"
      ? theme.palette.token.component.chip_success_bg
      : theme.palette.token.component.chip_primary_bg,
  "&:hover": {
    // backgroundColor: `theme.palette.token.core.hover`,
  },
  "& .MuiSvgIcon-root": {
    height: "16px",
    marginRight: 0,
    color:
      color === "primary"
        ? theme.palette.token.component.chip_primary_bg
        : color === "secondary"
        ? theme.palette.token.component.chip_secondary_bg
        : color === "error"
        ? theme.palette.token.component.chip_error_bg
        : color === "warning"
        ? theme.palette.token.component.chip_warning_bg
        : color === "success"
        ? theme.palette.token.component.chip_success_bg
        : theme.palette.token.component.chip_primary_bg,
  },
}));
