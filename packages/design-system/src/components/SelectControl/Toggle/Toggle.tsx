import React from 'react'
import { IndeterminateLargeToggle, IndeterminateMiddleToggle, LargeToggle, MiddleToggle } from './Toggle.styled'
import type { ToggleProps } from './Toggle.types'


const Toggle = (props: ToggleProps) => {
  const { size = "medium", indeterminate = false, disableRipple = false, ...switchProps } = props

  if (indeterminate) {
    const { checked: _, ...restProps } = switchProps;
    // can't use checked props with indeterminate
    if (size === "large") {
      return <IndeterminateLargeToggle checked disableRipple={disableRipple} {...restProps} />
    }
    return <IndeterminateMiddleToggle checked disableRipple={disableRipple} {...restProps}/>;
  }

  if (size === 'large') {
    return <LargeToggle disableRipple={disableRipple} {...switchProps}/>;
  }
  console.log(switchProps.checked)
  return <MiddleToggle  disableRipple={disableRipple} {...switchProps}/>;
}

export default Toggle
