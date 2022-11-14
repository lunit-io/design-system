export const CHIP_COLORS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ERROR: "error",
  WARNING: "warning",
  SUCCESS: "success",
} as const;

export const commonStyle = {
  "&.MuiChip-root": {
    height: "22px",
  },
  "& .MuiChip-label": {
    height: "16px",
    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14.32px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    paddingInline: "8px",
  },
};
