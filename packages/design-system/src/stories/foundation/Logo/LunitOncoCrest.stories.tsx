import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitOncoCrestLogo from "@/foundation/Logo/LunitOncoCrest";

export default {
  title: "Components/Logo",
  component: LunitOncoCrestLogo,
} as ComponentMeta<typeof LunitOncoCrestLogo>;


const Template: ComponentStory<typeof LunitOncoCrestLogo> = (args) => (
  <LunitOncoCrestLogo  {...args} />
);

export const LunitOncoCrest = Template.bind({});
