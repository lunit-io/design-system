import { Box, Chip as MuiChip, styled } from "@mui/material";

export const ChipWrapper = styled(Box)(() => ({
  padding: 0,
  margin: 0,
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
      ? theme.palette.token.component.chip_primary
      : color === "secondary"
      ? theme.palette.token.component.chip_secondary
      : color === "error"
      ? theme.palette.token.component.chip_error
      : color === "warning"
      ? theme.palette.token.component.chip_warning
      : color === "success"
      ? theme.palette.token.component.chip_success
      : theme.palette.token.component.chip_primary,
  borderColor:
    color === "primary"
      ? theme.palette.token.component.chip_primary
      : color === "secondary"
      ? theme.palette.token.component.chip_secondary
      : color === "error"
      ? theme.palette.token.component.chip_error
      : color === "warning"
      ? theme.palette.token.component.chip_warning
      : color === "success"
      ? theme.palette.token.component.chip_success
      : theme.palette.token.component.chip_primary,
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
      color === "primary"
        ? theme.palette.token.component.chip_primary
        : color === "secondary"
        ? theme.palette.token.component.chip_secondary
        : color === "error"
        ? theme.palette.token.component.chip_error
        : color === "warning"
        ? theme.palette.token.component.chip_warning
        : color === "success"
        ? theme.palette.token.component.chip_success
        : theme.palette.token.component.chip_primary,
  },
}));
