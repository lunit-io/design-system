import React from "react";

import TextFieldIcon from "./TextFieldIcon";
import { BaseTextField } from "./TextField.style";

import type {
  TextFieldProps,
  MultiTextFieldProps,
  SingleTextFieldProps,
} from "./TextField.types";

const SingleTextField = (props: SingleTextFieldProps) => {
  const {
    size = "small",
    leftIcon,
    rightIcon,
    leftIconSx,
    rightIconSx,
    onLeftIconClick,
    onRightIconClick,
    ...restProps
  } = props;

  return (
    <BaseTextField
      {...restProps}
      textFieldSize={size}
      hasLeftIcon={Boolean(leftIcon)}
      hasRightIcon={Boolean(rightIcon)}
      InputProps={{
        startAdornment: leftIcon && (
          <TextFieldIcon
            sx={{ marginRight: "4px", ...leftIconSx }}
            icon={leftIcon}
            onIconClick={onLeftIconClick}
          />
        ),
        endAdornment: rightIcon && (
          <TextFieldIcon
            sx={{ marginLeft: "4px", ...rightIconSx }}
            icon={rightIcon}
            onIconClick={onRightIconClick}
          />
        ),
      }}
    />
  );
};

const MultiTextField = ({
  size = "small",
  onChange,
  ...restProps
}: MultiTextFieldProps) => {
  return <BaseTextField {...restProps} textFieldSize={size} multiline />;
};

const TextField = (props: TextFieldProps) => {
  const {
    rows,
    size,
    multiline = false,
    variant = "outlined",
    ...restProps
  } = props;

  return multiline ? (
    <MultiTextField
      {...restProps}
      maxRows={Infinity}
      size={size}
      variant={variant}
      rows={rows}
    />
  ) : (
    <SingleTextField {...restProps} size={size} variant={variant} />
  );
};

export default TextField;
