import React from "react";
import { Box, Typography } from "@mui/material";
import { StoryFn, Meta } from "@storybook/react";

import Alert from "@/components/Alert";
import Button from "@/components/Button";
import theme from "@/theme";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    title: {
      control: "text",
      description: "Used to represent the title of the alert.",
    },
    severity: {
      control: "radio",
      table: {
        defaultValue: { summary: "success" },
      },
      options: ["success", "info", "warning", "error", undefined],
      description: `\`success\`, \`info\`, \`warning\`, \`error\`, \`undefined\``,
    },
    onClose: {
      control: "function",
      description: `Callback fired when the component requests to be closed.
        When provided, a close icon button is displayed that triggers the callback when clicked.`,
    },
  },
  parameters: {
    controls: {
      include: ["title", "severity", "onClose"],
    },
    docs: {
      description: {
        component: `An alert displays a short, important message in a way that attracts the
        user's attention without interrupting the user's task.
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
} as Meta<typeof Alert>;

const AlertChildrenContentLong = () => {
  return (
    <Typography variant="body2_14_regular">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut{" "}
      <u style={{ color: theme.palette.lunit_token.core.link_primary }}>
        labore et dolore
      </u>{" "}
      magna aliqua. A diam sollicitudin tempor id eu nisl nunc mi. Auctor augue
      mauris augue neque gravida in fermentum.
    </Typography>
  );
};

const AlertChildrenContentShort = () => {
  return (
    <Typography variant="body2_14_regular">
      Lorem ipsum dolor sit amet, consectetur adipiscin
    </Typography>
  );
};

const AlertBottomAction = () => {
  return (
    <Box sx={{ display: "flex", columnGap: "8px" }}>
      <Button color="primary" kind="contained">
        Button
      </Button>
      <Button color="secondary" kind="ghost">
        Button
      </Button>
    </Box>
  );
};

const Template: StoryFn<typeof Alert> = (args) => (
  <Alert sx={{ width: "620px" }} {...args}>
    <AlertChildrenContentLong />
  </Alert>
);

const Template2: StoryFn<typeof Alert> = (args) => (
  <>
    <Alert sx={{ width: "504px" }} {...args}>
      <AlertChildrenContentLong />
    </Alert>
    <Alert sx={{ width: "620px" }} severity={args.severity} onClose={() => {}}>
      <AlertChildrenContentLong />
    </Alert>
    <Alert sx={{ width: "620px" }} severity={args.severity} onClose={() => {}}>
      <AlertChildrenContentShort />
    </Alert>
    <Alert sx={{ width: "620px" }} severity={args.severity}>
      <AlertChildrenContentShort />
    </Alert>
  </>
);
const Template3: StoryFn<typeof Alert> = (args) => (
  <>
    <Alert
      sx={{ width: "504px" }}
      bottomAction={<AlertBottomAction />}
      {...args}
    >
      <AlertChildrenContentLong />
    </Alert>
  </>
);

export const AlertBase = {
  render: Template,

  args: {
    title: "Alert title",
    severity: "success",
    onClose: action("Close Button is clicked"),
  },
};

export const AlertVariant = {
  render: Template2,

  args: {
    title: "Alert title",
    severity: "success",
    onClose: action("Close Button is clicked"),
  },
};

export const AlertWithBottomAction = {
  render: Template3,

  args: {
    title: "Alert title",
    severity: "success",
    onClose: action("Close Button is clicked"),
  },
};
