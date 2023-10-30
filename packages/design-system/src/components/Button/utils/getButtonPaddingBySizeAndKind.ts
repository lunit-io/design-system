import { OUTLINED_BORDER_WIDTH } from "../const";

import type { ButtonProps } from "../Button.types";
import { ToggleButtonProps } from "@/components/ToggleButton/ToggleButton.types";

type GetButtonPaddingBySizeAndKindParams = Pick<ButtonProps, "kind" | "size"> &
  Pick<ToggleButtonProps, "selected">;

/**
 * When kind is outlined,
 * the padding value must include the border width of outlined.
 * This function takes care of this.
 */
export const getButtonPaddingBySizeAndKind = ({
  kind,
  size,
  selected = false,
}: GetButtonPaddingBySizeAndKindParams) => {
  if (size === "small") {
    return kind === "outlined" && !selected
      ? `${4 - OUTLINED_BORDER_WIDTH}px ${8 - OUTLINED_BORDER_WIDTH}px`
      : "4px 8px";
  }

  if (size === "medium") {
    return kind === "outlined" && !selected
      ? `${8 - OUTLINED_BORDER_WIDTH}px ${12 - OUTLINED_BORDER_WIDTH}px`
      : "8px 12px";
  }

  // size === "large"
  return kind === "outlined" && !selected
    ? `${10 - OUTLINED_BORDER_WIDTH}px ${12 - OUTLINED_BORDER_WIDTH}px`
    : "10px 12px";
};
