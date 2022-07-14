import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopeTumorPurityDarkLogo from "@/foundation/Logo/LunitScopeTumorPurityDark";

export default {
  title: "Components/Logo",
  component: LunitScopeTumorPurityDarkLogo,
} as ComponentMeta<typeof LunitScopeTumorPurityDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitScopeTumorPurityDarkLogo> = (args) => (
  <LunitScopeTumorPurityDarkLogo style={darkStyle} {...args} />
);

export const LunitScopeTumorPurityDark = Template.bind({});
