import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "@/components/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    title: {
      control: "text",
    },
    width: {
      control: {
        type: "number",
        min: 374,
      },
    },
    isSnackbar: {
      control: "boolean",
    },
    elevation: {
      table: {
        disable: true,
      },
    },
    square: {
      table: {
        disable: true,
      },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
        see [Material-UI Alert](https://mui.com/components/alert/)`,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "3em",
          gap: "1em",
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <>
    <Alert severity={"error"} {...args} />
    <Alert severity={"success"} {...args} />
    <Alert severity={"info"} {...args} />
    <Alert severity={"warning"} {...args} />
  </>
);

export const LunitAlert = Template.bind({});
LunitAlert.args = {
  width: 620,
  title: "Danger alert title",
  children: (
    <Typography variant="body2_14_regular">
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
