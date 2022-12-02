import React from 'react'
import { IndeterminateLargeToggle, IndeterminateMiddleToggle, LargeToggle, MiddleToggle } from './Toggle.styled'
import type { ToggleProps } from './Toggle.types'


const Toggle = (props: ToggleProps) => {
  const { size = "medium", indeterminate = false, disableRipple, ...switchProps } = props

  if (indeterminate) {
    const { checked: _, ...restProps } = switchProps;
    // can't use checked props with indeterminate
    if (size === "large") {
      return <IndeterminateLargeToggle checked focusRipple={false} disableRipple={disableRipple} {...restProps} />
    }
    return <IndeterminateMiddleToggle checked focusRipple={false} disableRipple={disableRipple} {...restProps}/>;
  }

  if (size === 'large') {
    return <LargeToggle focusRipple={false} disableRipple={disableRipple} {...switchProps}/>;
  }

  return <MiddleToggle focusRipple={false} disableRipple={disableRipple} {...switchProps}/>;
}

export default Toggle
