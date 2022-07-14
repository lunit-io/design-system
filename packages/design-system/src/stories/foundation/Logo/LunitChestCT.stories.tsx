import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitChestCTLogo from "@/foundation/Logo/LunitChestCT";

export default {
  title: "Components/Logo",
  component: LunitChestCTLogo,
} as ComponentMeta<typeof LunitChestCTLogo>;


const Template: ComponentStory<typeof LunitChestCTLogo> = (args) => (
  <LunitChestCTLogo  {...args} />
);

export const LunitChestCT = Template.bind({});
