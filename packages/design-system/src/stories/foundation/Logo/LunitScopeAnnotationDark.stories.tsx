import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopeAnnotationDarkLogo from "@/foundation/Logo/LunitScopeAnnotationDark";

export default {
  title: "Components/Logo",
  component: LunitScopeAnnotationDarkLogo,
} as ComponentMeta<typeof LunitScopeAnnotationDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitScopeAnnotationDarkLogo> = (args) => (
  <LunitScopeAnnotationDarkLogo style={darkStyle} {...args} />
);

export const LunitScopeAnnotationDark = Template.bind({});
