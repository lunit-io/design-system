import React from "react";
import { styled } from "@mui/material/styles";
import MuiRadio, { RadioProps } from "@mui/material/Radio";

const CustomRadio = styled(MuiRadio)(({ theme }) => ({
  padding: 0,
  "&.Mui-disabled": {
    opacity: 0.38,
  },
  "&.Mui-focusVisible:after": {
    content: '""',
    position: "absolute",
    display: "block",
    width: 24,
    height: 24,
    borderRadius: "50%",
    border: `1px solid ${theme.palette.lunit_token.core.focused}`,
  },
}));

const DefaultIcon = styled("span")(({ theme }) => ({
  width: "18px",
  height: "18px",
  borderRadius: "50%",
  border: `1.5px solid ${theme.palette.lunit_token.component.selectcontrol_off}`,
  margin: "1px",
}));

const CheckedIcon = styled(DefaultIcon)(({ theme }) => ({
  border: `4px solid ${theme.palette.lunit_token.component.selectcontrol_on}`,
}));

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
