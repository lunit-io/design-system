import React from "react";
import { CustomButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const {
    kind = "contained1st",
    size = "small",
    className,
    ...buttonProps
  } = props;
  return (
    <CustomButton
      className={`${kind} ${className ?? className}`}
      kind={kind}
      size={size}
      disableFocusRipple
      {...buttonProps}
    />
  );
};

export default Button;
