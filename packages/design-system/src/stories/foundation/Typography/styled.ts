import { styled, Box, Typography } from "@mui/material";

export const TypographyContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const TypographyItem = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  marginBottom: "24px",
});

export const TypographyTitle = styled(Typography)(({ theme }) => ({
  width: 160,
  color: theme.palette.token.core.text_light,
}));

export const TypographyDummy = styled(Typography)({
  width: 560,
});

export const TypographyStyles = styled(Typography)(({ theme }) => ({
  width: 320,
  color: theme.palette.token.core.text_light,
}));
