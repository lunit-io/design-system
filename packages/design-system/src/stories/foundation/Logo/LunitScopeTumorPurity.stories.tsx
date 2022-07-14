import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopeTumorPurityLogo from "@/foundation/Logo/LunitScopeTumorPurity";

export default {
  title: "Components/Logo",
  component: LunitScopeTumorPurityLogo,
} as ComponentMeta<typeof LunitScopeTumorPurityLogo>;


const Template: ComponentStory<typeof LunitScopeTumorPurityLogo> = (args) => (
  <LunitScopeTumorPurityLogo  {...args} />
);

export const LunitScopeTumorPurity = Template.bind({});
