import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitDBTDarkLogo from "@/foundation/Logo/LunitDBTDark";

export default {
  title: "Components/Logo",
  component: LunitDBTDarkLogo,
} as ComponentMeta<typeof LunitDBTDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitDBTDarkLogo> = (args) => (
  <LunitDBTDarkLogo style={darkStyle} {...args} />
);

export const LunitDBTDark = Template.bind({});
