import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Alert from "@/components/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta<typeof Alert>;

export const LunitAlert = {
  render: () => <Alert />,
};
