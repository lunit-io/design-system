import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Modal from "@/components/Modal";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = () => <Modal />;

export const LunitModal = {
  render: Template,
};
