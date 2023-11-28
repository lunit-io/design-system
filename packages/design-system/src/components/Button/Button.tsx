import React, { forwardRef } from "react";

import { CustomButton } from "./Button.styled";

import type { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
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
      {/** props.kind 사용 이유: props.color 내 타입 좁히기 활용을 위해 사용 */}
      {props.kind === "outlined" ? (
        <CustomButton
          {...buttonProps}
          ref={ref}
          className={`outlined ${className ? className : ""}`}
          kind="outlined"
          color={props.color ?? "primary"}
          size={size}
          startIcon={icon}
          hasIconOnly={hasIconOnly}
        >
          {!hasIconOnly && <>{children}</>}
        </CustomButton>
      ) : (
        <CustomButton
          {...buttonProps}
          ref={ref}
          className={`${props.kind ?? "contained"} ${
            className ? className : ""
          }`}
          kind={props.kind ?? "contained"}
          color={props.color ?? "primary"}
          size={size}
          startIcon={icon}
          hasIconOnly={hasIconOnly}
        >
          {!hasIconOnly && <>{children}</>}
        </CustomButton>
      )}
    </>
  );
});

export default Button;
