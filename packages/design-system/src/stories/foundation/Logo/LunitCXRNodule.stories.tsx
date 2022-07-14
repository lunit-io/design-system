import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXRNoduleLogo from "@/foundation/Logo/LunitCXRNodule";

export default {
  title: "Components/Logo",
  component: LunitCXRNoduleLogo,
} as ComponentMeta<typeof LunitCXRNoduleLogo>;


const Template: ComponentStory<typeof LunitCXRNoduleLogo> = (args) => (
  <LunitCXRNoduleLogo  {...args} />
);

export const LunitCXRNodule = Template.bind({});
