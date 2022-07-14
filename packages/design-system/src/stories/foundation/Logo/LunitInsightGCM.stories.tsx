import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitInsightGCMLogo from "@/foundation/Logo/LunitInsightGCM";

export default {
  title: "Components/Logo",
  component: LunitInsightGCMLogo,
} as ComponentMeta<typeof LunitInsightGCMLogo>;


const Template: ComponentStory<typeof LunitInsightGCMLogo> = (args) => (
  <LunitInsightGCMLogo  {...args} />
);

export const LunitInsightGCM = Template.bind({});
