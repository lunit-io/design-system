import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Elevation from "@/components/Elevation/Elevation";

export default {
  title: "Components/Elevation",
  component: Elevation,
} as ComponentMeta<typeof Elevation>;

const Template: ComponentStory<typeof Elevation> = () => <Elevation />;

export const Elevation1 = Template.bind({});