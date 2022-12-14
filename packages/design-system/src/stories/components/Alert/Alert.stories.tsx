import React from "react";
import { Box, Typography } from "@mui/material";
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
      <Box className="base10" sx={{ margin: "3em" }}>
        {Story()}
      </Box>
    ),
  ],
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const LunitAlert = Template.bind({});
LunitAlert.args = {
  severity: "success",
  title: "This is Title",
};
