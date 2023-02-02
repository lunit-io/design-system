import {
  FontStyleOptions,
  TypographyOptions,
} from "@mui/material/styles/createTypography";
import tokens from "./tokens";

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
    fontWeight: "var(--52-semibold-font-weight)",
    fontSize: "var(--52-semibold-font-size)",
    lineHeight: "var(--52-semibold-line-height)",
  },
  h2: {
    fontWeight: "var(--38-bold-font-weight)",
    fontSize: "var(--38-bold-font-size)",
    lineHeight: "var(--38-bold-line-height)",
  },
  h3: {
    fontWeight: "var(--24-semibold-font-weight)",
    fontSize: "var(--24-semibold-font-size)",
    lineHeight: "var(--24-semibold-line-height)",
  },
  h4: {
    fontWeight: "var(--20-semibold-font-weight)",
    fontSize: "var(--20-semibold-font-size)",
    lineHeight: "var(--20-semibold-line-height)",
  },
  h6: {
    fontWeight: "var(--16-semibold-font-weight)",
    fontSize: "var(--16-semibold-font-size)",
    lineHeight: "var(--16-semibold-line-height)",
  },
  body16_semibold: {
    fontWeight: "var(--16-semibold-font-weight)",
    fontSize: "var(--16-semibold-font-size)",
    lineHeight: "var(--16-semibold-line-height)",
  },
  body16_regular: {
    fontWeight: "var(--16-regular-font-weight)",
    fontSize: "var(--16-regular-font-size)",
    lineHeight: "var(--16-regular-line-height)",
  },
  body14_bold: {
    fontWeight: "var(--14-bold-font-weight)",
    fontSize: "var(--14-bold-font-size)",
    lineHeight: "var(--14-bold-line-height)",
  },
  body14_medium: {
    fontWeight: "var(--14-medium-font-weight)",
    fontSize: "var(--14-medium-font-size)",
    lineHeight: "var(--14-medium-line-height)",
  },
  body14_regular: {
    fontWeight: "var(--14-regular-font-weight)",
    fontSize: "var(--14-regular-font-size)",
    lineHeight: "var(--14-regular-line-height)",
  },
  body12_semibold: {
    fontWeight: "var(--12-semibold-font-weight)",
    fontSize: "var(--12-semibold-font-size)",
    lineHeight: "var(--12-semibold-line-height)",
  },
  body12_regular: {
    fontWeight: "var(--12-regular-font-weight)",
    fontSize: "var(--12-regular-font-size)",
    lineHeight: "var(--12-regular-line-height)",
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
