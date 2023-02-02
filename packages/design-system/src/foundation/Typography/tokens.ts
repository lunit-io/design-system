const fontWeights = {
  "--font-weight-bold": 700,
  "--font-weight-semibold": 600,
  "--font-weight-medium": 500,
  "--font-weight-regular": 400,
} as const;

const headline = {
  "--52-semibold-font-weight": "var(--font-weight-semibold)",
  "--52-semibold-font-size": "52px",
  "--52-semibold-line-height": "68px",
  "--38-bold-font-weight": "var(--font-weight-bold)",
  "--38-bold-font-size": "38px",
  "--38-bold-line-height": "48px",
  "--24-semibold-font-weight": "var(--font-weight-semibold)",
  "--24-semibold-font-size": "24px",
  "--24-semibold-line-height": "36px",
  "--20-semibold-font-weight": "var(--font-weight-semibold)",
  "--20-semibold-font-size": "20px",
  "--20-semibold-line-height": "28px",
  "--16-semibold-font-weight": "var(--font-weight-semibold)",
  "--16-semibold-font-size": "16px",
  "--16-semibold-line-height": "24px",
} as const;

const body = {
  "--16-semibold-font-weight": "var(--font-weight-semibold)",
  "--16-semibold-font-size": "16px",
  "--16-semibold-line-height": "24px",
  "--16-regular-font-weight": "var(--font-weight-regular)",
  "--16-regular-font-size": "16px",
  "--16-regular-line-height": "24px",
  "--14-bold-font-weight": "var(--font-weight-bold)",
  "--14-bold-font-size": "14px",
  "--14-bold-line-height": "20px",
  "--14-medium-font-weight": "var(--font-weight-medium)",
  "--14-medium-font-size": "14px",
  "--14-medium-line-height": "20px",
  "--14-regular-font-weight": "var(--font-weight-regular)",
  "--14-regular-font-size": "14px",
  "--14-regular-line-height": "20px",
  "--12-semibold-font-weight": "var(--font-weight-semibold)",
  "--12-semibold-font-size": "12.4px",
  "--12-semibold-line-height": "16px",
  "--12-regular-font-weight": "var(--font-weight-regular)",
  "--12-regular-font-size": "12.4px",
  "--12-regular-line-height": "16px",
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
