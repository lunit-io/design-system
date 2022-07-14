import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXRMcaDarkLogo from "@/foundation/Logo/LunitCXRMcaDark";

export default {
  title: "Components/Logo",
  component: LunitCXRMcaDarkLogo,
} as ComponentMeta<typeof LunitCXRMcaDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitCXRMcaDarkLogo> = (args) => (
  <LunitCXRMcaDarkLogo style={darkStyle} {...args} />
);

export const LunitCXRMcaDark = Template.bind({});
