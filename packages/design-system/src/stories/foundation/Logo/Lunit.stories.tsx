import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitLogo from "@/foundation/Logo/Lunit";

export default {
  title: "Components/Logo",
  component: LunitLogo,
} as ComponentMeta<typeof LunitLogo>;


const Template: ComponentStory<typeof LunitLogo> = (args) => (
  <LunitLogo  {...args} />
);

export const Lunit = Template.bind({});
