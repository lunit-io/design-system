import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopeDarkLogo from "@/foundation/Logo/LunitScopeDark";

export default {
  title: "Components/Logo",
  component: LunitScopeDarkLogo,
} as ComponentMeta<typeof LunitScopeDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitScopeDarkLogo> = (args) => (
  <LunitScopeDarkLogo style={darkStyle} {...args} />
);

export const LunitScopeDark = Template.bind({});
