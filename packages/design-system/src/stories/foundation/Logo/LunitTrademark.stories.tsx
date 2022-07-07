import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitTrademark from "@/foundation/Logo/LunitTrademark";

export default {
  title: "Components/Logo",
  component: LunitTrademark,
} as ComponentMeta<typeof LunitTrademark>;

const Template: ComponentStory<typeof LunitTrademark> = (args) => (
  <LunitTrademark {...args} />
);

export const LunitTrademarkLogo = Template.bind({});
