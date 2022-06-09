import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "@/components/Alert/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = () => <Alert />;

export const LunitAlert = Template.bind({});
