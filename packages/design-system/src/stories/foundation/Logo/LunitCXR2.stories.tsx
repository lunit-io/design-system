import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXR2Logo from "@/foundation/Logo/LunitCXR2";

export default {
  title: "Components/Logo",
  component: LunitCXR2Logo,
} as ComponentMeta<typeof LunitCXR2Logo>;


const Template: ComponentStory<typeof LunitCXR2Logo> = (args) => (
  <LunitCXR2Logo  {...args} />
);

export const LunitCXR2 = Template.bind({});
