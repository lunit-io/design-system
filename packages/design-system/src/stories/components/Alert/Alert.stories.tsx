import React from "react";
import { Box, Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "@/components/Alert";
import Button from "@/components/Button";
import theme from "@/theme";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    title: {
      control: "text",
      description: "Used to represent the title of the alert. Optional",
    },
    width: {
      control: {
        type: "number",
        min: 374,
      },
      description: `min size is 374px (text area 260px)
      \nIf the Alert is in the Snackbar, the max size is 512px (text area 400px)`,
    },
    severity: {
      control: "radio",
      defaultValue: "success",
      table: {
        defaultValue: { summary: "success" },
      },
      options: ["success", "info", "warning", "error", undefined],
      description: `\`success\`, \`info\`, \`warning\`, \`error\`, \`undefined\``,
    },
  },
  parameters: {
    controls: {
      include: ["title", "width", "isSnackbar", "severity"],
    },
    docs: {
      description: {
        component: `An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
        see [Material-UI Alert](https://mui.com/components/alert/)`,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "3em",
          gap: "1em",
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <>
    <Alert
      title="Alert title"
      width={args.width}
      isSnackbar={true}
      severity={args.severity}
      children={
        <Typography variant="body2_14_regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut{" "}
          <u style={{ color: theme.palette.token.core.link_primary }}>
            labore et dolore
          </u>{" "}
          magna aliqua. A diam sollicitudin tempor id eu nisl nunc mi. Auctor
          augue mauris augue neque gravida in fermentum.
        </Typography>
      }
      bottomAction={
        <>
          <Button color="primary" kind="contained">
            Button
          </Button>
          <Button color="secondary" kind="ghost">
            Button
          </Button>
        </>
      }
      onClose={() => {}}
    />
    <Alert
      title={args.title}
      width={args.width}
      severity={args.severity}
      children={
        <Typography variant="body2_14_regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut{" "}
          <u style={{ color: theme.palette.token.core.link_primary }}>
            labore et dolore
          </u>{" "}
          magna aliqua. A diam sollicitudin tempor id eu nisl nunc mi. Auctor
          augue mauris augue neque gravida in fermentum.
        </Typography>
      }
      bottomAction={
        <>
          <Button color="primary" kind="contained">
            Button
          </Button>
          <Button color="secondary" kind="ghost">
            Button
          </Button>
        </>
      }
      onClose={() => {}}
    />
    <Alert
      width={args.width}
      title={args.title}
      severity={args.severity}
      children={
        <Typography variant="body2_14_regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut{" "}
          <u style={{ color: theme.palette.token.core.link_primary }}>
            labore et dolore
          </u>{" "}
          magna aliqua. A diam sollicitudin tempor id eu nisl nunc mi. Auctor
          augue mauris augue neque gravida in fermentum.
        </Typography>
      }
      onClose={() => {}}
    />
    <Alert
      width={args.width}
      onClose={() => {}}
      severity={args.severity}
      children={
        <Typography variant="body2_14_regular">
          Lorem ipsum dolor sit amet, consectetur adipiscin
        </Typography>
      }
    />
    <Alert
      width={args.width}
      severity={args.severity}
      children={
        <Typography variant="body2_14_regular">
          Lorem ipsum dolor sit amet, consectetur adipiscin
        </Typography>
      }
    />
  </>
);

export const LunitAlert = Template.bind({});
LunitAlert.args = {
  width: 620,
  title: "Alert title",
  severity: "success",
};
