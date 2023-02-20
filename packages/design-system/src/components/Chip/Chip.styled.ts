import { Chip as MuiChip, styled } from "@mui/material";
import { CHIP_COLORS } from "./consts";

import type { Theme } from "@mui/material/styles";
import type {
  ChipColor,
  OutlinedChipProps,
  BaseContainedChipProps,
} from "./Chip.types";

const COMMON_STYLES = {
  "&.MuiChip-root": {
    height: "22px",
    width: "auto",
    minWidth: "22px",
  },
  "&.Mui-disabled": {
    opacity: 1,
  },
  "& .MuiChip-label": {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: 0,
    marginInline: "8px",
  },
};

export const getColorToken = (
  token: "text" | "bg",
  theme: Theme,
  color?: ChipColor
) => {
  if (token === "text") {
    switch (color) {
      case CHIP_COLORS.PRIMARY:
        return theme.palette.token.component.chip_primary_text;
      case CHIP_COLORS.SECONDARY:
        return theme.palette.token.component.chip_secondary_text;
      case CHIP_COLORS.ERROR:
        return theme.palette.token.component.chip_error_text;
      case CHIP_COLORS.WARNING:
        return theme.palette.token.component.chip_warning_text;
      case CHIP_COLORS.SUCCESS:
        return theme.palette.token.component.chip_success_text;
      default:
        return theme.palette.token.component.chip_primary_text;
    }
  } else {
    switch (color) {
      case CHIP_COLORS.PRIMARY:
        return theme.palette.token.component.chip_primary_bg;
      case CHIP_COLORS.SECONDARY:
        return theme.palette.token.component.chip_secondary_bg;
      case CHIP_COLORS.ERROR:
        return theme.palette.token.component.chip_error_bg;
      case CHIP_COLORS.WARNING:
        return theme.palette.token.component.chip_warning_bg;
      case CHIP_COLORS.SUCCESS:
        return theme.palette.token.component.chip_success_bg;
      default:
        return theme.palette.token.component.chip_primary_bg;
    }
  }
};

export const StyledOutlinedChip = styled(MuiChip, {
  shouldForwardProp: (prop) => !["color"].includes(prop.toString()),
})<OutlinedChipProps>(({ theme, color }) => ({
  ...COMMON_STYLES,
  ...theme.typography.caption,

  color: getColorToken("text", theme, color),
  borderColor: getColorToken("text", theme, color),
}));

export const StyledContainedChip = styled(MuiChip, {
  shouldForwardProp: (prop) => !["color"].includes(prop.toString()),
})<BaseContainedChipProps>(() => ({ theme, color }) => ({
  ...COMMON_STYLES,
  ...theme.typography.caption,

  color: theme.palette.token.core.text_normal,
  backgroundColor: getColorToken("bg", theme, color),

  "& .MuiSvgIcon-root": {
    marginBlock: "3px",
    marginLeft: "3px",
    marginRight: "4px",
    height: "16px",
    width: "16px",
    color: getColorToken("text", theme, color),
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
    color: getColorToken("bg", theme, color),
    backgroundColor: getColorToken("text", theme, color),
  },

  "& .MuiChip-deleteIcon": {
    marginLeft: "4px",
    marginRight: "3px",
  },

  "& .delete-icon-hover-layer": {
    position: "absolute",
    zIndex: 1000,
    top: 0,
    left: "auto",
    right: 0,
    bottom: 0,
    opacity: 0,
    color: theme.palette.token.core.hover,
    ":hover": {
      cursor: "pointer",
      opacity: 1,
    },
  },
}));
