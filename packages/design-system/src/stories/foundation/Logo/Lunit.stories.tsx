import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitR from "@/foundation/Logo/LunitR";

export default {
  title: "Components/Logo",
  component: LunitR,
} as ComponentMeta<typeof LunitR>;

const Template: ComponentStory<typeof LunitR> = (args) => <LunitR {...args} />;

export const LunitLogo = Template.bind({});
