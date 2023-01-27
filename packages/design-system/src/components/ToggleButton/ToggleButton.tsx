import Typography from "@mui/material/Typography";
import React from "react";
import { CustomToggleButton } from "./ToggleButton.styled";
import { ToggleButtonProps } from "./ToggleButton.types";

const ToggleButton = (props: ToggleButtonProps) => {
  const {
    kind = "contained",
    size = "small",
    color = "primary",
    selectedColor = "primary",
    className,
    selected,
    children,
    ...buttonProps
  } = props;
  return (
    <>
      {kind === "contained" || kind === "ghost" ? (
        <CustomToggleButton
          className={`${kind} ${className ? className : ""}`}
          selected={selected}
          kind={kind}
          color={color}
          size={size}
          selectedColor={selectedColor}
          disableRipple
          disableFocusRipple
          {...buttonProps}
        >
          <Typography variant={size === "large" ? "button1" : "button2"}>
            {children}
          </Typography>
        </CustomToggleButton>
      ) : (
        <CustomToggleButton
          className={`outlined ${className ? className : ""}`}
          selected={selected}
          kind="outlined"
          color="primary"
          size={size}
          selectedColor={selectedColor}
          disableRipple
          disableFocusRipple
          {...buttonProps}
        >
          <Typography variant={size === "large" ? "button1" : "button2"}>
            {children}
          </Typography>
        </CustomToggleButton>
      )}
    </>
  );
};

export default ToggleButton;
