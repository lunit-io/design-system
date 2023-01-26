import { styled } from "@mui/material/styles";
import { ToggleButton as MuiToggleButton } from "@mui/material";

import type { ToggleButtonProps } from "../ToggleButton/ToggleButton.types";
import { commonStyle, sizeStyle, kindStyle } from "../Button/Button.styled";

export const CustomToggleButton = styled(MuiToggleButton, {
  shouldForwardProp: (prop: string) => {
    return !["kind", "size", "color", "selectedColor"].includes(prop);
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
  }) => ({
    ...commonStyle({ token }),
    ...sizeStyle({ size }),
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
  })
);
