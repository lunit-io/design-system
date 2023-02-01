import { styled, Box, Typography } from "@mui/material";

export const TypographyContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const TypographyItem = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  marginBottom: "24px",
});

export const TypographyTitle = styled(Typography)(({ theme }) => ({
  width: "160px",
  color: theme.palette.token.core.text_light,
}));

export const TypographyDummy = styled(Typography)({
  flex: "1 120px",
});

export const TypographyStyles = styled(Typography)(({ theme }) => ({
  color: theme.palette.token.core.text_light,
}));
