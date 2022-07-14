import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopeIOLogo from "@/foundation/Logo/LunitScopeIO";

export default {
  title: "Components/Logo",
  component: LunitScopeIOLogo,
} as ComponentMeta<typeof LunitScopeIOLogo>;


const Template: ComponentStory<typeof LunitScopeIOLogo> = (args) => (
  <LunitScopeIOLogo  {...args} />
);

export const LunitScopeIO = Template.bind({});
