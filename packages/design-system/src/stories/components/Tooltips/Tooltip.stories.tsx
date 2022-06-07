import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "@/components/Tooltips/Tooltip";

export default {
  title: "Components/Tooltips",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = () => <Tooltip />;

export const LunitChip = Template.bind({});
