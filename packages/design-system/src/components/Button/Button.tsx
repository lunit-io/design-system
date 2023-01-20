import Typography from "@mui/material/Typography";
import React from "react";
import { CustomButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const {
    kind = "contained",
    size = "small",
    color = "primary",
    className,
    children,
    ...buttonProps
  } = props;
  return (
    <>
      {kind === "contained" || kind === "ghost" ? (
        <CustomButton
          className={`${kind} ${className ?? className}`}
          kind={kind}
          color={color}
          size={size}
          disableFocusRipple
          {...buttonProps}
        >
          <Typography variant={size === "large" ? "button1" : "button2"}>
            {children}
          </Typography>
        </CustomButton>
      ) : (
        <CustomButton
          className={`outlined ${className ?? className}`}
          kind="outlined"
          color="primary"
          size={size}
          disableFocusRipple
          {...buttonProps}
        >
          <Typography variant={size === "large" ? "button1" : "button2"}>
            {children}
          </Typography>
        </CustomButton>
      )}
    </>
  );
};

export default Button;
