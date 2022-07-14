import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitInsightLogViewerLogo from "@/foundation/Logo/LunitInsightLogViewer";

export default {
  title: "Components/Logo",
  component: LunitInsightLogViewerLogo,
} as ComponentMeta<typeof LunitInsightLogViewerLogo>;


const Template: ComponentStory<typeof LunitInsightLogViewerLogo> = (args) => (
  <LunitInsightLogViewerLogo  {...args} />
);

export const LunitInsightLogViewer = Template.bind({});
