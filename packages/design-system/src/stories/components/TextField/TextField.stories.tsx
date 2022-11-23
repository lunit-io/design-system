import React from "react";
import { Box } from "@mui/material";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

import TextField from "@/components/TextField/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  decorators: [
    (Story) => (
      <Box className="base00" sx={{ margin: "3em" }}>
        {Story()}
      </Box>
    ),
  ],
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = () => <TextField />;

export const LunitTextField = Template.bind({});
