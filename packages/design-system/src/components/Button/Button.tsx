import React from "react";
import Typography from "@mui/material/Typography";

import { CustomButton } from "./Button.styled";

import type { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const {
    kind = "contained",
    size = "small",
    color = "primary",
    className,
    children,
    hasIconOnly,
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
          hasIconOnly={hasIconOnly}
          disableFocusRipple
          {...buttonProps}
        >
          {!hasIconOnly && (
            <Typography variant={size === "large" ? "button1" : "button2"}>
              {children}
            </Typography>
          )}
        </CustomButton>
      ) : (
        <CustomButton
          className={`outlined ${className ?? className}`}
          kind="outlined"
          color="primary"
          size={size}
          hasIconOnly={hasIconOnly}
          disableFocusRipple
          {...buttonProps}
        >
          {!hasIconOnly && (
            <Typography variant={size === "large" ? "button1" : "button2"}>
              {children}
            </Typography>
          )}
        </CustomButton>
      )}
    </>
  );
};

export default Button;
