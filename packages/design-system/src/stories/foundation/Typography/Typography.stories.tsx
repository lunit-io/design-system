import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box, Typography, useTheme } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";

import {
  TypographyContent,
  TypographyItem,
  TypographyTitle,
  TypographyDummy,
  TypographyStyles,
} from "./styled";

type ReadableArray<T> = Array<T> | ReadonlyArray<T>;

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
              <TypographyStyles variant="body2_14_medium">
                <Box>fontWeight: {fontWeight}</Box>
                <Box>fontSize: {fontSize}</Box>
                <Box>lineHeight: {lineHeight}</Box>
              </TypographyStyles>
            </TypographyItem>
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
