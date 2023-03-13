import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import DatePicker from "@/components/DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta<typeof DatePicker>;

export const LunitDatePicker = {
  render: () => <DatePicker />,
};
