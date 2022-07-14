import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitRLogo from "@/foundation/Logo/LunitR";

export default {
  title: "Components/Logo",
  component: LunitRLogo,
} as ComponentMeta<typeof LunitRLogo>;


const Template: ComponentStory<typeof LunitRLogo> = (args) => (
  <LunitRLogo  {...args} />
);

export const LunitR = Template.bind({});
