import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXR3DarkLogo from "@/foundation/Logo/LunitCXR3Dark";

export default {
  title: "Components/Logo",
  component: LunitCXR3DarkLogo,
} as ComponentMeta<typeof LunitCXR3DarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitCXR3DarkLogo> = (args) => (
  <LunitCXR3DarkLogo style={darkStyle} {...args} />
);

export const LunitCXR3Dark = Template.bind({});
