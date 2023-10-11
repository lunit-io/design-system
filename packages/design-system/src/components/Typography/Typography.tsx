import React from "react";
import MuiTypography from "@mui/material/Typography";

import type { TypographyProps } from "@mui/material/Typography";
import type { TypographyPropsVariantOverridesType } from "../../foundation/Typography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides
    extends TypographyPropsVariantOverridesType {}
}

const Typography = <C extends React.ElementType>(
  props: TypographyProps<C, { component?: C }>
) => {
  return <MuiTypography {...props} />;
};

export default Typography;
