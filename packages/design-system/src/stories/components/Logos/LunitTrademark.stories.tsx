import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitTrademark from "@/components/Logos/LunitTrademark";

export default {
  title: "Components/Logos",
  component: LunitTrademark,
} as ComponentMeta<typeof LunitTrademark>;

const Template: ComponentStory<typeof LunitTrademark> = (args) => (
  <LunitTrademark {...args} />
);

export const LunitTrademarkLogo = Template.bind({});
