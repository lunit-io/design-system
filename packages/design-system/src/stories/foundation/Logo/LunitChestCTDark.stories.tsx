import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitChestCTDarkLogo from "@/foundation/Logo/LunitChestCTDark";

export default {
  title: "Components/Logo",
  component: LunitChestCTDarkLogo,
} as ComponentMeta<typeof LunitChestCTDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitChestCTDarkLogo> = (args) => (
  <LunitChestCTDarkLogo style={darkStyle} {...args} />
);

export const LunitChestCTDark = Template.bind({});
