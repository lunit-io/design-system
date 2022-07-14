import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXRTriageDarkLogo from "@/foundation/Logo/LunitCXRTriageDark";

export default {
  title: "Components/Logo",
  component: LunitCXRTriageDarkLogo,
} as ComponentMeta<typeof LunitCXRTriageDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitCXRTriageDarkLogo> = (args) => (
  <LunitCXRTriageDarkLogo style={darkStyle} {...args} />
);

export const LunitCXRTriageDark = Template.bind({});
