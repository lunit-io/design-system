import Typography from "@mui/material/Typography";
import type { TypographyPropsVariantOverridesType } from "../../foundation/Typography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides
    extends TypographyPropsVariantOverridesType {}
}

export default Typography;
