import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Modal from "@/components/Modal";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta<typeof Modal>;

export const LunitModal = {
  render: () => <Modal />,
};
