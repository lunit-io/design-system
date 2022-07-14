import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitInsightViewLogo from "@/foundation/Logo/LunitInsightView";

export default {
  title: "Components/Logo",
  component: LunitInsightViewLogo,
} as ComponentMeta<typeof LunitInsightViewLogo>;


const Template: ComponentStory<typeof LunitInsightViewLogo> = (args) => (
  <LunitInsightViewLogo  {...args} />
);

export const LunitInsightView = Template.bind({});
