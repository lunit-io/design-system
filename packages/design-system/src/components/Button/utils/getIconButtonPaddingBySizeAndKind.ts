import { OUTLINED_BORDER_WIDTH } from "../const";

import type { ButtonProps } from "../Button.types";
import { ToggleButtonProps } from "@/components/ToggleButton/ToggleButton.types";

type GetIconButtonPaddingBySizeAndKindProps = Pick<
  ButtonProps,
  "kind" | "size"
> &
  Pick<ToggleButtonProps, "selected">;

/**
 * When kind is outlined,
 * the padding value must include the border width of outlined.
 * This function takes care of this.
 */
export const getIconButtonPaddingBySizeAndKind = ({
  kind,
  size,
  selected = false,
}: GetIconButtonPaddingBySizeAndKindProps) => {
  if (size === "small") {
    return kind === "outlined" && !selected
      ? `${4 - OUTLINED_BORDER_WIDTH}px`
      : "4px";
  }

  if (size === "medium") {
    return kind === "outlined" && !selected
      ? `${8 - OUTLINED_BORDER_WIDTH}px`
      : "8px";
  }

  // size === "large"
  return kind === "outlined" && !selected
    ? `${12 - OUTLINED_BORDER_WIDTH}px`
    : "12px";
};
