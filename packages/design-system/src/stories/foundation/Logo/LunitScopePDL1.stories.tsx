import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopePDL1Logo from "@/foundation/Logo/LunitScopePDL1";

export default {
  title: "Components/Logo",
  component: LunitScopePDL1Logo,
} as ComponentMeta<typeof LunitScopePDL1Logo>;


const Template: ComponentStory<typeof LunitScopePDL1Logo> = (args) => (
  <LunitScopePDL1Logo  {...args} />
);

export const LunitScopePDL1 = Template.bind({});
