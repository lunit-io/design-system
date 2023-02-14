import React from "react";
import { styled } from "@mui/material/styles";
import MuiCheckbox from "@mui/material/Checkbox";
import type { CheckboxProps } from "@mui/material";

const CustomCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  width: 20,
  height: 20,
  padding: 1,
  "&.Mui-disabled": {
    opacity: 0.38,
  },
  "&.Mui-focusVisible:after": {
    content: '""',
    position: "absolute",
    width: 24,
    height: 24,
    border: `1px solid ${theme.palette.token.core.focused}`,
    borderRadius: "7px",
  },
}));

const iconSize = {
  width: 18,
  height: 18,
};

const DefaultIcon = styled("span")(({ theme }) => ({
  ...iconSize,
  backgroundColor: theme.palette.token.component.selectcontrol_off,
  maskImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath" +
    " fill-rule='evenodd' clip-rule='evenodd' d='M14 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V14C1.5 15.3807 2.61929 16.5 4 16.5H14C15.3807 " +
    "16.5 16.5 15.3807 16.5 14V4C16.5 2.61929 15.3807 1.5 14 1.5ZM4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H14C16.2091 18 18 16.2091 18 14V4C18 1.79086 16.2091 0 14 0H4Z' /%3E%3C/svg%3E\")",
}));

const CheckedIcon = styled("span")(({ theme }) => ({
  ...iconSize,
  backgroundColor: theme.palette.token.component.selectcontrol_on,
  maskImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath" +
    " fill-rule='evenodd' clip-rule='evenodd' d='M4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H14C16.2091 18 18 16.2091 18 14V4C18 1.79086 16.2091 0 14 0H4ZM14.2516 " +
    "7.14413C14.6074 6.72168 14.5533 6.09083 14.1309 5.73508C13.7084 5.37933 13.0776 5.43341 12.7218 5.85586L8.31824 11.0851L5.14993 8.37556C4.7302 8.01661 4.09895 8.06588 3.74 8.48561C3.38105 8.90533 3.43032 9.53658 3.85005 9.89553L7.78416 13.26C7.98672 13.4332 8.25006 13.5184 8.51571 13.4967C8.78135 13.4749 9.02732 13.348 9.19901 13.1441L14.2516 7.14413Z' /%3E%3C/svg%3E\")",
}));

const IndeterminateIcon = styled("span")(({ theme }) => ({
  ...iconSize,
  backgroundColor: theme.palette.token.component.selectcontrol_on,
  maskImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath" +
    " fill-rule='evenodd' clip-rule='evenodd' d='M4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H14C16.2091 18 18 16.2091 18 14V4C18 1.79086 16.2091 0 " +
    "14 0H4ZM4 8C3.44772 8 3 8.44771 3 9C3 9.5523 3.44771 10 4 10H14C14.5523 10 15 9.5523 15 9C15 8.44772 14.5523 8 14 8H4Z' /%3E%3C/svg%3E\")",
}));

const Checkbox = (props: CheckboxProps) => {
  return (
    <CustomCheckbox
      disableRipple
      icon={<DefaultIcon />}
      checkedIcon={<CheckedIcon />}
      indeterminateIcon={<IndeterminateIcon />}
      {...props}
    />
  );
};

export default Checkbox;
