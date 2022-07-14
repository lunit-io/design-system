import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXRDarkLogo from "@/foundation/Logo/LunitCXRDark";

export default {
  title: "Components/Logo",
  component: LunitCXRDarkLogo,
} as ComponentMeta<typeof LunitCXRDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitCXRDarkLogo> = (args) => (
  <LunitCXRDarkLogo style={darkStyle} {...args} />
);

export const LunitCXRDark = Template.bind({});
