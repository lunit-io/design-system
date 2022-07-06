import { TypographyOptions } from "@mui/material/styles/createTypography";

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

const typographyOptions: TypographyOptions = {
  // @todo define typography options
  ...Pretendard,
};

export const createTypographyCSSBaseline = () => {
  return {
    html: {
      fontFamily: Pretendard,
    },
  };
};

export default typographyOptions;
