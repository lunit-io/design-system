import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitInsightLogViewerDarkLogo from "@/foundation/Logo/LunitInsightLogViewerDark";

export default {
  title: "Components/Logo",
  component: LunitInsightLogViewerDarkLogo,
} as ComponentMeta<typeof LunitInsightLogViewerDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitInsightLogViewerDarkLogo> = (args) => (
  <LunitInsightLogViewerDarkLogo style={darkStyle} {...args} />
);

export const LunitInsightLogViewerDark = Template.bind({});
