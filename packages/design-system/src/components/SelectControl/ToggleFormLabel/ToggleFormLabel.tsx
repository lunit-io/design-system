
import React from 'react'
import { FormControlLabelProps } from '@mui/material'
import { StyledFormControlLabel } from './ToggleFormLabel.styled'

const ToggleFormLabel = (props: FormControlLabelProps) => {
  return (
    <StyledFormControlLabel {...props}/>
  )
}

export default ToggleFormLabel
