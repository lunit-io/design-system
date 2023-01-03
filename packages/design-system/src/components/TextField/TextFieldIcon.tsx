import React from "react";

import { IconWrapper } from "./TextField.style";

interface TextFieldProps {
  icon: JSX.Element;
  onIconClick?: () => void;
}

const TextFieldIcon = ({ icon, onIconClick }: TextFieldProps) => {
  return (
    <IconWrapper
      style={{ cursor: onIconClick ? "pointer" : "auto" }}
      onClick={onIconClick}
    >
      {icon}
    </IconWrapper>
  );
};

export default TextFieldIcon;
