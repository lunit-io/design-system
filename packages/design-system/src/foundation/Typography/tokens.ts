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
  "--headline2-line-height": "48px",
  "--headline3-font-weight": "var(--font-weight-semibold)",
  "--headline3-font-size": "24px",
  "--headline3-line-height": "36px",
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
  "--button1-font-weight": "var(--font-weight-semibold)",
  "--button1-font-size": "16px",
  "--button1-line-height": "22px",
  "--button2-font-weight": "var(--font-weight-semibold)",
  "--button2-font-size": "14px",
  "--button2-line-height": "20px",
  "--caption-font-weight": "var(--font-weight-regular)",
  "--caption-font-size": "12px",
  "--caption-line-height": "16px",
} as const;

export default {
  ...fontWeights,
  ...headline,
  ...body,
  ...etc,
};
