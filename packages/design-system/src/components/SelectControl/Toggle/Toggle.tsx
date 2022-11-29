import React from 'react'
import type {SwitchProps, } from '@mui/material'
import { IndeterminateLargeToggle, IndeterminateMiddleToggle, LargeToggle, MiddleToggle } from './Toggle.styled'


interface ToggleProps extends Omit<SwitchProps, "size" > {
  /**
  * @default medium
  */
  size?: 'medium' | 'large'
  /**
  * @default false
  */
  indeterminate?: boolean
}

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
