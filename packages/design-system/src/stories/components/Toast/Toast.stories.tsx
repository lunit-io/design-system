import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/material";

import Toast from "@/components/Toast/Toast";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    severity: {
      control: "radio",
      options: ["success", "info", "warning", "error", undefined],
      description: `\`success\`, \`info\`, \`warning\`, \`error\`, \`undefined\``,
    },
    actionButtonText: {
      control: "text",
      defaultValue: "text",
    },
    actionButtonHandler: {
      control: {
        type: "select",
      },
      defaultValue: "function",
      options: ["function", undefined],
      mapping: {
        function: action("actionButton"),
        undefined: undefined,
      },
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
    controls: { include: ["severity", "actionButtonText", "actionButtonHandler", "onClose"] },
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

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args}>Test</Toast>;
const Template2: ComponentStory<typeof Toast> = () => (
    <Box sx={{ display: "grid", gap: "10px"}}>
      <Toast actionButtonText="Text" actionButtonHandler={() => {}} onClose={() => {}}>Lorem ipsum dolor sit amet, consectetur.</Toast>
      <Toast severity="success" actionButtonText="Text" actionButtonHandler={() => {}} onClose={() => {}}>Lorem ipsum dolor sit amet, consectetur.</Toast>
      <Toast severity="info" actionButtonText="Text" actionButtonHandler={() => {}} onClose={() => {}}>Lorem ipsum dolor sit amet, consectetur.</Toast>
      <Toast severity="warning" actionButtonText="Text" actionButtonHandler={() => {}} onClose={() => {}}>Lorem ipsum dolor sit amet, consectetur.</Toast>
      <Toast severity="error" actionButtonText="Text" actionButtonHandler={() => {}} onClose={() => {}}>Lorem ipsum dolor sit amet, consectetur.</Toast>
    </Box>
  )
  const Template3: ComponentStory<typeof Toast> = () => (
    <Box sx={{ display: "grid", gap: "10px"}}>
      <Toast actionButtonText="Text" onClose={() => {}} actionButtonHandler={() => {}} sx={{ width: "340px" }}>Lorem ipsum dol</Toast>
      <Toast actionButtonText="Text" onClose={() => {}} actionButtonHandler={() => {}} sx={{ width: "476px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue lorem in dictum vitae ut massa.
      </Toast>
      <Toast actionButtonText="Text" onClose={() => {}} actionButtonHandler={() => {}} sx={{ width: "559px", height: "72px" }} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue lorem in dictum vitae ut massa.
      </Toast>
      <Toast sx={{width: "401px", height: "72px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue lorem in dictum vitae ut massa.</Toast>
      <Toast severity="error" sx={{width: "320px", height: "72px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue lor
      </Toast>
    </Box>
  )


export const ToastBase = Template.bind({});
export const ToastWithText= Template2.bind({});
export const ToastVariant = Template3.bind({});
