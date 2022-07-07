import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Lunit from "@/foundation/Logo/Lunit";

export default {
  title: "Components/Logo",
  component: Lunit,
} as ComponentMeta<typeof Lunit>;

const Template: ComponentStory<typeof Lunit> = (args) => <Lunit {...args} />;

export const LunitLogo = Template.bind({});
