import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "@/components/Chip/Chip";
import type { ChipProps } from "@/components/Chip/Chip.types";

export default {
  title: "Components/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args: ChipProps) => (
  <Chip {...args} />
);

export const LunitChip = Template.bind({});
