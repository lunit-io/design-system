import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitOncoCrestDarkLogo from "@/foundation/Logo/LunitOncoCrestDark";

export default {
  title: "Components/Logo",
  component: LunitOncoCrestDarkLogo,
} as ComponentMeta<typeof LunitOncoCrestDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitOncoCrestDarkLogo> = (args) => (
  <LunitOncoCrestDarkLogo style={darkStyle} {...args} />
);

export const LunitOncoCrestDark = Template.bind({});
