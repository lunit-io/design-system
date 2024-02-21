import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import { action } from "@storybook/addon-actions";

import Button from "@/components/Button";

import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    kind: "contained",
    children: "Text",
    disabled: false,
    size: "small",
    onClick: () => {
      action("onClick")();
      console.log("onClick");
    },
  },
  argTypes: {
    children: {
      type: "string",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
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
      description:
        "It is a callback function that is called when the button is clicked.",
    },
    kind: {
      control: false,
      options: ["contained", "outlined", "ghost"],
      description: "Button has three Kinds Contained, Outlined, Ghost",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
    variant: {
      control: {
        type: "radio",
      },
      options: ["contained", "outlined", "text", "ghost"],
      description: "The variant is alias of kind.",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
  },
  parameters: {
    controls: {
      include: [
        "onClick",
        "children",
        "color",
        "size",
        "disabled",
        "kind",
        "variant",
      ],
    },
    pseudo: {
      hover: [
        "#hover1",
        "#hover2",
        "#hover3",
        "#hover4",
        "#hover5",
        "#hover6",
        "#hover7",
      ],
    },
    docs: {
      description: {
        component: `It is a kind Button docs. For more details, please
				see [Material-UI Button](https://mui.com/material-ui/react-button/).`,
      },
    },
  },
} as Meta<typeof Button>;

const ButtonTemplate: StoryFn<typeof Button> = ({
  kind,
  color,
  variant,
  children,
  ...restProps
}) => {
  return (
    <>
      <Button color={color} {...restProps} sx={{ mr: 2 }}>
        {children}
      </Button>
      <Button kind="outlined" color="primary" {...restProps} sx={{ mr: 2 }}>
        {children}
      </Button>
      <Button kind="ghost" color={color} {...restProps}>
        {children}
      </Button>
    </>
  );
};

export const Kind = {
  render: ButtonTemplate,
};

const ContainedButtonTemplate: StoryFn<typeof Button> = (args) => {
  const { kind, variant, ...restProps } = args;
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
              <Button {...restProps} kind="contained">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="contained" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="contained" color="error">
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
              <Button {...restProps} id="hover1" kind="contained">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...restProps}
                id="hover2"
                kind="contained"
                color="secondary"
              >
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} id="hover3" kind="contained" color="error">
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
              <Button
                {...restProps}
                kind="contained"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...restProps}
                kind="contained"
                color="secondary"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...restProps}
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
              <Button {...restProps} kind="contained" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...restProps}
                kind="contained"
                color="secondary"
                disabled
              >
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="contained" color="error" disabled>
                {args.children}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const KindContained = {
  render: ContainedButtonTemplate,

  argTypes: {
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
  },

  name: "Kind: Contained",
};

const GhostButtonTemplate: StoryFn<typeof Button> = (args) => {
  const { kind, variant, ...restProps } = args;
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
              <Button {...restProps} kind="ghost">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="ghost" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="ghost" color="error">
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
              <Button {...restProps} id="hover4" kind="ghost">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} id="hover5" kind="ghost" color="secondary">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} id="hover6" kind="ghost" color="error">
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
              <Button {...restProps} kind="ghost" className="Mui-focusVisible">
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...restProps}
                kind="ghost"
                color="secondary"
                className="Mui-focusVisible"
              >
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...restProps}
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
              <Button {...restProps} kind="ghost" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="ghost" color="secondary" disabled>
                {args.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="ghost" color="error" disabled>
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

export const KindGhost = {
  render: GhostButtonTemplate,

  argTypes: {
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
  },

  name: "Kind: Ghost",
};

const OutlinedButtonTemplate: StoryFn<typeof Button> = ({
  kind,
  variant,
  color,
  ...restProps
}) => {
  return (
    <>
      <Table sx={{ width: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Outlined Primary
            </TableCell>
            <TableCell sx={{ typography: "body2_14_medium", color: "inherit" }}>
              Outlined Secondary
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
                {restProps.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="outlined" color="secondary">
                {restProps.children}
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
              <Button {...restProps} id="hover7" kind="outlined">
                {restProps.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...restProps}
                id="hover7"
                kind="outlined"
                color="secondary"
              >
                {restProps.children}
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
                {restProps.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                {...restProps}
                kind="outlined"
                color="secondary"
                className="Mui-focusVisible"
              >
                {restProps.children}
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
                {restProps.children}
              </Button>
            </TableCell>
            <TableCell>
              <Button {...restProps} kind="outlined" color="secondary" disabled>
                {restProps.children}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const KindOutlined = {
  render: OutlinedButtonTemplate,

  argTypes: {
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
  },

  name: "Kind: Outlined",
};
