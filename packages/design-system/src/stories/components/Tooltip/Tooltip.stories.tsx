import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Tooltip from "@/components/Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = () => <Tooltip />;

export const LunitChip = {
  render: Template,
};
