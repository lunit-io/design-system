import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXR1DarkLogo from "@/foundation/Logo/LunitCXR1Dark";

export default {
  title: "Components/Logo",
  component: LunitCXR1DarkLogo,
} as ComponentMeta<typeof LunitCXR1DarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitCXR1DarkLogo> = (args) => (
  <LunitCXR1DarkLogo style={darkStyle} {...args} />
);

export const LunitCXR1Dark = Template.bind({});
