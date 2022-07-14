import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXRTriageLogo from "@/foundation/Logo/LunitCXRTriage";

export default {
  title: "Components/Logo",
  component: LunitCXRTriageLogo,
} as ComponentMeta<typeof LunitCXRTriageLogo>;


const Template: ComponentStory<typeof LunitCXRTriageLogo> = (args) => (
  <LunitCXRTriageLogo  {...args} />
);

export const LunitCXRTriage = Template.bind({});
