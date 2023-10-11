import React from "react";
import {
  CustomToggleButton,
  IconAndChildrenWrapper,
} from "./ToggleButton.styled";
import type { ToggleButtonProps } from "./ToggleButton.types";

const ToggleButton = (props: ToggleButtonProps) => {
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
                  {icon}
                  {children}
                </IconAndChildrenWrapper>
              ) : (
                children
              )}
            </>
          ) : (
            icon
          )}
        </CustomToggleButton>
      ) : (
        <CustomToggleButton
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
                  {icon}
                  {children}
                </IconAndChildrenWrapper>
              ) : (
                children
              )}
            </>
          ) : (
            icon
          )}
        </CustomToggleButton>
      )}
    </>
  );
};

export default ToggleButton;
