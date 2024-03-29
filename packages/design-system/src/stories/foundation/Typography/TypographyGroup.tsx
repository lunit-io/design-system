import React from "react";

import { Box, styled, useTheme, TypographyProps } from "@mui/material";

import Typography from "@/components/Typography";

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
  width: 200,
  color: theme.palette.lunit_token.core.text_light,
}));

export const TypographyDummy = styled(Typography)({
  width: 560,
});

type ReadableArray<T> = Array<T> | ReadonlyArray<T>;

interface TypographyGroupProps {
  heading: React.ReactNode;
  dummy: React.ReactNode;
  variants: ReadableArray<
    Exclude<TypographyProps["variant"], "inherit" | undefined>
  >;
}

const TypographyGroup = ({
  heading,
  dummy,
  variants,
}: TypographyGroupProps) => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" component="h2" sx={{ mb: 5 }}>
        {heading}
      </Typography>
      <TypographyContent>
        {variants.map((variant) => {
          const { fontWeight, fontSize, lineHeight } =
            theme.typography[variant] ?? {};
          return (
            <TypographyItem key={variant}>
              <TypographyTitle variant="body1_16_semibold">
                {variant}
              </TypographyTitle>
              <TypographyDummy variant={variant}>{dummy}</TypographyDummy>
            </TypographyItem>
          );
        })}
      </TypographyContent>
    </>
  );
};

export default TypographyGroup;
