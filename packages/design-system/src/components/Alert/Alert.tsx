import React from "react";
import {
  StyledAlert,
  StyledAlertTitle,
  StyledAlertChildren,
  StyledBottomAction,
  StyledIconButton,
} from "./Alert.styled";
import { StyledAlertProps } from "./Alert.types";
import {
  Close,
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
      sx={{ ...sx }}
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
      {children && <StyledAlertChildren>{children}</StyledAlertChildren>}
      {bottomAction && <StyledBottomAction>{bottomAction}</StyledBottomAction>}
    </StyledAlert>
  );
};

export default Alert;
