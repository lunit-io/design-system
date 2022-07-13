import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body1sb: React.CSSProperties;
    body1reg: React.CSSProperties;
    body2b: React.CSSProperties;
    body2m: React.CSSProperties;
    body2reg: React.CSSProperties;
    body3b: React.CSSProperties;
    body3reg: React.CSSProperties;
    button1: React.CSSProperties;
    button2: React.CSSProperties;
    caption: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body1sb?: React.CSSProperties;
    body1reg?: React.CSSProperties;
    body2b?: React.CSSProperties;
    body2m?: React.CSSProperties;
    body2reg?: React.CSSProperties;
    body3b?: React.CSSProperties;
    body3reg?: React.CSSProperties;
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
    caption?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1sb: true;
    body1reg: true;
    body2b: true;
    body2m: true;
    body2reg: true;
    body3b: true;
    body3reg: true;
    button1: true;
    button2: true;
    caption: true;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    body1sb?: TypographyStyle;
    body1reg?: TypographyStyle;
    body2b?: TypographyStyle;
    body2m?: TypographyStyle;
    body2reg?: TypographyStyle;
    body3b?: TypographyStyle;
    body3reg?: TypographyStyle;
    button1?: TypographyStyle;
    button2?: TypographyStyle;
    caption?: TypographyStyle;
  }

  interface TypographyOptions {
    body1sb?: TypographyStyleOptions;
    body1reg?: TypographyStyleOptions;
    body2b?: TypographyStyleOptions;
    body2m?: TypographyStyleOptions;
    body2reg?: TypographyStyleOptions;
    body3b?: TypographyStyleOptions;
    body3reg?: TypographyStyleOptions;
    button1?: TypographyStyleOptions;
    button2?: TypographyStyleOptions;
    caption?: TypographyStyleOptions;
  }
}

const Pretendard = {
  fontFamily: [
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
  ].join(","),
};

const typoOptions: TypographyOptions = {
  ...Pretendard,
  h1: {
    fontWeight: 600,
    fontSize: "52px",
    lineHeight: "68px",
  },
  h2: {
    fontWeight: 700,
    fontSize: "38px",
    lineHeight: "48px",
  },
  h3: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "36px",
  },
  h4: {
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "28px",
  },
  h6: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
  },
  body1sb: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
  },
  body1reg: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
  },
  body2b: {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "20px",
  },
  body2m: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
  },
  body2reg: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
  },
  body3b: {
    fontWeight: 600,
    fontSize: "12.4px",
    lineHeight: "16px",
  },
  body3reg: {
    fontWeight: 400,
    fontSize: "12.4px",
    lineHeight: "16px",
  },
  overline: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  button1: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "22px",
    textTransform: "capitalize",
  },
  button2: {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    textTransform: "capitalize",
  },
  caption: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
  },
};

export const createTypographyCssBaseline = () => {
  return {
    html: {
      fontFamily: Pretendard,
      fontFeatureSettings: `'tnum', 'ss01', 'ss02', 'ss08'`,
    },
  };
};

export default typoOptions;
