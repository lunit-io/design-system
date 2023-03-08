import {
  Success,
  Error,
  Warning,
  Information,
  Close,
} from "@lunit/design-system-icons";
import { Typography } from "@mui/material";
import React, { forwardRef } from "react";

import Button from "../Button";
import { StyledToast, StyledToastElevation } from "./Toast.styled";
import type { ToastProps } from "./Toast.types";

const MAPPED_ICON = {
  success: <Success variant="filled" />,
  info: <Information variant="filled" />,
  warning: <Warning variant="filled" />,
  error: <Error variant="filled" />,
};

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  const { severity, icon, children, sx, action, onClose, ...rest } = props;
  const iconConfig = severity === undefined ? { icon: false } : { severity };

  return (
    <StyledToastElevation className="elevation2" sx={sx}>
      <StyledToast
        ref={ref}
        iconMapping={MAPPED_ICON}
        action={
          <>
            {action}
            {onClose && (
              <Button
                icon={<Close />}
                kind="ghost"
                size="medium"
                onClick={onClose}
              />
            )}
          </>
        }
        {...iconConfig}
        {...rest}
      >
        <Typography
          className="Toast-message"
          variant="body2_14_regular"
          sx={{
            whiteSpace: "pre-line",
          }}
        >
          {children}
        </Typography>
      </StyledToast>
    </StyledToastElevation>
  );
});

// this forwardRef is required for using with Snackbar component
export default Toast;
