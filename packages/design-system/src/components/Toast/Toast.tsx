import {
  Success,
  Error,
  Warning,
  Information,
} from "@lunit/design-system-icons";
import { ButtonBase } from '@mui/material'
import React, { forwardRef } from 'react'
import { StyledAlert } from './Toast.styled'
import type { ToastProps } from "./Toast.types";

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  const { severity, icon, actionButtonText, actionButtonHandler, children, ...rest } = props
  const iconConfig = severity === undefined ? { icon: false } : { severity }

  return (
      <StyledAlert
        ref={ref}
        iconMapping={{
          success: <Success variant="filled" />,
          info: <Information variant="filled" />,
          warning: <Warning variant="filled" />,
          error: <Error variant="filled" />,
        }}
        action={
          actionButtonText
            ? (<ButtonBase disableRipple onClick={actionButtonHandler}>
                {actionButtonText}
              </ButtonBase>)
            : null
        }
        {...iconConfig}
        {...rest}
      >
        {children}
      </StyledAlert>
  )
})

// this forwardRef is required for using with Snackbar component
export default Toast
