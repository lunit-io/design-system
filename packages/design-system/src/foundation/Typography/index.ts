import {
  FontStyleOptions,
  TypographyOptions,
} from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body16_semibold: React.CSSProperties;
    body16_regular: React.CSSProperties;
    body14_bold: React.CSSProperties;
    body14_medium: React.CSSProperties;
    body14_regular: React.CSSProperties;
    body12_semibold: React.CSSProperties;
    body12_regular: React.CSSProperties;
    button1: React.CSSProperties;
    button2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body16_semibold?: React.CSSProperties;
    body16_regular?: React.CSSProperties;
    body14_bold?: React.CSSProperties;
    body14_medium?: React.CSSProperties;
    body14_regular?: React.CSSProperties;
    body12_semibold?: React.CSSProperties;
    body12_regular?: React.CSSProperties;
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
  }

  interface TypographyVariantsOptionsWithoutFont
    extends Omit<TypographyVariantsOptions, keyof FontStyleOptions> {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body16_semibold: true;
    body16_regular: true;
    body14_bold: true;
    body14_medium: true;
    body14_regular: true;
    body12_semibold: true;
    body12_regular: true;
    button1: true;
    button2: true;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    body16_semibold?: TypographyStyle;
    body16_regular?: TypographyStyle;
    body14_bold?: TypographyStyle;
    body14_medium?: TypographyStyle;
    body14_regular?: TypographyStyle;
    body12_semibold?: TypographyStyle;
    body12_regular?: TypographyStyle;
    button1?: TypographyStyle;
    button2?: TypographyStyle;
  }

  interface TypographyOptions {
    body16_semibold?: TypographyStyleOptions;
    body16_regular?: TypographyStyleOptions;
    body14_bold?: TypographyStyleOptions;
    body14_medium?: TypographyStyleOptions;
    body14_regular?: TypographyStyleOptions;
    body12_semibold?: TypographyStyleOptions;
    body12_regular?: TypographyStyleOptions;
    button1?: TypographyStyleOptions;
    button2?: TypographyStyleOptions;
  }

  interface TypographyOptionsWithoutFont
    extends Omit<TypographyOptions, keyof FontStyleOptions> {}
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

const fontVariants: Omit<TypographyOptions, "fontFamily" | "allVariants"> = {
  h1: {
    fontWeight: 600,
    fontSize: 52,
    lineHeight: "68px",
  },
  h2: {
    fontWeight: 700,
    fontSize: 38,
    lineHeight: "48px",
  },
  h3: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: "36px",
  },
  h4: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "28px",
  },
  h6: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "24px",
  },
  body16_semibold: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "24px",
  },
  body16_regular: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "24px",
  },
  body14_bold: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "20px",
  },
  body14_medium: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "20px",
  },
  body14_regular: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "20px",
  },
  body12_semibold: {
    fontWeight: 600,
    fontSize: 12.4,
    lineHeight: "16px",
  },
  body12_regular: {
    fontWeight: 400,
    fontSize: 12.4,
    lineHeight: "16px",
  },
  overline: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  button1: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "22px",
    textTransform: "capitalize",
  },
  button2: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: "0.2px",
    textTransform: "capitalize",
  },
  caption: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: "16px",
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
  };
};

export default typographyOptions;
