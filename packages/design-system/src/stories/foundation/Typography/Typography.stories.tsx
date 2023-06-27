import React from "react";

import { StoryFn } from "@storybook/react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import Typography from "@/components/Typography";

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

const TypographyTemplate: StoryFn<typeof Typography> = (args) => {
  const { variant, children } = args;
  return (
    <Typography variant={variant} sx={{ whiteSpace: "pre-line" }}>
      {children}
    </Typography>
  );
};

export const TypographyComponent = {
  render: TypographyTemplate,

  args: {
    variant: "body1_16_regular",
    children:
      "AI will be the new standard of care. 123456789\nBy Lunit. With AI, we aim to make data-driven medicine\nthe new standard of care.",
  },
};

const SXTemplate: StoryFn<typeof Typography> = (args) => {
  const { variant, children } = args;
  return (
    <Box sx={{ typography: variant, whiteSpace: "pre-line" }}>{children}</Box>
  );
};

export const SXProps = {
  render: SXTemplate,

  args: {
    variant: "body1_16_regular",
    children:
      "AI will be the new standard of care. 123456789\nBy Lunit. With AI, we aim to make data-driven medicine\nthe new standard of care.",
  },
};

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => !["variant"].includes(prop.toString()),
})<{ variant: (typeof variantArray)[number] }>(({ theme, variant }) => ({
  ...theme.typography[variant],
  whiteSpace: "pre-line",
}));

const StyledTemplate: StoryFn<typeof StyledBox> = (args) => {
  /**
const StyledBox = styled(Box)(({ theme }) => ({
  ...theme.typography.body1_16_regular,
  whiteSpace: "pre-line",
}));
  */
  const { variant, children } = args;
  return <StyledBox variant={variant}>{children}</StyledBox>;
};

export const Styled = {
  render: StyledTemplate,

  args: {
    variant: "body1_16_regular",
    children:
      "AI will be the new standard of care. 123456789\nBy Lunit. With AI, we aim to make data-driven medicine\nthe new standard of care.",
  },

  parameters: {
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
  },
};
