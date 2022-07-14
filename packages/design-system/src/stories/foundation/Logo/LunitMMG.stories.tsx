import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitMMGLogo from "@/foundation/Logo/LunitMMG";

export default {
  title: "Components/Logo",
  component: LunitMMGLogo,
} as ComponentMeta<typeof LunitMMGLogo>;


const Template: ComponentStory<typeof LunitMMGLogo> = (args) => (
  <LunitMMGLogo  {...args} />
);

export const LunitMMG = Template.bind({});
