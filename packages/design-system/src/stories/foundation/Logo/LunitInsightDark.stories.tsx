import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitInsightDarkLogo from "@/foundation/Logo/LunitInsightDark";

export default {
  title: "Components/Logo",
  component: LunitInsightDarkLogo,
} as ComponentMeta<typeof LunitInsightDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitInsightDarkLogo> = (args) => (
  <LunitInsightDarkLogo style={darkStyle} {...args} />
);

export const LunitInsightDark = Template.bind({});
