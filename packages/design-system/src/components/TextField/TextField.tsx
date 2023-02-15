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
    size,
    leftIcon,
    rightIcon,
    leftIconSx,
    rightIconSx,
    handleLeftIconClick,
    handleRightIconClick,
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
            sx={leftIconSx}
            icon={leftIcon}
            onIconClick={handleLeftIconClick}
          />
        ),
        endAdornment: rightIcon && (
          <TextFieldIcon
            sx={rightIconSx}
            icon={rightIcon}
            onIconClick={handleRightIconClick}
          />
        ),
      }}
    />
  );
};

const MultiTextField = ({ size, ...restProps }: MultiTextFieldProps) => {
  return <BaseTextField {...restProps} textFieldSize={size} multiline />;
};

const TextField = (props: TextFieldProps) => {
  const {
    rows,
    size = "small",
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
