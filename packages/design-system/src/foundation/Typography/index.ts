import { TypographyOptions } from "@mui/material/styles/createTypography";
import tokens from "./tokens";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    headline1: React.CSSProperties;
    headline2: React.CSSProperties;
    headline3: React.CSSProperties;
    headline4: React.CSSProperties;
    headline5: React.CSSProperties;
    body1_16_semibold: React.CSSProperties;
    body1_16_regular: React.CSSProperties;
    body2_14_bold: React.CSSProperties;
    body2_14_medium: React.CSSProperties;
    body2_14_regular: React.CSSProperties;
    body3_12_semibold: React.CSSProperties;
    body3_12_regular: React.CSSProperties;
    button1: React.CSSProperties;
    button2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    headline1?: React.CSSProperties;
    headline2?: React.CSSProperties;
    headline3?: React.CSSProperties;
    headline4?: React.CSSProperties;
    headline5?: React.CSSProperties;
    body1_16_semibold?: React.CSSProperties;
    body1_16_regular?: React.CSSProperties;
    body2_14_bold?: React.CSSProperties;
    body2_14_medium?: React.CSSProperties;
    body2_14_regular?: React.CSSProperties;
    body3_12_semibold?: React.CSSProperties;
    body3_12_regular?: React.CSSProperties;
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headline1: true;
    headline2: true;
    headline3: true;
    headline4: true;
    headline5: true;
    body1_16_semibold: true;
    body1_16_regular: true;
    body2_14_bold: true;
    body2_14_medium: true;
    body2_14_regular: true;
    body3_12_semibold: true;
    body3_12_regular: true;
    button1: true;
    button2: true;
  }
}

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

const fontVariants: TypographyOptions = {
  headline1: {
    fontWeight: "var(--headline1-font-weight)",
    fontSize: "var(--headline1-font-size)",
    lineHeight: "var(--headline1-line-height)",
  },
  headline2: {
    fontWeight: "var(--headline2-font-weight)",
    fontSize: "var(--headline2-font-size)",
    lineHeight: "var(--headline2-line-height)",
  },
  headline3: {
    fontWeight: "var(--headline3-font-weight)",
    fontSize: "var(--headline3-font-size)",
    lineHeight: "var(--headline3-line-height)",
  },
  headline4: {
    fontWeight: "var(--headline4-font-weight)",
    fontSize: "var(--headline4-font-size)",
    lineHeight: "var(--headline4-line-height)",
  },
  headline5: {
    fontWeight: "var(--headline5-font-weight)",
    fontSize: "var(--headline5-font-size)",
    lineHeight: "var(--headline5-line-height)",
  },
  body1_16_semibold: {
    fontWeight: "var(--body1-16-semibold-font-weight)",
    fontSize: "var(--body1-16-semibold-font-size)",
    lineHeight: "var(--body1-16-semibold-line-height)",
  },
  body1_16_regular: {
    fontWeight: "var(--body1-16-regular-font-weight)",
    fontSize: "var(--body1-16-regular-font-size)",
    lineHeight: "var(--body1-16-regular-line-height)",
  },
  body2_14_bold: {
    fontWeight: "var(--body2-14-bold-font-weight)",
    fontSize: "var(--body2-14-bold-font-size)",
    lineHeight: "var(--body2-14-bold-line-height)",
  },
  body2_14_medium: {
    fontWeight: "var(--body2-14-medium-font-weight)",
    fontSize: "var(--body2-14-medium-font-size)",
    lineHeight: "var(--body2-14-medium-line-height)",
  },
  body2_14_regular: {
    fontWeight: "var(--body2-14-regular-font-weight)",
    fontSize: "var(--body2-14-regular-font-size)",
    lineHeight: "var(--body2-14-regular-line-height)",
  },
  body3_12_semibold: {
    fontWeight: "var(--body3-12-semibold-font-weight)",
    fontSize: "var(--body3-12-semibold-font-size)",
    lineHeight: "var(--body3-12-semibold-line-height)",
  },
  body3_12_regular: {
    fontWeight: "var(--body3-12-regular-font-weight)",
    fontSize: "var(--body3-12-regular-font-size)",
    lineHeight: "var(--body3-12-regular-line-height)",
  },
  overline: {
    fontWeight: "var(--overline-font-weight)",
    fontSize: "var(--overline-font-size)",
    lineHeight: "var(--overline-line-height)",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  button1: {
    fontWeight: "var(--button1-font-weight)",
    fontSize: "var(--button1-font-size)",
    lineHeight: "var(--button1-line-height)",
    textTransform: "capitalize",
  },
  button2: {
    fontWeight: "var(--button2-font-weight)",
    fontSize: "var(--button2-font-size)",
    lineHeight: "var(--button2-line-height)",
    letterSpacing: "0.2px",
    textTransform: "capitalize",
  },
  caption: {
    fontWeight: "var(--caption-font-weight)",
    fontSize: "var(--caption-font-size)",
    lineHeight: "var(--caption-line-height)",
  },
};

const typographyOptions: TypographyOptions = {
  fontFamily,
  ...fontVariants,
};

export const createTypographyCssBaseline = () => {
  return {
    html: {
      fontFamily,
      fontFeatureSettings: `'tnum', 'ss01', 'ss02', 'ss08'`,
    },
    ":root": {
      ...tokens,
    },
  };
};

export default typographyOptions;
