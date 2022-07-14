import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXRExportOnlyLogo from "@/foundation/Logo/LunitCXRExportOnly";

export default {
  title: "Components/Logo",
  component: LunitCXRExportOnlyLogo,
} as ComponentMeta<typeof LunitCXRExportOnlyLogo>;


const Template: ComponentStory<typeof LunitCXRExportOnlyLogo> = (args) => (
  <LunitCXRExportOnlyLogo  {...args} />
);

export const LunitCXRExportOnly = Template.bind({});
