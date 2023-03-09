import React from "react";
import MuiToggleButtonGroup, {
  ToggleButtonGroupProps,
} from "@mui/material/ToggleButtonGroup";

const ToggleButtonGroup = ({
  size = "small",
  ...props
}: ToggleButtonGroupProps) => {
  return <MuiToggleButtonGroup size={size} {...props} />;
};

export default ToggleButtonGroup;
