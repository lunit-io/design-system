import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitMMGDarkLogo from "@/foundation/Logo/LunitMMGDark";

export default {
  title: "Components/Logo",
  component: LunitMMGDarkLogo,
} as ComponentMeta<typeof LunitMMGDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitMMGDarkLogo> = (args) => (
  <LunitMMGDarkLogo style={darkStyle} {...args} />
);

export const LunitMMGDark = Template.bind({});
