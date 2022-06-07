import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "@/components/Chips/Chip";

export default {
  title: "Components/Chips",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = () => <Chip />;

export const LunitChip = Template.bind({});
