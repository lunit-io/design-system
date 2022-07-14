import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopeHer2Logo from "@/foundation/Logo/LunitScopeHer2";

export default {
  title: "Components/Logo",
  component: LunitScopeHer2Logo,
} as ComponentMeta<typeof LunitScopeHer2Logo>;


const Template: ComponentStory<typeof LunitScopeHer2Logo> = (args) => (
  <LunitScopeHer2Logo  {...args} />
);

export const LunitScopeHer2 = Template.bind({});
