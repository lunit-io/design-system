import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXR2DarkLogo from "@/foundation/Logo/LunitCXR2Dark";

export default {
  title: "Components/Logo",
  component: LunitCXR2DarkLogo,
} as ComponentMeta<typeof LunitCXR2DarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitCXR2DarkLogo> = (args) => (
  <LunitCXR2DarkLogo style={darkStyle} {...args} />
);

export const LunitCXR2Dark = Template.bind({});
