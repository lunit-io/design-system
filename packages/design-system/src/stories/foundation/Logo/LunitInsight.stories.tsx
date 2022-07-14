import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitInsightLogo from "@/foundation/Logo/LunitInsight";

export default {
  title: "Components/Logo",
  component: LunitInsightLogo,
} as ComponentMeta<typeof LunitInsightLogo>;


const Template: ComponentStory<typeof LunitInsightLogo> = (args) => (
  <LunitInsightLogo  {...args} />
);

export const LunitInsight = Template.bind({});
