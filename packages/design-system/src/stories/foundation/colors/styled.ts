import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const PaletteContainer = styled(Box)({
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
});

export const ColorContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "84px",
  marginRight: "20px",
  marginBottom: "20px",
});

export const Color = styled(Box)({
  width: "84px",
  height: "84px",
  borderRadius: "16px",
  marginBottom: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid rgba(0, 0, 0, 0.03)",
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.lunit_token.core.text_normal,
  marginLeft: 8,
  fontSize: "12px",
}));
