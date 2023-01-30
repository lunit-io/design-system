import { styled } from "@mui/material/styles";
import { ToggleButton as MuiToggleButton } from "@mui/material";

import type { ToggleButtonProps } from "../ToggleButton/ToggleButton.types";
import {
  commonStyle,
  sizeStyle,
  kindStyle,
  iconStyle,
} from "../Button/Button.styled";

export const CustomToggleButton = styled(MuiToggleButton, {
  shouldForwardProp: (prop: string) => {
    return !["icon", "kind", "selectedColor", "hasIconOnly"].includes(prop);
  },
})<ToggleButtonProps>(
  ({
    theme: {
      palette: { token },
    },
    kind,
    size,
    color,
    selectedColor,
    hasIconOnly,
    selected,
  }) => {
    return {
      border: "none",
      ...commonStyle({ token }),
      ...iconStyle({ size, hasIconOnly }),
      ...sizeStyle({ size, kind, hasIconOnly, selected }),
      ...kindStyle({ kind, color, token }),
      ...(selectedColor === "primary" && {
        "&.Mui-selected, &.Mui-selected:hover": {
          border: "none",
          backgroundColor: token.component.btn_selected_primary_bg,
          color: token.component.btn_selected_primary_text,
        },
      }),
      ...(selectedColor === "secondary" && {
        "&.Mui-selected, &.Mui-selected:hover": {
          border: "none",
          backgroundColor: token.component.btn_selected_secondary_bg,
          color: token.component.btn_selected_secondary_text,
        },
      }),
    };
  }
);

export const IconAndChildrenWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});
