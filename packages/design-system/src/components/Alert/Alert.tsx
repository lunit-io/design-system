import Success from "@lunit/design-system-icons/Success16";
import Error from "@lunit/design-system-icons/Error16";
import Warning from "@lunit/design-system-icons/Warning16";
import Information from "@lunit/design-system-icons/Information16";
import Close from "@lunit/design-system-icons/Close";
import React, { forwardRef } from "react";
import {
  StyledAlert,
  StyledAlertTitle,
  StyledAlertChildren,
  StyledBottomAction,
} from "./Alert.styled";
import { AlertProps } from "./Alert.types";
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
