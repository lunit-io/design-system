import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Dropdown from "@/components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

export const SingleSelect = {
  render: () => <Dropdown />,
};

export const MultiSelect = {
  render: () => <Dropdown />,
};

export const NoSelect = {
  render: () => <Dropdown />,
};
