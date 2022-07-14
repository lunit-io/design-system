import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitChestCTBasicLogo from "@/foundation/Logo/LunitChestCTBasic";

export default {
  title: "Components/Logo",
  component: LunitChestCTBasicLogo,
} as ComponentMeta<typeof LunitChestCTBasicLogo>;


const Template: ComponentStory<typeof LunitChestCTBasicLogo> = (args) => (
  <LunitChestCTBasicLogo  {...args} />
);

export const LunitChestCTBasic = Template.bind({});
