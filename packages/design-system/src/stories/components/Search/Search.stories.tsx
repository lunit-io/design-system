import React from "react";
import { Box } from "@mui/material";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Search } from "@/components/Search";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: {
    multiline: {
      type: "boolean",
      defauleValue: false,
    },
    rows: {
      type: "number",
      defaultValue: 1,
    },
    error: {
      type: "boolean",
      defaultValue: false,
    },
    placeholder: {
      type: "string",
      defaultValue: "Please typing...",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
  decorators: [
    (Story) => (
      <Box className="base00" sx={{ margin: "3em" }}>
        {Story()}
      </Box>
    ),
  ],
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const LunitSearch = Template.bind({});
