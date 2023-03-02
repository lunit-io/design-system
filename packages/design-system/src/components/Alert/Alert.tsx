import React, { forwardRef } from "react";
import {
  StyledAlert,
  StyledAlertTitle,
  StyledAlertChildren,
  StyledBottomAction,
  StyledIconButton,
} from "./Alert.styled";
import { AlertProps } from "./Alert.types";
import {
  Close,
  Success,
  Error,
  Warning,
  Information,
} from "@lunit/design-system-icons";

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    title,
    severity,
    children,
    sx,
    bottomAction,
    width = 512,
    isSnackbar = true,
    onClose,
  } = props;
  return (
    <StyledAlert
      ref={ref}
      sx={{ ...sx }}
      width={width}
      severity={severity}
      isSnackbar={isSnackbar}
      iconMapping={{
        success: <Success variant="filled" />,
        info: <Information variant="filled" />,
        warning: <Warning variant="filled" />,
        error: <Error variant="filled" />,
      }}
      action={
        onClose ? (
          <StyledIconButton aria-label="close" onClick={() => onClose()}>
            <Close />
          </StyledIconButton>
        ) : null
      }
    >
      {title && <StyledAlertTitle>{title}</StyledAlertTitle>}
      <StyledAlertChildren>{children}</StyledAlertChildren>
      {bottomAction && <StyledBottomAction>{bottomAction}</StyledBottomAction>}
    </StyledAlert>
  );
});

export default Alert;
