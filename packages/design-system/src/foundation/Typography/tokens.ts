import type { TypographyStyleOptions } from "@mui/material/styles/createTypography";

const fontWeights = {
  "--font-weight-bold": 700,
  "--font-weight-semibold": 600,
  "--font-weight-medium": 500,
  "--font-weight-regular": 400,
} as const;

const headline = {
  "--headline1-font-weight": "var(--font-weight-semibold)",
  "--headline1-font-size": "52px",
  "--headline1-line-height": "68px",
  "--headline2-font-weight": "var(--font-weight-bold)",
  "--headline2-font-size": "38px",
  "--headline2-line-height": "65px",
  "--headline3-font-weight": "var(--font-weight-semibold)",
  "--headline3-font-size": "24px",
  "--headline3-line-height": "57px",
  "--headline4-font-weight": "var(--font-weight-semibold)",
  "--headline4-font-size": "20px",
  "--headline4-line-height": "28px",
  "--headline5-font-weight": "var(--font-weight-semibold)",
  "--headline5-font-size": "16px",
  "--headline5-line-height": "24px",
} as const;

const body = {
  "--body1-16-semibold-font-weight": "var(--font-weight-semibold)",
  "--body1-16-semibold-font-size": "16px",
  "--body1-16-semibold-line-height": "24px",
  "--body1-16-regular-font-weight": "var(--font-weight-regular)",
  "--body1-16-regular-font-size": "16px",
  "--body1-16-regular-line-height": "24px",
  "--body2-14-bold-font-weight": "var(--font-weight-bold)",
  "--body2-14-bold-font-size": "14px",
  "--body2-14-bold-line-height": "20px",
  "--body2-14-medium-font-weight": "var(--font-weight-medium)",
  "--body2-14-medium-font-size": "14px",
  "--body2-14-medium-line-height": "20px",
  "--body2-14-regular-font-weight": "var(--font-weight-regular)",
  "--body2-14-regular-font-size": "14px",
  "--body2-14-regular-line-height": "20px",
  "--body3-12-semibold-font-weight": "var(--font-weight-semibold)",
  "--body3-12-semibold-font-size": "12.4px",
  "--body3-12-semibold-line-height": "16px",
  "--body3-12-regular-font-weight": "var(--font-weight-regular)",
  "--body3-12-regular-font-size": "12.4px",
  "--body3-12-regular-line-height": "16px",
} as const;

const etc = {
  "--overline-font-weight": "var(--font-weight-medium)",
  "--overline-font-size": "14px",
  "--overline-line-height": "20px",
  "--button1-font-weight": "var(--font-weight-medium)",
  "--button1-font-size": "16px",
  "--button1-line-height": "22px",
  "--button2-font-weight": "var(--font-weight-medium)",
  "--button2-font-size": "14px",
  "--button2-line-height": "20px",
  "--caption-font-weight": "var(--font-weight-medium)",
  "--caption-font-size": "12px",
  "--caption-line-height": "16px",
} as const;

const fontVariants: Record<string, TypographyStyleOptions> = {
  headline1: {
    fontWeight: "var(--headline1-font-weight)",
    fontSize: "var(--headline1-font-size)",
    lineHeight: "var(--headline1-line-height)",
    color: "var(--text_normal)",
  },
  headline2: {
    fontWeight: "var(--headline2-font-weight)",
    fontSize: "var(--headline2-font-size)",
    lineHeight: "var(--headline2-line-height)",
    color: "var(--text_normal)",
  },
  headline3: {
    fontWeight: "var(--headline3-font-weight)",
    fontSize: "var(--headline3-font-size)",
    lineHeight: "var(--headline3-line-height)",
    color: "var(--text_normal)",
  },
  headline4: {
    fontWeight: "var(--headline4-font-weight)",
    fontSize: "var(--headline4-font-size)",
    lineHeight: "var(--headline4-line-height)",
    color: "var(--text_normal)",
  },
  headline5: {
    fontWeight: "var(--headline5-font-weight)",
    fontSize: "var(--headline5-font-size)",
    lineHeight: "var(--headline5-line-height)",
    color: "var(--text_normal)",
  },
  body1_16_semibold: {
    fontWeight: "var(--body1-16-semibold-font-weight)",
    fontSize: "var(--body1-16-semibold-font-size)",
    lineHeight: "var(--body1-16-semibold-line-height)",
    color: "var(--text_normal)",
  },
  body1_16_regular: {
    fontWeight: "var(--body1-16-regular-font-weight)",
    fontSize: "var(--body1-16-regular-font-size)",
    lineHeight: "var(--body1-16-regular-line-height)",
    color: "var(--text_normal)",
  },
  body2_14_bold: {
    fontWeight: "var(--body2-14-bold-font-weight)",
    fontSize: "var(--body2-14-bold-font-size)",
    lineHeight: "var(--body2-14-bold-line-height)",
    color: "var(--text_normal)",
  },
  body2_14_medium: {
    fontWeight: "var(--body2-14-medium-font-weight)",
    fontSize: "var(--body2-14-medium-font-size)",
    lineHeight: "var(--body2-14-medium-line-height)",
    color: "var(--text_normal)",
  },
  body2_14_regular: {
    fontWeight: "var(--body2-14-regular-font-weight)",
    fontSize: "var(--body2-14-regular-font-size)",
    lineHeight: "var(--body2-14-regular-line-height)",
    color: "var(--text_normal)",
  },
  body3_12_semibold: {
    fontWeight: "var(--body3-12-semibold-font-weight)",
    fontSize: "var(--body3-12-semibold-font-size)",
    lineHeight: "var(--body3-12-semibold-line-height)",
    color: "var(--text_normal)",
  },
  body3_12_regular: {
    fontWeight: "var(--body3-12-regular-font-weight)",
    fontSize: "var(--body3-12-regular-font-size)",
    lineHeight: "var(--body3-12-regular-line-height)",
    color: "var(--text_normal)",
  },
  overline: {
    fontWeight: "var(--overline-font-weight)",
    fontSize: "var(--overline-font-size)",
    lineHeight: "var(--overline-line-height)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "var(--text_normal)",
  },
  button1: {
    fontWeight: "var(--button1-font-weight)",
    fontSize: "var(--button1-font-size)",
    lineHeight: "var(--button1-line-height)",
    textTransform: "capitalize",
    color: "var(--text_normal)",
  },
  button2: {
    fontWeight: "var(--button2-font-weight)",
    fontSize: "var(--button2-font-size)",
    lineHeight: "var(--button2-line-height)",
    letterSpacing: "0.2px",
    textTransform: "capitalize",
    color: "var(--text_normal)",
  },
  caption: {
    fontWeight: "var(--caption-font-weight)",
    fontSize: "var(--caption-font-size)",
    lineHeight: "var(--caption-line-height)",
    color: "var(--text_normal)",
  },
};

export const cssVariables = {
  ...fontWeights,
  ...headline,
  ...body,
  ...etc,
};

export { fontVariants };
