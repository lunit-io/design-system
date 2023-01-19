import React from "react";
import { CustomButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const {
    kind = "contained",
    size = "small",
    color = "primary",
    className,
    ...buttonProps
  } = props;
  return (
    <CustomButton
      className={`${kind} ${className ?? className}`}
      kind={kind}
      color={color}
      size={size}
      disableFocusRipple
      {...buttonProps}
    />
  );
};

export default Button;
