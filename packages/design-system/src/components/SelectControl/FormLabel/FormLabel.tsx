import React from "react";
import { FormControlLabelProps } from "@mui/material";
import { StyledFormControlLabel } from "./FormLabel.styled";

const FormLabel = (props: FormControlLabelProps) => {
  return <StyledFormControlLabel {...props} />;
};

export default FormLabel;
