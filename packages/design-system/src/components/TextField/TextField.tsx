import React, { forwardRef } from "react";

import TextFieldIcon from "./TextFieldIcon";
import { BaseTextField } from "./TextField.style";

import type {
  TextFieldProps,
  MultiTextFieldProps,
  SingleTextFieldProps,
} from "./TextField.types";

const SingleTextField = forwardRef<HTMLDivElement, SingleTextFieldProps>(
  (props, ref) => {
    const {
      size = "small",
      leftIcon,
      rightIcon,
      leftIconSx,
      rightIconSx,
      onLeftIconClick,
      onRightIconClick,
      InputProps,
      ...restProps
    } = props;

    return (
      <BaseTextField
        variant="outlined"
        {...restProps}
        ref={ref}
        textFieldSize={size}
        hasLeftIcon={Boolean(leftIcon)}
        hasRightIcon={Boolean(rightIcon)}
        InputProps={{
          ...{
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
          },
          ...InputProps,
        }}
      />
    );
  }
);

const MultiTextField = forwardRef<HTMLDivElement, MultiTextFieldProps>(
  ({ size = "small", ...restProps }, ref) => {
    return (
      <BaseTextField
        variant="outlined"
        {...restProps}
        ref={ref}
        textFieldSize={size}
        multiline
      />
    );
  }
);

const TextField = forwardRef<HTMLDivElement, TextFieldProps>((props, ref) => {
  const { rows, size, multiline = false, ...restProps } = props;

  return multiline ? (
    <MultiTextField
      {...restProps}
      ref={ref}
      maxRows={Infinity}
      size={size}
      rows={rows}
    />
  ) : (
    <SingleTextField {...restProps} ref={ref} size={size} />
  );
});

export default TextField;
