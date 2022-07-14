import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitInsightBoardDarkLogo from "@/foundation/Logo/LunitInsightBoardDark";

export default {
  title: "Components/Logo",
  component: LunitInsightBoardDarkLogo,
} as ComponentMeta<typeof LunitInsightBoardDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitInsightBoardDarkLogo> = (args) => (
  <LunitInsightBoardDarkLogo style={darkStyle} {...args} />
);

export const LunitInsightBoardDark = Template.bind({});
