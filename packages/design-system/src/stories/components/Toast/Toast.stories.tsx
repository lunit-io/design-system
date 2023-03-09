import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/material";

import Toast from "@/components/Toast/Toast";
import { action } from "@storybook/addon-actions";
import Button from "@/components/Button";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    severity: {
      control: "radio",
      options: ["success", "info", "warning", "error", undefined],
      description: `\`success\`, \`info\`, \`warning\`, \`error\`, \`undefined\``,
    },
    action: {
      control: {
        type: "select",
      },
      options: ["Button", undefined],
      mapping: {
        Button: <Button kind="ghost">Button</Button>,
        undefined: undefined,
      },
      default: undefined,
    },
    onClose: {
      control: {
        type: "select",
      },
      defaultValue: "function",
      options: ["function", undefined],
      mapping: {
        function: action("onClose"),
        undefined: undefined,
      },
    },
  },
  parameters: {
    controls: {
      include: ["severity", "action", "onClose"],
    },
    docs: {
      description: {
        component: `Toast provide brief notifications. But have to use with \`Snackbar\` component.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        className="base10"
        bgcolor={"lunit.grey.00.main"}
        sx={{
          padding: 8,
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => (
  <Toast {...args}>Test</Toast>
);
const Template2: ComponentStory<typeof Toast> = () => (
  <Box sx={{ display: "grid", gap: "40px" }}>
    <Toast onClose={() => {}} sx={{ width: "484px" }}>
      Lorem ipsum dolor sit amet, consectetur.
    </Toast>
    <Toast
      severity="error"
      action={
        <Button size="medium" kind="ghost" color="error">
          Button
        </Button>
      }
      onClose={() => {}}
      sx={{
        width: "584px",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur.
    </Toast>
    <Toast
      severity="success"
      action={
        <Button size="medium" kind="ghost">
          Button
        </Button>
      }
      sx={{
        width: "584px",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur.
    </Toast>
    <Toast
      severity="info"
      action={
        <Button size="medium" kind="ghost" color="secondary">
          Button
        </Button>
      }
      onClose={() => {}}
      sx={{
        width: "584px",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur.
    </Toast>
    <Toast
      severity="warning"
      onClose={() => {}}
      sx={{
        width: "516px",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur.
    </Toast>
  </Box>
);

const Template3: ComponentStory<typeof Toast> = () => (
  <Box sx={{ display: "grid", gap: "40px" }}>
    <Toast
      sx={{
        width: "212px",
        "& .Toast-message": {
          width: "180px",
        },
      }}
    >
      Lorem ipsum dol
    </Toast>

    <Toast
      sx={{
        width: "317px",
        "& .Toast-message": {
          width: "165px",
        },
      }}
      onClose={() => {}}
    >
      Lorem ipsum dol
    </Toast>

    <Toast
      onClose={() => {}}
      sx={{
        width: "484px",
      }}
    >
      Lorem ipsum dolor sit amet consectetur. Velit urna donec tortor egestas
      donec laoreet porttitor phasellus imperdiet. Egestas leo pretium tempus
      purus laoreet egestas habitant scelerisque non imperdiet.
    </Toast>
    <Toast
      severity="success"
      sx={{
        width: "464px",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue lorem in
      dictum vitae ut massa.
    </Toast>

    <Toast
      severity="info"
      action={
        <Button
          size="medium"
          kind="ghost"
          color="secondary"
          sx={{ width: "64px" }}
        >
          Button
        </Button>
      }
      sx={{
        width: "548px",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue lorem in
      dictum vitae ut massa.
    </Toast>
    <Toast
      severity="error"
      action={
        <Button size="medium" kind="ghost" color="error" sx={{ width: "64px" }}>
          Button
        </Button>
      }
      onClose={() => {}}
      sx={{
        width: "584px",
      }}
    >
      Lorem ipsum dolor sit amet consectetur. Velit urna donec tortor.
    </Toast>
  </Box>
);

export const ToastBase = Template.bind({});
export const ToastWithText = Template2.bind({});
export const ToastVariant = Template3.bind({});
