import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "@/components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => <Dropdown />;

export const SingleSelect = Template.bind({});
export const MultiSelect = Template.bind({});
export const NoSelect = Template.bind({});
