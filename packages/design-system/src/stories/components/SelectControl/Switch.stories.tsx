import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Switch from "@/components/SelectControl/Switch";

export default {
  title: "Components/Select control",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = () => <Switch />;

export const LunitSwitch = Template.bind({});
