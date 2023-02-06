import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextField from "@/components/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = () => <TextField />;

export const LunitTextField = Template.bind({});
