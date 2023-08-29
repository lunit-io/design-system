import { styled } from "@mui/material/styles";
import { ToggleButton as MuiToggleButton } from "@mui/material";

import type { ToggleButtonProps } from "../ToggleButton/ToggleButton.types";
import {
  commonStyle,
  sizeStyle,
  kindStyle,
  iconStyle,
} from "../Button/Button.styled";

type CustomToggleButtonProps = ToggleButtonProps & { hasIconOnly: boolean };

export const CustomToggleButton = styled(MuiToggleButton, {
  shouldForwardProp: (prop: string) => {
    return !["icon", "kind", "selectedColor", "hasIconOnly"].includes(prop);
  },
})<CustomToggleButtonProps>(
  ({
    theme: {
      typography,
      palette: { lunit_token },
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
      ...commonStyle({ lunit_token }),
      ...iconStyle({ size, hasIconOnly }),
      ...sizeStyle({ size, kind, hasIconOnly, selected, typography }),
      ...kindStyle({ kind, color, lunit_token }),
      ...(selectedColor === "primary" && {
        "&.Mui-selected, &.Mui-selected:hover": {
          border: "none",
          backgroundColor: lunit_token.component.btn_selected_primary_bg,
          color: lunit_token.component.btn_selected_primary_text,
        },
      }),
      ...(selectedColor === "secondary" && {
        "&.Mui-selected, &.Mui-selected:hover": {
          border: "none",
          backgroundColor: lunit_token.component.btn_selected_secondary_bg,
          color: lunit_token.component.btn_selected_secondary_text,
        },
      }),
    };
  }
);

export const IconAndChildrenWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});
