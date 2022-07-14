import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopePDL1DarkLogo from "@/foundation/Logo/LunitScopePDL1Dark";

export default {
  title: "Components/Logo",
  component: LunitScopePDL1DarkLogo,
} as ComponentMeta<typeof LunitScopePDL1DarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitScopePDL1DarkLogo> = (args) => (
  <LunitScopePDL1DarkLogo style={darkStyle} {...args} />
);

export const LunitScopePDL1Dark = Template.bind({});
