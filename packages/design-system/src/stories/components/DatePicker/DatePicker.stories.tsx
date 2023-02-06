import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DatePicker from "@/components/DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = () => <DatePicker />;

export const LunitDatePicker = Template.bind({});
