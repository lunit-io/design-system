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

const MAPPED_ICON = {
  success: <Success variant="filled" />,
  info: <Information variant="filled" />,
  warning: <Warning variant="filled" />,
  error: <Error variant="filled" />,
};

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { title, severity, children, bottomAction, onClose, ...rest } = props;
  return (
    <StyledAlert
      ref={ref}
      severity={severity}
      iconMapping={MAPPED_ICON}
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
      {...rest}
    >
      {title && <StyledAlertTitle>{title}</StyledAlertTitle>}
      <StyledAlertChildren>{children}</StyledAlertChildren>
      {bottomAction && <StyledBottomAction>{bottomAction}</StyledBottomAction>}
    </StyledAlert>
  );
});

export default Alert;
