import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitDarkLogo from "@/foundation/Logo/LunitDark";

export default {
  title: "Components/Logo",
  component: LunitDarkLogo,
} as ComponentMeta<typeof LunitDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitDarkLogo> = (args) => (
  <LunitDarkLogo style={darkStyle} {...args} />
);

export const LunitDark = Template.bind({});
