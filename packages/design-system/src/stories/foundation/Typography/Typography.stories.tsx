import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box, Typography, useTheme } from "@mui/material";
import { TypographyVariantsOptionsWithoutFont } from "@mui/material/styles";

import {
  TypographyContent,
  TypogrpahyItem,
  TypographyTitle,
  TypographyDummy,
  TypographyStyles,
} from "./styled";

type ReadableArray<T> = Array<T> | ReadonlyArray<T>;

const headline = ["h1", "h2", "h3", "h4", "h6"] as const;
const body = [
  "body1_reg",
  "body1_sb",
  "body2_b",
  "body2_m",
  "body2_reg",
  "body3_b",
  "body3_reg",
] as const;
const etc = ["button1", "button2", "caption", "overline"] as const;

interface TypographyGroupProps {
  heading: React.ReactNode;
  dummy: React.ReactNode;
  variants: ReadableArray<keyof TypographyVariantsOptionsWithoutFont>;
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
            <TypogrpahyItem key={variant}>
              <TypographyTitle
                variant="body1_sb"
              >
                {variant}
              </TypographyTitle>
              <TypographyDummy variant={variant}>
                {dummy}
              </TypographyDummy>
              <TypographyStyles variant="body2_m">
                <Box>fontWeight: {fontWeight}</Box>
                <Box>fontSize: {fontSize}</Box>
                <Box>lineHeight: {lineHeight}</Box>
              </TypographyStyles>
            </TypogrpahyItem>
          );
        })}
      </TypographyContent>
    </>
  );
};

const BaseTypography = () => {
  return (
    <>
      <TypographyGroup
        heading="Headline"
        dummy="Headline 123456789"
        variants={headline}
      />
      <TypographyGroup
        heading="Body"
        dummy={
          <>
            AI will be the new standard of care. 123456789
            <br />
            By Lunit. With AI, we aim to make data-driven medicine
            <br />
            the new standard of care.
          </>
        }
        variants={body}
      />
      <TypographyGroup
        heading="etc"
        dummy="NEWS & UPDATE 71456"
        variants={etc}
      />
    </>
  );
};

export default {
  title: "Foundation/Typography",
  component: BaseTypography,
} as ComponentMeta<typeof BaseTypography>;

const BaseTemplate: ComponentStory<typeof BaseTypography> = () => (
  <BaseTypography />
);

export const Base = BaseTemplate.bind({});
