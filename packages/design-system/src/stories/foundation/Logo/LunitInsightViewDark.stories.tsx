import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitInsightViewDarkLogo from "@/foundation/Logo/LunitInsightViewDark";

export default {
  title: "Components/Logo",
  component: LunitInsightViewDarkLogo,
} as ComponentMeta<typeof LunitInsightViewDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitInsightViewDarkLogo> = (args) => (
  <LunitInsightViewDarkLogo style={darkStyle} {...args} />
);

export const LunitInsightViewDark = Template.bind({});
