import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitRDarkLogo from "@/foundation/Logo/LunitRDark";

export default {
  title: "Components/Logo",
  component: LunitRDarkLogo,
} as ComponentMeta<typeof LunitRDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitRDarkLogo> = (args) => (
  <LunitRDarkLogo style={darkStyle} {...args} />
);

export const LunitRDark = Template.bind({});
