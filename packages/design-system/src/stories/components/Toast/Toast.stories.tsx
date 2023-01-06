import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toast from "@/components/Toast/Toast";
import { Box, Button, Snackbar } from "@mui/material";

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
    },
  },
  parameters: {
    controls: { include: ["severity", "actionButtonText", "actionButtonHandler"] },
    docs: {
      description: {
        component: `Toast provide brief notifications. But have to use with \`Snackbar\` component.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <Box
          className="base10"
          bgcolor={"lunit.grey.00.main"}
          sx={{
            padding: "3em",
          }}
        >
          {Story()}
        </Box>
        <Box
          className="base90"
          bgcolor={"lunit.grey.90.main"}
          sx={{
            padding: "3em",
          }}
        >
          {Story()}
        </Box>
      </Box>
    ),
  ],
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args}>Test</Toast>;
const Template2: ComponentStory<typeof Toast> = () => (
    <Box sx={{ display: "grid", gap: "10px"}}>
      <Toast actionButtonText="Text" actionButtonHandler={() => {}}>Lorem ipsum dolor sit amet, consectetur.</Toast>
      <Toast severity="success" actionButtonText="Text" actionButtonHandler={() => {}}>Lorem ipsum dolor sit amet, consectetur.</Toast>
      <Toast severity="info" actionButtonText="Text" actionButtonHandler={() => {}}>Lorem ipsum dolor sit amet, consectetur.</Toast>
      <Toast severity="warning" actionButtonText="Text" actionButtonHandler={() => {}}>Lorem ipsum dolor sit amet, consectetur.</Toast>
      <Toast severity="error" actionButtonText="Text" actionButtonHandler={() => {}}>Lorem ipsum dolor sit amet, consectetur.</Toast>
    </Box>
  )
  const Template3: ComponentStory<typeof Toast> = () => (
    <Box sx={{ display: "grid", gap: "10px"}}>
      <Toast actionButtonText="Text" actionButtonHandler={() => {}} sx={{ width: "340px" }}>Lorem ipsum dol</Toast>
      <Toast actionButtonText="Text" actionButtonHandler={() => {}} sx={{ width: "339px", height: "112px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue lorem in dictum vitae ut massa.
      </Toast>
      <Toast actionButtonText="Text" actionButtonHandler={() => {}} sx={{ width: "559px", height: "72px" }} >
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
