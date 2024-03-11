import React from "react";
import { styled } from "@mui/material/styles";
import MuiCheckbox from "@mui/material/Checkbox";
import type { CheckboxProps } from "@mui/material";

const CustomCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  width: 20,
  height: 20,
  padding: 0,
  "&.Mui-disabled": {
    opacity: 0.38,
  },
  "&.Mui-focusVisible:after": {
    content: '""',
    position: "absolute",
    width: 24,
    height: 24,
    border: `1px solid ${theme.palette.lunit_token.core.focused}`,
    borderRadius: "7px",
  },
}));

const iconSize = {
  width: 18,
  height: 18,
};

const DefaultIcon = styled("span")(({ theme }) => ({
  ...iconSize,
  borderRadius: "20%",
  boxShadow: `inset 0 0 0 1.5px ${theme.palette.lunit_token.component.selectcontrol_off}`,
}));

const CheckedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 1C2.79086 1 1 2.79086 1 5V15C1 17.2091 2.79086 19 5 19H15C17.2091 19 19 17.2091 19 15V5C19 2.79086 17.2091 1 15 1H5ZM15.2516 8.14413C15.6074 7.72168 15.5533 7.09083 15.1309 6.73508C14.7084 6.37933 14.0776 6.43341 13.7218 6.85586L9.31824 12.0851L6.14993 9.37556C5.7302 9.01661 5.09895 9.06588 4.74 9.48561C4.38105 9.90533 4.43032 10.5366 4.85005 10.8955L8.78416 14.26C8.98672 14.4332 9.25006 14.5184 9.51571 14.4967C9.78135 14.4749 10.0273 14.348 10.199 14.1441L15.2516 8.14413Z"
        fill="#00C9EA"
      />
    </svg>
  );
};

const IndeterminateIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 1C2.79086 1 1 2.79086 1 5V15C1 17.2091 2.79086 19 5 19H15C17.2091 19 19 17.2091 19 15V5C19 2.79086 17.2091 1 15 1H5ZM5 9C4.44772 9 4 9.44771 4 10C4 10.5523 4.44771 11 5 11L15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9L5 9Z"
        fill="#00C9EA"
      />
    </svg>
  );
};

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
