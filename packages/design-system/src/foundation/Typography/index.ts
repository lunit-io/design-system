import type { TypographyOptions } from "@mui/material/styles/createTypography";
import { fontVariants, cssVariables } from "./tokens";

type DSVariants =
  | "headline1"
  | "headline2"
  | "headline3"
  | "headline4"
  | "headline5"
  | "body1_16_semibold"
  | "body1_16_regular"
  | "body2_14_bold"
  | "body2_14_medium"
  | "body2_14_regular"
  | "body3_12_semibold"
  | "body3_12_regular"
  | "button1"
  | "button2";

type DSVariantsType = Record<DSVariants, React.CSSProperties>;

declare module "@mui/material/styles" {
  interface TypographyVariants extends DSVariantsType {}
  interface TypographyVariantsOptions extends Partial<DSVariantsType> {}
}

export type TypographyPropsVariantOverridesType = Record<DSVariants, true>;

const fontFamily = [
  "Pretendard",
  "-apple-system",
  "BlinkMacSystemFont",
  "system-ui",
  "Roboto",
  '"Helvetica Neue"',
  '"Segoe UI"',
  '"Apple SD Gothic Neo"',
  '"Noto Sans KR"',
  '"Malgun Gothic"',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  "sans-serif",
].join(",");

const typographyOptions: TypographyOptions = {
  fontFamily,
  ...{
    ...fontVariants,
    // alias Mui Typography variants
    h1: fontVariants.headline1,
    h2: fontVariants.headline2,
    h3: fontVariants.headline3,
    h4: fontVariants.headline4,
    h5: fontVariants.headline5,
    h6: fontVariants.headline5,
    body1: fontVariants.body1_16_regular,
    body2: fontVariants.body2_14_regular,
    button: fontVariants.button2,
  },
};

export const typographyDefaultProps = {
  variantMapping: {
    headline1: "h1",
    headline2: "h2",
    headline3: "h3",
    headline4: "h4",
    headline5: "h6",
    body1_16_semibold: "p",
    body1_16_regular: "p",
    body2_14_bold: "p",
    body2_14_medium: "p",
    body2_14_regular: "p",
    body3_12_semibold: "p",
    body3_12_regular: "p",
  },
};

export const createTypographyCssBaseline = () => {
  return {
    "*, *:before, *:after": {
      // @font-face: font-feature-settings로 대체 가능하나, 브라우저 지원이 부족함 https://caniuse.com/mdn-css_at-rules_font-face_font-feature-settings
      fontFeatureSettings: `'tnum', 'ss01', 'ss02', 'ss08'`,
    },
    ":root": {
      ...cssVariables,
    },
    ".light1": {
      color: "var(--text_normal)",
    },
    ".light2": {
      color: "var(--text_normal)",
    },
    ".dark1": {
      color: "var(--text_normal)",
    },
    ".dark2": {
      color: "var(--text_normal)",
    },
  };
};

export default typographyOptions;
