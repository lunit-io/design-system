import React, { forwardRef } from "react";
import {
  StyledAlert,
  StyledAlertTitle,
  StyledAlertChildren,
  StyledBottomAction,
} from "./Alert.styled";
import { AlertProps } from "./Alert.types";
import {
  Close,
  Success,
  Error,
  Warning,
  Information,
} from "@lunit/design-system-icons";
import Button from "../Button";

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    title,
    severity,
    children,
    sx,
    bottomAction,
    width = 512,
    isSnackbar = false,
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
      slots={{
        closeButton: () => (
          <Button
            kind="ghost"
            size="small"
            color="secondary"
            icon={<Close />}
            onClick={onClose}
          />
        ),
      }}
      onClose={onClose}
    >
      {title && <StyledAlertTitle>{title}</StyledAlertTitle>}
      <StyledAlertChildren>{children}</StyledAlertChildren>
      {bottomAction && <StyledBottomAction>{bottomAction}</StyledBottomAction>}
    </StyledAlert>
  );
});

export default Alert;
