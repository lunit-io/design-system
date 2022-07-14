import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitDBTBasicLogo from "@/foundation/Logo/LunitDBTBasic";

export default {
  title: "Components/Logo",
  component: LunitDBTBasicLogo,
} as ComponentMeta<typeof LunitDBTBasicLogo>;


const Template: ComponentStory<typeof LunitDBTBasicLogo> = (args) => (
  <LunitDBTBasicLogo  {...args} />
);

export const LunitDBTBasic = Template.bind({});
