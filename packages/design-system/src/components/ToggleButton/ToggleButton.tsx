import React, { forwardRef } from "react";
import {
  IconWrapper,
  CustomToggleButton,
  IconAndChildrenWrapper,
} from "./ToggleButton.styled";
import type { ToggleButtonProps } from "./ToggleButton.types";

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (props, ref) => {
    const {
      kind = "contained",
      size = "small",
      color = "primary",
      selectedColor = "primary",
      className = "",
      icon,
      selected,
      children,
      ...buttonProps
    } = props;

    const hasIconOnly = Boolean(icon && !children);
    const excludeToggleGroupClass = className
      .replace("MuiToggleButtonGroup-grouped", "")
      .replace("MuiToggleButtonGroup-groupedHorizontal", "");

    return (
      <>
        {kind === "contained" || kind === "ghost" ? (
          <CustomToggleButton
            ref={ref}
            className={`${kind} ${excludeToggleGroupClass}`}
            selected={selected}
            kind={kind}
            color={color}
            size={size}
            hasIconOnly={hasIconOnly}
            selectedColor={selectedColor}
            disableRipple
            disableFocusRipple
            {...buttonProps}
          >
            {!hasIconOnly ? (
              <>
                {icon ? (
                  <IconAndChildrenWrapper>
                    <IconWrapper size={size} hasIconOnly={hasIconOnly}>
                      {icon}
                    </IconWrapper>
                    {children}
                  </IconAndChildrenWrapper>
                ) : (
                  children
                )}
              </>
            ) : (
              <IconWrapper size={size} hasIconOnly={hasIconOnly}>
                icon
              </IconWrapper>
            )}
          </CustomToggleButton>
        ) : (
          <CustomToggleButton
            ref={ref}
            className={`outlined ${excludeToggleGroupClass}`}
            selected={selected}
            kind="outlined"
            color="primary"
            size={size}
            hasIconOnly={hasIconOnly}
            selectedColor={selectedColor}
            disableRipple
            disableFocusRipple
            {...buttonProps}
          >
            {!hasIconOnly ? (
              <>
                {icon ? (
                  <IconAndChildrenWrapper>
                    <IconWrapper size={size} hasIconOnly={hasIconOnly}>
                      {icon}
                    </IconWrapper>
                    {children}
                  </IconAndChildrenWrapper>
                ) : (
                  children
                )}
              </>
            ) : (
              <IconWrapper size={size} hasIconOnly={hasIconOnly}>
                {icon}
              </IconWrapper>
            )}
          </CustomToggleButton>
        )}
      </>
    );
  }
);

export default ToggleButton;
