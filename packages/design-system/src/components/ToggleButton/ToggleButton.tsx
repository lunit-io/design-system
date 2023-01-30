import React from "react";
import Typography from "@mui/material/Typography";
import {
  CustomToggleButton,
  IconAndChildrenWrapper,
} from "./ToggleButton.styled";
import { ToggleButtonProps } from "./ToggleButton.types";

const ToggleButton = (props: ToggleButtonProps) => {
  const {
    kind = "contained",
    size = "small",
    color = "primary",
    selectedColor = "primary",
    hasIconOnly = false,
    className = "",
    icon,
    selected,
    children,
    ...buttonProps
  } = props;

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
            <Typography variant={size === "large" ? "button1" : "button2"}>
              {icon ? (
                <IconAndChildrenWrapper>
                  {icon}
                  {children}
                </IconAndChildrenWrapper>
              ) : (
                children
              )}
            </Typography>
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
            <Typography variant={size === "large" ? "button1" : "button2"}>
              {icon ? (
                <IconAndChildrenWrapper>
                  {icon}
                  {children}
                </IconAndChildrenWrapper>
              ) : (
                children
              )}
            </Typography>
          ) : (
            icon
          )}
        </CustomToggleButton>
      )}
    </>
  );
};

export default ToggleButton;
