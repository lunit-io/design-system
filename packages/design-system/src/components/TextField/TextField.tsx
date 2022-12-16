import React from "react";

import { BaseTextField } from "./TextField.style";
import type {
  TextFieldProps,
  MultiTextFieldProps,
  SingleTextFieldProps,
} from "./TextField.types";

const SingleTextField = (props: SingleTextFieldProps) => {
  const { helperText, error } = props;

  return (
    <BaseTextField {...props} helperText={error ? helperText : undefined} />
  );
};

const MultiTextField = (props: MultiTextFieldProps) => {
  const { helperText, error } = props;

  return (
    <BaseTextField
      {...props}
      multiline
      helperText={error ? helperText : undefined}
    />
  );
};

const TextField = (props: TextFieldProps) => {
  const { rows = 1, multiline = false, ...restProps } = props;

  return multiline ? (
    <MultiTextField
      {...props}
      rows={rows}
      helperText={<p style={{ margin: 0 }}>Error Text</p>}
    />
  ) : (
    <SingleTextField
      {...restProps}
      helperText={<p style={{ margin: 0 }}>Error Text</p>}
    />
  );
};

export default TextField;
