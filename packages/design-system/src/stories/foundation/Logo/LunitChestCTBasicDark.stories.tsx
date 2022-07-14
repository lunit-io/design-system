import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitChestCTBasicDarkLogo from "@/foundation/Logo/LunitChestCTBasicDark";

export default {
  title: "Components/Logo",
  component: LunitChestCTBasicDarkLogo,
} as ComponentMeta<typeof LunitChestCTBasicDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitChestCTBasicDarkLogo> = (args) => (
  <LunitChestCTBasicDarkLogo style={darkStyle} {...args} />
);

export const LunitChestCTBasicDark = Template.bind({});
