import React from 'react'
import { CommonToggle, CommonIndeterminateToggle } from './Toggle.styled'
import type { ToggleProps } from './Toggle.types'


const Toggle = (props: ToggleProps) => {
  const { size = "medium", indeterminate = false, disableRipple, ...switchProps } = props

  if (indeterminate) {
    const { checked: _, ...restProps } = switchProps;
    // can't use checked props with indeterminate
      return <CommonIndeterminateToggle toggleSize={size} checked focusRipple={false} disableRipple={disableRipple} {...restProps} />
  }

  return  <CommonToggle toggleSize={size} focusRipple={false} disableRipple={disableRipple} {...switchProps}/>
}

export default Toggle
