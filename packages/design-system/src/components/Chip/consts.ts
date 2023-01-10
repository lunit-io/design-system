export const CHIP_COLORS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ERROR: "error",
  WARNING: "warning",
  SUCCESS: "success",
} as const;

export const COMMON_STYLES = {
  "&.MuiChip-root": {
    height: "22px",
  },
  "&.Mui-disabled": {
    opacity: 1,
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
};

export const ICON_STYLES = {
  height: "16px",
  width: "16px",
  marginLeft: "3px",
  marginRight: "4px",
  marginBlock: "3px",
};
