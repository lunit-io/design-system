import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXRLogo from "@/foundation/Logo/LunitCXR";

export default {
  title: "Components/Logo",
  component: LunitCXRLogo,
} as ComponentMeta<typeof LunitCXRLogo>;


const Template: ComponentStory<typeof LunitCXRLogo> = (args) => (
  <LunitCXRLogo  {...args} />
);

export const LunitCXR = Template.bind({});
