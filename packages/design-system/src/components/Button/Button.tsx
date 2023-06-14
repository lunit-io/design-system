import React from "react";

import { CustomButton } from "./Button.styled";

import type { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
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
      {/** props.kind 사용 이유: props.color 내 타입 좁히기 활용을 위해 사용 */}
      {props.kind === "outlined" ? (
        <CustomButton
          className={`outlined ${className ? className : ""}`}
          kind="outlined"
          color={props.color ?? "primary"}
          size={size}
          startIcon={icon}
          hasIconOnly={hasIconOnly}
          {...buttonProps}
        >
          {!hasIconOnly && <>{children}</>}
        </CustomButton>
      ) : (
        <CustomButton
          className={`${props.kind} ${className ? className : ""}`}
          kind={props.kind}
          color={color}
          size={size}
          startIcon={icon}
          hasIconOnly={hasIconOnly}
          {...buttonProps}
        >
          {!hasIconOnly && <>{children}</>}
        </CustomButton>
      )}
    </>
  );
};

export default Button;
