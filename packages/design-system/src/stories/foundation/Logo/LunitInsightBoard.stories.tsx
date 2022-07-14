import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitInsightBoardLogo from "@/foundation/Logo/LunitInsightBoard";

export default {
  title: "Components/Logo",
  component: LunitInsightBoardLogo,
} as ComponentMeta<typeof LunitInsightBoardLogo>;


const Template: ComponentStory<typeof LunitInsightBoardLogo> = (args) => (
  <LunitInsightBoardLogo  {...args} />
);

export const LunitInsightBoard = Template.bind({});
