import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "@/components/Chip/Chip";

export default {
  title: "Components/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = () => <Chip />;

export const LunitChip = Template.bind({});
