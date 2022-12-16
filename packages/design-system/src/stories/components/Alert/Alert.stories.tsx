import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "@/components/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    severity: {
      control: "radio",
      options: ["success", "info", "warning", "error"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Chips are compact elements that represent an input, attribute, or action.
        see [Material-UI Chip](https://mui.com/components/chips/)`,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <Box
          className="base10"
          bgcolor={"lunit.grey.00.main"}
          sx={{
            padding: "3em",
          }}
        >
          {Story()}
        </Box>
        <Box
          className="base90"
          bgcolor={"lunit.grey.90.main"}
          sx={{
            padding: "3em",
          }}
        >
          {Story()}
        </Box>
      </Box>
    ),
  ],
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const LunitAlert = Template.bind({});
LunitAlert.args = {
  severity: "success",
  title: "Danger alert title",
  children: (
    <Typography sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "20px" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut <u>labore et dolore</u> magna aliqua. A diam
      sollicitudin tempor id eu nisl nunc mi. Auctor augue mauris augue neque
      gravida in fermentum.
    </Typography>
  ),
  bottomAction: (
    <>
      <Button variant="contained">Primary</Button>
      <Button variant="text">grey Ghost</Button>
    </>
  ),
};
