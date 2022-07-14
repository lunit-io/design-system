import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitCXR3Logo from "@/foundation/Logo/LunitCXR3";

export default {
  title: "Components/Logo",
  component: LunitCXR3Logo,
} as ComponentMeta<typeof LunitCXR3Logo>;


const Template: ComponentStory<typeof LunitCXR3Logo> = (args) => (
  <LunitCXR3Logo  {...args} />
);

export const LunitCXR3 = Template.bind({});
