import type { SwitchProps } from "@mui/material"

export interface ToggleProps extends Omit<SwitchProps, "size" > {
  /**
   * The size of the component.
   * @default medium
   */
  size?: 'medium' | 'large'
  /**
  * If `true`, the component has consistent 'checked' value and change shape.
  * @default false
  */
  indeterminate?: boolean
}
