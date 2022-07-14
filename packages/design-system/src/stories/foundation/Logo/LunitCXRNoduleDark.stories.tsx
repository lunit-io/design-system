import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXRNoduleDarkLogo from "@/foundation/Logo/LunitCXRNoduleDark";

export default {
  title: "Components/Logo",
  component: LunitCXRNoduleDarkLogo,
} as ComponentMeta<typeof LunitCXRNoduleDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitCXRNoduleDarkLogo> = (args) => (
  <LunitCXRNoduleDarkLogo style={darkStyle} {...args} />
);

export const LunitCXRNoduleDark = Template.bind({});
