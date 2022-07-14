import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXRExportOnlyDarkLogo from "@/foundation/Logo/LunitCXRExportOnlyDark";

export default {
  title: "Components/Logo",
  component: LunitCXRExportOnlyDarkLogo,
} as ComponentMeta<typeof LunitCXRExportOnlyDarkLogo>;

const darkStyle = { backgroundColor: "#000" };

const Template: ComponentStory<typeof LunitCXRExportOnlyDarkLogo> = (args) => (
  <LunitCXRExportOnlyDarkLogo style={darkStyle} {...args} />
);

export const LunitCXRExportOnlyDark = Template.bind({});
