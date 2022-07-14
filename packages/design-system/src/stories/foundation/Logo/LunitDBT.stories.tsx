import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitDBTLogo from "@/foundation/Logo/LunitDBT";

export default {
  title: "Components/Logo",
  component: LunitDBTLogo,
} as ComponentMeta<typeof LunitDBTLogo>;


const Template: ComponentStory<typeof LunitDBTLogo> = (args) => (
  <LunitDBTLogo  {...args} />
);

export const LunitDBT = Template.bind({});
