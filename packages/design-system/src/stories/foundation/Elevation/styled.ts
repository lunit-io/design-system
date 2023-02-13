import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
  display: "flex",
  gap: theme.spacing(8),
}));

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  marginBottom: theme.spacing(3),
}));
