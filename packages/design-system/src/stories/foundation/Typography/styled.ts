import { styled, Box, Typography } from "@mui/material";

export const TypographyContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const TypogrpahyItem = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  marginBottom: "24px",
});

export const TypographyTitle = styled(Typography)({
    width: "120px",
    color: "#AFAFB1",
})

export const TypographyDummy = styled(Typography)({
    flex: "1 120px",
})

export const TypographyStyles = styled(Typography)({
    color: "#99999B",
})