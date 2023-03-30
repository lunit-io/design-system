import React from "react";

import { IconWrapper } from "./TextField.style";

import type { SxProps } from "@mui/material";

interface TextFieldProps {
  sx?: SxProps;
  icon: JSX.Element;
  onIconClick?: () => void;
}

const TextFieldIcon = ({ sx, icon, onIconClick }: TextFieldProps) => {
  return (
    <IconWrapper
      sx={{ cursor: onIconClick ? "pointer" : "auto", ...sx }}
      onClick={onIconClick}
    >
      {icon}
    </IconWrapper>
  );
};

export default TextFieldIcon;
