const headline = [
  "headline1",
  "headline2",
  "headline3",
  "headline4",
  "headline5",
] as const;
const body = [
  "body1_16_semibold",
  "body1_16_regular",
  "body2_14_bold",
  "body2_14_medium",
  "body2_14_regular",
  "body3_12_semibold",
  "body3_12_regular",
] as const;
const etc = ["button1", "button2", "caption", "overline"] as const;

export const variants = {
  headline,
  body,
  etc,
};

export const variantArray = [...headline, ...body, ...etc];
