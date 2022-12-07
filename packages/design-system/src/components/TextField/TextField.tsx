import React from "react";

import { BaseTextField } from "./TextField.style";
import type {
  TextFieldProps,
  MultiTextFieldProps,
  SingleTextFieldProps,
} from "./TextField.types";

const SingleTextField = ({ sx }: SingleTextFieldProps) => {
  return <BaseTextField placeholder="Please typing..." sx={sx} />;
};

const MultiTextField = ({ sx, rows }: MultiTextFieldProps) => {
  return (
    <BaseTextField
      placeholder="Please typing..."
      sx={sx}
      rows={rows}
      multiline
    />
  );
};

const TextField = ({ sx, rows, isMultiline }: TextFieldProps) => {
  return isMultiline ? (
    <MultiTextField sx={sx} rows={rows} />
  ) : (
    <SingleTextField sx={sx} />
  );
};

export default TextField;
