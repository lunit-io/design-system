import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopeHer2DarkLogo from "@/foundation/Logo/LunitScopeHer2Dark";

export default {
  title: "Components/Logo",
  component: LunitScopeHer2DarkLogo,
} as ComponentMeta<typeof LunitScopeHer2DarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitScopeHer2DarkLogo> = (args) => (
  <LunitScopeHer2DarkLogo style={darkStyle} {...args} />
);

export const LunitScopeHer2Dark = Template.bind({});
