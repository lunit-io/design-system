import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LunitScopeAnnotationLogo from "@/foundation/Logo/LunitScopeAnnotation";

export default {
  title: "Components/Logo",
  component: LunitScopeAnnotationLogo,
} as ComponentMeta<typeof LunitScopeAnnotationLogo>;


const Template: ComponentStory<typeof LunitScopeAnnotationLogo> = (args) => (
  <LunitScopeAnnotationLogo  {...args} />
);

export const LunitScopeAnnotation = Template.bind({});
