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
    leftIcon,
    rightIcon,
    handleLeftIconClick,
    handleRightIconClick,
    ...restProps
  } = props;

  return (
    <BaseTextField
      {...restProps}
      InputProps={{
        startAdornment: leftIcon && (
          <TextFieldIcon icon={leftIcon} onIconClick={handleLeftIconClick} />
        ),
        endAdornment: rightIcon && (
          <TextFieldIcon icon={rightIcon} onIconClick={handleRightIconClick} />
        ),
      }}
    />
  );
};

const MultiTextField = (props: MultiTextFieldProps) => {
  return <BaseTextField {...props} multiline />;
};

const TextField = (props: TextFieldProps) => {
  const {
    rows = 1,
    multiline = false,
    variant = "outlined",
    ...restProps
  } = props;

  return multiline ? (
    <MultiTextField {...restProps} variant={variant} rows={rows} />
  ) : (
    <SingleTextField {...restProps} variant={variant} />
  );
};

export default TextField;
