import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitInsightGCMDarkLogo from "@/foundation/Logo/LunitInsightGCMDark";

export default {
  title: "Components/Logo",
  component: LunitInsightGCMDarkLogo,
} as ComponentMeta<typeof LunitInsightGCMDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitInsightGCMDarkLogo> = (args) => (
  <LunitInsightGCMDarkLogo style={darkStyle} {...args} />
);

export const LunitInsightGCMDark = Template.bind({});
