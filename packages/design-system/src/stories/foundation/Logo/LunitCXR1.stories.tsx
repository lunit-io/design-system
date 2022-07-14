import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXR1Logo from "@/foundation/Logo/LunitCXR1";

export default {
  title: "Components/Logo",
  component: LunitCXR1Logo,
} as ComponentMeta<typeof LunitCXR1Logo>;


const Template: ComponentStory<typeof LunitCXR1Logo> = (args) => (
  <LunitCXR1Logo  {...args} />
);

export const LunitCXR1 = Template.bind({});
