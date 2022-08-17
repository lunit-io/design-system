import {
  FontStyleOptions,
  TypographyOptions,
} from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body1_sb: React.CSSProperties;
    body1_reg: React.CSSProperties;
    body2_b: React.CSSProperties;
    body2_m: React.CSSProperties;
    body2_reg: React.CSSProperties;
    body3_reg: React.CSSProperties;
    body3_b: React.CSSProperties;
    button1: React.CSSProperties;
    button2: React.CSSProperties;
    caption: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body1_sb?: React.CSSProperties;
    body1_reg?: React.CSSProperties;
    body2_b?: React.CSSProperties;
    body2_m?: React.CSSProperties;
    body2_reg?: React.CSSProperties;
    body3_reg?: React.CSSProperties;
    body3_b?: React.CSSProperties;
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
    caption?: React.CSSProperties;
  }

  interface TypographyVariantsOptionsWithoutFont
    extends Omit<TypographyVariantsOptions, keyof FontStyleOptions> {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1_sb: true;
    body1_reg: true;
    body2_b: true;
    body2_m: true;
    body2_reg: true;
    body3_reg: true;
    body3_b: true;
    button1: true;
    button2: true;
    caption: true;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    body1_sb?: TypographyStyle;
    body1_reg?: TypographyStyle;
    body2_b?: TypographyStyle;
    body2_m?: TypographyStyle;
    body2_reg?: TypographyStyle;
    body3_reg?: TypographyStyle;
    body3_b?: TypographyStyle;
    button1?: TypographyStyle;
    button2?: TypographyStyle;
    caption?: TypographyStyle;
  }

  interface TypographyOptions {
    body1_sb?: TypographyStyleOptions;
    body1_reg?: TypographyStyleOptions;
    body2_b?: TypographyStyleOptions;
    body2_m?: TypographyStyleOptions;
    body2_reg?: TypographyStyleOptions;
    body3_reg?: TypographyStyleOptions;
    body3_b?: TypographyStyleOptions;
    button1?: TypographyStyleOptions;
    button2?: TypographyStyleOptions;
    caption?: TypographyStyleOptions;
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
  body1_sb: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "24px",
  },
  body1_reg: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "24px",
  },
  body2_b: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "20px",
  },
  body2_m: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "20px",
  },
  body2_reg: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "20px",
  },
  body3_b: {
    fontWeight: 600,
    fontSize: 12.4,
    lineHeight: "16px",
  },
  body3_reg: {
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
