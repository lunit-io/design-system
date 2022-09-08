// TODO: This code is came from scope-frontend-components without editing. We should change it to fit our design.
import type {
  ComponentsOverrides,
  ComponentsProps,
} from "@mui/material/styles";

const styleOverrides: ComponentsOverrides["MuiTextField"] = {
  root: {
    width: "100%",
    input: {
      textOverflow: "ellipsis",
    },
  },
};
const defaultProps: ComponentsProps["MuiTextField"] = {
  variant: "standard",
};
export default {
  styleOverrides,
  defaultProps,
};
