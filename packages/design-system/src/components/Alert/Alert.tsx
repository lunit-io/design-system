import React from "react";
import { StyledAlert, StyledAlertTitle } from "./Alert.styled";
import { StyledAlertProps } from "./Alert.types";
import {
  Success,
  Error,
  Warning,
  Information,
} from "@lunit/design-system-icons";

const Alert = (props: StyledAlertProps) => {
  const { title, severity, children, sx, bottomAction, onClose } = props;
  return (
    <StyledAlert
      severity={severity}
      onClose={onClose}
      sx={{ ...sx }}
      iconMapping={{
        success: <Success variant="filled" />,
        info: <Information variant="filled" />,
        warning: <Warning variant="filled" />,
        error: <Error variant="filled" />,
      }}
    >
      {title && <StyledAlertTitle>{title}</StyledAlertTitle>}
      {children}
      {bottomAction && bottomAction}
    </StyledAlert>
  );
};

export default Alert;
