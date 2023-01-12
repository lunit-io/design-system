import React from "react";
import { styled } from "@mui/material/styles";
import MuiRadio, { RadioProps } from "@mui/material/Radio";

const CustomRadio = styled(MuiRadio)(({ theme }) => ({
  padding: 0,
  stroke: theme.palette.token.component.selectcontrol_off,
  "&.Mui-checked": {
    stroke: theme.palette.token.component.selectcontrol_on,
  },
  "&.Mui-disabled": {
    opacity: 0.38,
  },
  "&.Mui-focusVisible:after": {
    content: '""',
    position: "absolute",
    width: 24,
    height: 24,
    border: `1px solid ${theme.palette.token.core.focused}`,
    borderRadius: "50%",
  },
}));

const DefaultIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="8.25" strokeWidth="1.5" />
    </svg>
  );
};

const CheckedIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="7" strokeWidth="4" />
    </svg>
  );
};

const Radio = (props: RadioProps) => {
  return (
    <CustomRadio
      disableRipple
      icon={<DefaultIcon />}
      checkedIcon={<CheckedIcon />}
      {...props}
    />
  );
};

export default Radio;
