import React from "react";

import { ComponentStory } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { variantArray } from "./const";

export default {
  title: "Foundation/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: variantArray,
    },
  },
};

const TypographyTemplate: ComponentStory<typeof Typography> = (args) => {
  const { variant, children } = args;
  return (
    <Typography variant={variant} sx={{ whiteSpace: "pre-line" }}>
      {children}
    </Typography>
  );
};

export const TypographyComponent = TypographyTemplate.bind({});
TypographyComponent.args = {
  variant: "body1_16_regular",
  children:
    "AI will be the new standard of care. 123456789\nBy Lunit. With AI, we aim to make data-driven medicine\nthe new standard of care.",
};

const SXTemplate: ComponentStory<typeof Typography> = (args) => {
  const { variant, children } = args;
  return (
    <Box sx={{ typography: variant, whiteSpace: "pre-line" }}>{children}</Box>
  );
};

export const SXProps = SXTemplate.bind({});
SXProps.args = {
  variant: "body1_16_regular",
  children:
    "AI will be the new standard of care. 123456789\nBy Lunit. With AI, we aim to make data-driven medicine\nthe new standard of care.",
};

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => !["variant"].includes(prop.toString()),
})<{ variant: typeof variantArray[number] }>(({ theme, variant }) => ({
  ...theme.typography[variant],
  whiteSpace: "pre-line",
}));

const StyledTemplate: ComponentStory<typeof StyledBox> = (args) => {
  /**
const StyledBox = styled(Box)(({ theme }) => ({
  ...theme.typography.body1_16_regular,
  whiteSpace: "pre-line",
}));
  */
  const { variant, children } = args;
  return <StyledBox variant={variant}>{children}</StyledBox>;
};

export const Styled = StyledTemplate.bind({});
Styled.args = {
  variant: "body1_16_regular",
  children:
    "AI will be the new standard of care. 123456789\nBy Lunit. With AI, we aim to make data-driven medicine\nthe new standard of care.",
};
Styled.parameters = {
  docs: {
    source: {
      code: `
const StyledBox = styled(Box)(({ theme }) => ({
  ...theme.typography.body1_16_regular,
  whiteSpace: "pre-line",
}));
...
return (
  <StyledBox>AI will be the new standard of care. 123456789\nBy Lunit. With AI, we aim to make data-driven medicine\nthe new standard of care.</StyledBox>
);
      `,
      language: "tsx",
      type: "code",
    },
  },
};
