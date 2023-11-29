import React, { forwardRef } from "react";

import { CustomButton } from "./Button.styled";

import type { ButtonType, ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = "small",
    color = "primary",
    icon,
    className,
    children,
    startIcon,
    ...buttonProps
  } = props;
  const hasIconOnly = Boolean((startIcon || icon) && !children);

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
          startIcon={startIcon || icon}
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
          startIcon={startIcon || icon}
          hasIconOnly={hasIconOnly}
        >
          {!hasIconOnly && <>{children}</>}
        </CustomButton>
      )}
    </>
  );
  /**
   * There is an issue between React 18, Mui's OverridableComponent type and the
   * type coercion to temporarily fix it.
   * https://github.com/lunit-io/design-system/pull/143#issuecomment-1831127232
   */
}) as ButtonType;

export default Button;
