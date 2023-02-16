import {
  Success,
  Error,
  Warning,
  Information,
  Close,
} from "@lunit/design-system-icons";
import { ButtonBase } from '@mui/material'
import React, { forwardRef } from 'react'

import Button from '../Button'
import { StyledToast, StyledToastElevation } from './Toast.styled'
import type { ToastProps } from "./Toast.types";

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  const { severity, icon, actionButtonText, actionButtonHandler, onClose, children, sx, ...rest } = props
  const iconConfig = severity === undefined ? { icon: false } : { severity }

  return (
    <StyledToastElevation
    className="elevation2"
    sx={sx}>
      <StyledToast
        ref={ref}
        iconMapping={{
          success: <Success variant="filled" />,
          info: <Information variant="filled" />,
          warning: <Warning variant="filled" />,
          error: <Error variant="filled" />,
        }}
        action={
              (<>
                {actionButtonText ? <ButtonBase disableRipple onClick={actionButtonHandler}>
                  {actionButtonText}
                </ButtonBase> : null}
                {onClose ? <Button
                  icon={<Close />}
                  kind="ghost"
                  onClick={onClose}
                  size="small"
                /> : null}
              </>)
        }
        {...iconConfig}
        {...rest}
      >
        {children}
      </StyledToast>
    </StyledToastElevation>
  )
})

// this forwardRef is required for using with Snackbar component
export default Toast
