import React from "react";
import Typography from "@mui/material/Typography";

import { CustomButton } from "./Button.styled";

import type { ButtonProps } from "./Button.types";

const Button = (props: Omit<ButtonProps, "hasIconOnly">) => {
  const {
    kind = "contained",
    size = "small",
    color = "primary",
    icon,
    className,
    children,
    ...buttonProps
  } = props;
  const hasIconOnly = Boolean(icon && !children);

  return (
    <>
      {kind === "contained" || kind === "ghost" ? (
        <CustomButton
          className={`${kind} ${className ? className : ""}`}
          kind={kind}
          color={color}
          size={size}
          startIcon={icon}
          hasIconOnly={hasIconOnly}
          disableRipple
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
          className={`outlined ${className ? className : ""}`}
          kind="outlined"
          color="primary"
          size={size}
          startIcon={icon}
          hasIconOnly={hasIconOnly}
          disableRipple
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
