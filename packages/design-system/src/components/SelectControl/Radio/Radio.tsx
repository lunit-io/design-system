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
    backgroundColor: theme.palette.token.core.focused,
    maskImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 " +
      "5.37258 0 12C0 18.6274 5.37258 24 12 24Z' /%3E%3C/svg%3E\")",
  },
}));

const iconSize = {
  width: 20,
  height: 20,
};

const DefaultIcon = styled("span")(({ theme }) => ({
  ...iconSize,
  backgroundColor: theme.palette.token.component.selectcontrol_off,
  maskImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath" +
    " fill-rule='evenodd' clip-rule='evenodd' d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 " +
    "10 17.5ZM10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z' /%3E%3C/svg%3E\")",
}));

const CheckedIcon = styled("span")(({ theme }) => ({
  ...iconSize,
  backgroundColor: theme.palette.token.component.selectcontrol_on,
  maskImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath" +
    " fill-rule='evenodd' clip-rule='evenodd' d='M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5" +
    " 7.23858 5 10C5 12.7614 7.23858 15 10 15ZM10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z' /%3E%3C/svg%3E\")",
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
