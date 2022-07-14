import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopeLogo from "@/foundation/Logo/LunitScope";

export default {
  title: "Components/Logo",
  component: LunitScopeLogo,
} as ComponentMeta<typeof LunitScopeLogo>;


const Template: ComponentStory<typeof LunitScopeLogo> = (args) => (
  <LunitScopeLogo  {...args} />
);

export const LunitScope = Template.bind({});
