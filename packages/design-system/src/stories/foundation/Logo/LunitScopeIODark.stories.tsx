import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopeIODarkLogo from "@/foundation/Logo/LunitScopeIODark";

export default {
  title: "Components/Logo",
  component: LunitScopeIODarkLogo,
} as ComponentMeta<typeof LunitScopeIODarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitScopeIODarkLogo> = (args) => (
  <LunitScopeIODarkLogo style={darkStyle} {...args} />
);

export const LunitScopeIODark = Template.bind({});
