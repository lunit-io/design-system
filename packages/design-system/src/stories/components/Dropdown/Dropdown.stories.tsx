import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Dropdown from "@/components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = () => <Dropdown />;

export const SingleSelect = {
  render: Template,
};
export const MultiSelect = {
  render: Template,
};
export const NoSelect = {
  render: Template,
};
