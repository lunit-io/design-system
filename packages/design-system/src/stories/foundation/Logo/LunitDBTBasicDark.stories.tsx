import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitDBTBasicDarkLogo from "@/foundation/Logo/LunitDBTBasicDark";

export default {
  title: "Components/Logo",
  component: LunitDBTBasicDarkLogo,
} as ComponentMeta<typeof LunitDBTBasicDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitDBTBasicDarkLogo> = (args) => (
  <LunitDBTBasicDarkLogo style={darkStyle} {...args} />
);

export const LunitDBTBasicDark = Template.bind({});
