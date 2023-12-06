import React, { forwardRef } from "react";

import { CustomButton } from "./Button.styled";

import type {
  ButtonType,
  ButtonProps,
  GhostButtonProps,
  OutlinedButtonProps,
  ContainedButtonProps,
} from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { kind, variant, icon, children, startIcon } = props;
  const hasIconOnly = Boolean((startIcon || icon) && !children);

  if (kind === "outlined" || variant === "outlined") {
    return <OutlinedButton {...props} ref={ref} hasIconOnly={hasIconOnly} />;
  }

  if (kind === "ghost" || variant === "text") {
    return <GhostButton {...props} ref={ref} hasIconOnly={hasIconOnly} />;
  }

  return (
    <ContainedButton
      {...props}
      kind="contained"
      variant="contained"
      ref={ref}
      hasIconOnly={hasIconOnly}
    />
  );

  /**
   * There is an issue between React 18, Mui's OverridableComponent type and the
   * type coercion to temporarily fix it.
   * https://github.com/lunit-io/design-system/pull/143#issuecomment-1831127232
   */
}) as ButtonType;

const GhostButton = forwardRef<
  HTMLButtonElement,
  GhostButtonProps & { hasIconOnly: boolean }
>((props, ref) => {
  const {
    size = "small",
    icon,
    className,
    children,
    startIcon,
    hasIconOnly,
  } = props;

  return (
    <CustomButton
      {...props}
      ref={ref}
      className={`ghost ${className ? className : ""}`}
      kind="ghost"
      color={props.color ?? "primary"}
      size={size}
      startIcon={startIcon || icon}
      hasIconOnly={hasIconOnly}
    >
      {!hasIconOnly && <>{children}</>}
    </CustomButton>
  );
});

const OutlinedButton = forwardRef<
  HTMLButtonElement,
  OutlinedButtonProps & { hasIconOnly: boolean }
>((props, ref) => {
  const {
    size = "small",
    icon,
    className,
    children,
    startIcon,
    hasIconOnly,
  } = props;

  return (
    <CustomButton
      {...props}
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
  );
});

const ContainedButton = forwardRef<
  HTMLButtonElement,
  ContainedButtonProps & { hasIconOnly: boolean }
>((props, ref) => {
  const {
    size = "small",
    icon,
    className,
    children,
    startIcon,
    hasIconOnly,
  } = props;

  return (
    <CustomButton
      {...props}
      ref={ref}
      className={`${props.kind ?? "contained"} ${className ? className : ""}`}
      kind={props.kind ?? "contained"}
      color={props.color ?? "primary"}
      size={size}
      startIcon={startIcon || icon}
      hasIconOnly={hasIconOnly}
    >
      {!hasIconOnly && <>{children}</>}
    </CustomButton>
  );
});

export default Button;
