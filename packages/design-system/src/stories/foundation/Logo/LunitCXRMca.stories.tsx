import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXRMcaLogo from "@/foundation/Logo/LunitCXRMca";

export default {
  title: "Components/Logo",
  component: LunitCXRMcaLogo,
} as ComponentMeta<typeof LunitCXRMcaLogo>;


const Template: ComponentStory<typeof LunitCXRMcaLogo> = (args) => (
  <LunitCXRMcaLogo  {...args} />
);

export const LunitCXRMca = Template.bind({});
