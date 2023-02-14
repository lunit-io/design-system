import React from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@mui/material";
import { action } from "@storybook/addon-actions";

import Button from "@/components/Button";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
      defaultValue: "Text",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
      defaultValue: "small",
      table: {
        defaultValue: { summary: "small" },
      },
    },
    onClick: {
      type: "function",
      control: {
        type: "radio",
      },
      options: ["function", undefined],
      mapping: {
        function: action("onClick"),
        undefined: undefined,
      },
      defaultValue: "function",
      description:
        "It is a callback function that is called when the button is clicked.",
    },
    kind: {
      control: false,
      options: ["contained", "outlined", "ghost"],
      description: "Button has three Kinds Contained, Outlined, Ghost",
      defaultValue: "contained",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
  },
  parameters: {
    controls: {
      include: ["onClick", "children", "color", "size", "disabled", "kind"],
    },
    docs: {
      description: {
        component: `It is a kind Button docs. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = ({
  kind,
  color,
  children,
  ...restProps
}) => {
  return (
    <>
      <Table sx={{ width: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={3}
              sx={{
                typography: "body1_16_semibold",
                color: "inherit",
              }}
            >
              Kind
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                width: "33.33333%",
                typography: "body2_14_medium",
                color: "inherit",
              }}
            >
              Contained(default)
            </TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Outlined
            </TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Ghost
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Button color={color} {...restProps}>
                {children}
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="outlined" color="primary" {...restProps}>
                {children}
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost" color={color} {...restProps}>
                {children}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const Kind = ButtonTemplate.bind({});

const ContainedButtonTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Table sx={{ width: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Contained Primary
            </TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Contained Secondary
            </TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Contained Error
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Enable
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" color="error">
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Hover
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="contained">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="contained" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="contained" color="error">
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Focus
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" className="Mui-focusVisible">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...args}
                kind="contained"
                color="secondary"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...args}
                kind="contained"
                color="error"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Disabled
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" color="secondary" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="contained" color="error" disabled>
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const KindContained = ContainedButtonTemplate.bind({});
KindContained.argTypes = {
  color: {
    control: "false",
    options: ["primary", "secondary", "error"],
    defaultValue: "primary",
    description: `The color of the component.
    \n It supports both default and custom theme colors,
    \n which can be added as shown in the palette customization guide.`,
    table: {
      defaultValue: { summary: "primary" },
    },
  },
};
KindContained.storyName = "Kind: Contained";

const GhostButtonTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Table sx={{ width: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Ghost Primary
            </TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Ghost Secondary
            </TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Ghost Error
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Enable
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" color="error">
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Hover
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="ghost">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="ghost" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} id="hover" kind="ghost" color="error">
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Focus
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" className="Mui-focusVisible">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...args}
                kind="ghost"
                color="secondary"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...args}
                kind="ghost"
                color="error"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Disabled
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" color="secondary" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...args} kind="ghost" color="error" disabled>
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <br />
    </>
  );
};

export const KindGhost = GhostButtonTemplate.bind({});
KindGhost.argTypes = {
  color: {
    control: "false",
    options: ["primary", "secondary", "error"],
    description: `The color of the component.
    \n It supports both default and custom theme colors,
    \n which can be added as shown in the palette customization guide.`,
    defaultValue: "primary",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
};
KindGhost.storyName = "Kind: Ghost";

const OutlinedButtonTemplate: ComponentStory<typeof Button> = ({
  color,
  ...restProps
}) => {
  return (
    <>
      <Table sx={{ width: 250 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Outlined Primary
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Enable
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="outlined">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Hover
            </TableCell>
            <TableCell>
              <Button {...restProps} id="hover" kind="outlined">
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Focus
            </TableCell>
            <TableCell>
              <Button
                {...restProps}
                kind="outlined"
                className="Mui-focusVisible"
              >
                Text
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ typography: "body2_14_regular", color: "inherit" }}
            >
              Disabled
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="outlined" disabled>
                Text
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const KindOutlined = OutlinedButtonTemplate.bind({});
KindOutlined.argTypes = {
  color: {
    control: "false",
    options: ["primary"],
    defaultValue: "primary",
    description: `The color of the component.
    \n It supports both default and custom theme colors,
    \n which can be added as shown in the palette customization guide.`,
    table: {
      type: { summary: "primary" },
      defaultValue: { summary: "primary" },
    },
  },
};
KindOutlined.storyName = "Kind: Outlined";
