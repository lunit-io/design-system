import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import TextField from "@/components/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
} as Meta<typeof TextField>;

export const LunitTextField = {
  render: () => <TextField />,
};
