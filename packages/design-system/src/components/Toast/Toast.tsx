import Success from "@lunit/design-system-icons/Success16";
import Error from "@lunit/design-system-icons/Error16";
import Warning from "@lunit/design-system-icons/Warning16";
import Information from "@lunit/design-system-icons/Information16";
import Close from "@lunit/design-system-icons/Close";

import { Typography } from "@mui/material";
import React, { forwardRef } from "react";

import Button from "../Button";
import { StyledToast } from "./Toast.styled";
import type { ToastProps } from "./Toast.types";

const MAPPED_ICON = {
  success: <Success variant="filled" />,
  info: <Information variant="filled" />,
  warning: <Warning variant="filled" />,
  error: <Error variant="filled" />,
};

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  const {
    severity = "normal",
    icon,
    children,
    action,
    onClose,
    ...rest
  } = props;
  const iconConfig = severity === "normal" ? { icon: false } : { severity };

  return (
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
  );
});

// this forwardRef is required for using with Snackbar component
export default Toast;
